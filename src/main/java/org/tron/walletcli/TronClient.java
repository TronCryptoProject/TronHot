package org.tron.walletcli;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.account.NewOrder;
import com.binance.api.client.domain.account.NewOrderResponse;
import com.google.protobuf.ByteString;
import com.google.protobuf.CodedOutputStream;
import com.google.protobuf.InvalidProtocolBufferException;
import com.sun.tools.corba.se.idl.InterfaceGen;
import com.typesafe.config.Config;
import javafx.util.Pair;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spongycastle.util.encoders.Hex;
import org.tron.api.GrpcAPI;
import org.tron.api.GrpcAPI.AccountList;
import org.tron.api.GrpcAPI.AssetIssueList;
import org.tron.api.GrpcAPI.NodeList;
import org.tron.api.GrpcAPI.WitnessList;
import org.tron.api.GrpcAPI.Node;
import org.tron.common.crypto.ECKey;
import org.tron.common.utils.*;
import org.tron.core.config.Configuration;
import org.tron.protos.Contract;
import org.tron.protos.Protocol;
import org.tron.protos.Protocol.Account;
import org.tron.protos.Protocol.Block;
import org.tron.protos.Protocol.Transaction;
import org.tron.walletserver.GrpcClient;
import org.tron.walletserver.WalletClient;
import org.tron.common.utils.ByteUtil;
import org.apache.commons.io.*;

import java.io.*;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URL;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.*;

import static org.tron.common.crypto.Hash.sha256;


class TxComp implements Comparator<Map<String,String>>{
	private String compkey;
	public TxComp(String compkey){
		this.compkey = compkey;
	}
	public int compare(Map<String,String> map1 ,Map<String,String> map2){
		if (map1.containsKey(compkey) && map2.containsKey(compkey)){
			String val1 = map1.get(compkey);
			String val2 = map2.get(compkey);
			return val1.compareTo(val2);
		}
		return -1;
	}
}

public class TronClient {

  private static final Logger logger = LoggerFactory.getLogger("TronClient");
  private WalletClient wallet;
  private HashMap<String, ArrayList<HashMap<String,String>>> tx_map = new HashMap<>();
  public static final String FAILED = "failed";
  public static final String SUCCESS = "success";

  private static Config config = Configuration.getByPath("config.conf");
  private static List<String> fullnodelist = config.getStringList("fullnode.ip.list");
  private static BlockingQueue<ItemBaggage> priorityQueue = new PriorityBlockingQueue<ItemBaggage>();
	static int ip_idx = 0;


  static {
  	runDaemonThread();
  }
  public JSONObject registerWallet(String password, String accountName) {
	  JSONObject json_obj = new JSONObject();
	  if (!WalletClient.passwordValid(password)) {
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "Password is not valid.");
	  }else{
		  wallet = new WalletClient(true);
          //Boolean ret = wallet.createAccount(Protocol.AccountType.Normal, accountName.getBytes());
		  wallet.store(password);
		  json_obj.put("result", SUCCESS);
		  json_obj.put("privKey", wallet.getPrivateKey());
		  json_obj.put("password", password);
		  json_obj.put("accountName", wallet.getAccountName());
          json_obj.put("pubAddress", WalletClient.encode58Check(wallet.getAddress()));
          json_obj.put("rawPubAddress", wallet.getRawAddress());
	  }

	  return json_obj;
  }

  public JSONObject importWalletWithPubAddressCheck(String password, String priKey, String checkerPubAddress){
	  JSONObject json_obj = new JSONObject();
	  JSONObject res_json = importWallet(password, priKey);
	  System.out.println(res_json);
	  if (res_json.containsKey("result") && res_json.get("result") == SUCCESS){
	  		if (!res_json.get("pubAddress").equals(checkerPubAddress)){
				json_obj.put("result", FAILED);
				json_obj.put("reason", "Please make sure the private key and password match the account address you" +
						" are signing into.");
				return json_obj;
			}else{
	  			return res_json;
			}
	  }else{
	  		return res_json;
	  }
  }

  public JSONObject importWallet(String password, String priKey) {
		JSONObject json_obj = new JSONObject();
		if (!WalletClient.passwordValid(password)) {
			json_obj.put("result", FAILED);
			json_obj.put("reason", "Password is not valid.");
		  	return json_obj;
		}
		if (!WalletClient.priKeyValid(priKey)){
			json_obj.put("result", FAILED);
            json_obj.put("reason", "Private key is not valid.");
		  	return json_obj;
		}
		wallet = new WalletClient(priKey);
		if (wallet.getEcKey() == null) {
			json_obj.put("result", FAILED);
            json_obj.put("reason", "Unable to get wallet using private key");
		  	return json_obj;
		}

		wallet.store(password);
		json_obj.put("result", SUCCESS);
		json_obj.put("accountName", wallet.getAccountName());
		json_obj.put("pubAddress", WalletClient.encode58Check(wallet.getAddress()));
		json_obj.put("rawPubAddress", wallet.getRawAddress());

		return json_obj;
  }

  public JSONObject restoreWallet(String pubKey){
      JSONObject json_obj = new JSONObject();
      wallet = WalletClient.GetWalletIgnorPrivKey(pubKey);

	if (wallet == null) {
	    json_obj.put("result", FAILED);
        json_obj.put("reason", "Public key is not valid.");
	}else{

        json_obj.put("result", SUCCESS);
        json_obj.put("accountName", wallet.getAccountName());
        json_obj.put("pubAddress", WalletClient.encode58Check(wallet.getAddress()));
        json_obj.put("rawPubAddress", wallet.getRawAddress());
    }

    return json_obj;
  }
  
  public JSONObject setAccountName(String newaccountname){
	  JSONObject json_obj = new JSONObject();
	  Account account = queryAccount();
	  if (account != null){
		  boolean res = wallet.updateAccount(newaccountname);
		  if (!res){
			  logger.warn("Warning: Couldn't update account!");
			  json_obj.put("result", FAILED);
              json_obj.put("reason", "Transaction to create account failed.");
		  }else{
			  json_obj.put("result", SUCCESS);
		  }
	  }else{
		  json_obj.put("result", FAILED);
          json_obj.put("reason", "Failure to query account");
	  }

	  return json_obj;
  }


  public JSONObject changePassword(String oldPassword, String newPassword) {
      JSONObject json_obj = new JSONObject();

	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: ChangePassword failed, Please login first !!");
	  json_obj.put("result", FAILED);
	  json_obj.put("reason", "Unable to change password because you need to login in first.");
	  return json_obj;
	}
	if (!WalletClient.passwordValid(oldPassword)) {
	  logger.warn("Warning: ChangePassword failed, OldPassword is invalid !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Old password is not valid.");
        return json_obj;
	}
	if (!WalletClient.passwordValid(newPassword)) {
	  logger.warn("Warning: ChangePassword failed, NewPassword is invalid !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "New password is not valid.");
        return json_obj;
	}
	if (!WalletClient.checkPassWord(oldPassword)) {
	  logger.warn("Warning: ChangePassword failed, Wrong password !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Wrong old password entered.");
        return json_obj;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(oldPassword);
	  if (wallet == null) {
		logger.warn("Warning: ChangePassword failed, No wallet !!");
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Unable to fetch wallet from storage.");
          return json_obj;
	  }
	}
	byte[] priKeyAsc = wallet.getEcKey().getPrivKeyBytes();
	String priKey = Hex.toHexString(priKeyAsc, 0, priKeyAsc.length);
	JSONObject import_res = importWallet(newPassword, priKey);

    if (import_res.get("result").equals(SUCCESS)){
        json_obj.put("result", SUCCESS);
    }else{
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Failure to import wallet!");
    }

	return json_obj;
  }

  public JSONObject login(String password) {
      JSONObject json_obj = new JSONObject();
	if (!WalletClient.passwordValid(password)) {
	    json_obj.put("result", FAILED);
        json_obj.put("reason", "Password is not valid.");
	  return json_obj;
	}
	if (wallet == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: Login failed, Please registerWallet or importWallet first !!");
          json_obj.put("result", FAILED);
          json_obj.put("reason", "You need to register or import wallet before logging in.");
          return json_obj;
	  }
	}

	if (wallet.login(password)){
	    json_obj.put("result", SUCCESS);
	    json_obj.put("accountName", wallet.getAccountName());
	    json_obj.put("pubAddress", WalletClient.encode58Check(wallet.getAddress()));
        json_obj.put("rawPubAddress", wallet.getRawAddress());
    }else{
	    json_obj.put("result", FAILED);
        json_obj.put("reason", "Login failed because something is wrong with the password.");
    }
    return json_obj;
  }

  public JSONObject logout() {
      JSONObject json_obj = new JSONObject();
	if (wallet != null) {
	  wallet.logout();
        json_obj.put("result", SUCCESS);
	}else{
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to logout from wallet.");
    }
    return json_obj;
  }

  //password is current, will be enc by password2.
  public JSONObject backupWallet(String password) {
      JSONObject json_obj = new JSONObject();

	if (wallet == null || !wallet.isLoginState()) {
	    logger.warn("Warning: BackupWallet failed, Please login first !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to change password because you need to login in first.");
	    return json_obj;
	}
	if (!WalletClient.passwordValid(password)) {
	  logger.warn("Warning: BackupWallet failed, password is Invalid !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Password is not valid.");
        return json_obj;
	}

	if (!WalletClient.checkPassWord(password)) {
	  logger.warn("Warning: BackupWallet failed, Wrong password !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Wrong password entered.");
        return json_obj;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: BackupWallet failed, no wallet can be backup !!");
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Unable to fetch wallet from storage. There's no backup.");
          return json_obj;
	  }
	}
	ECKey ecKey = wallet.getEcKey();
	byte[] privKeyPlain = ecKey.getPrivKeyBytes();
	//Enced by encPassword
	String priKey = ByteArray.toHexString(privKeyPlain);

	json_obj.put("result", SUCCESS);
	json_obj.put("privateKey", priKey);
	json_obj.put("publicKey", WalletClient.loadPubKey());
	json_obj.put("password", WalletClient.loadPassword());
	json_obj.put("accountName", queryAccountJSON().get("accountName"));

	return json_obj;
  }

  public JSONObject getAddress() {
      JSONObject json_obj = new JSONObject();
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: GetAddress failed,  Please login first !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "You need to login in first before accessing the wallet.");
	  return json_obj;
	}

	json_obj.put("result", SUCCESS);
	if (wallet.getEcKey() == null) {
        json_obj.put("address", WalletClient.getAddressByStorage());
	    return json_obj;
	}

	json_obj.put("address", WalletClient.encode58Check(wallet.getAddress()));
	return json_obj;
  }

  private Account queryAccount() {
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: QueryAccount failed,  Please login first !!");
	  return null;
	}

	try {
	  return wallet.queryAccount();
	} catch (Exception ex) {
	  return null;
	}
  }

	public JSONObject queryAccountJSON(){
	  JSONObject json_obj = new JSONObject();
	  Account account = queryAccount();
	  if (account != null){
	      json_obj.put("result", SUCCESS);
	      json_obj.put("pubAddress", WalletClient.encode58Check(wallet.getAddress()));
          json_obj.put("rawPubAddress", wallet.getRawAddress());
		  json_obj.put("balance", account.getBalance());
		  json_obj.put("accountName", new String(account.getAccountName().toByteArray(), Charset.forName("UTF-8")));
		  json_obj.put("lastOperation", account.getLatestOprationTime());

		  JSONArray json_arr = new JSONArray();

		  if (account.getVotesCount() > 0){
		  		for(Account.Vote vote_item: account.getVotesList()){
		  			JSONObject vote_obj = new JSONObject();
		  			vote_obj.put("address", WalletClient.encode58Check(vote_item.getVoteAddress().toByteArray()));
		  			vote_obj.put("count", vote_item.getVoteCount());
		  			json_arr.add(vote_obj);
				}
		  }
		  json_obj.put("votes",json_arr);
	  }else{
	      json_obj.put("result", FAILED);
	      json_obj.put("reason", "Unable to fetch account details!");
      }
	  return json_obj;
	}

  public JSONObject sendCoin(String password, String toAddress, long amount) {
      JSONObject json_obj = new JSONObject();

	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: SendCoin failed,  Please login first !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to send currency. Please login in first.");
        return json_obj;
	}
	if (!WalletClient.passwordValid(password)) {
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Password is invalid!");
        return json_obj;
	}
	byte[] to = WalletClient.decodeFromBase58Check(toAddress);
	if (to == null) {
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Recipient address is invalid!");
        return json_obj;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: SendCoin failed, Load wallet failed !!");
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Unable to send currency due to wallet load failure.");
          return json_obj;
	  }
	}

	  Transaction res_tx = wallet.prepareTransaction(to, amount);
	  if (res_tx == null){
		  logger.warn("Warning: Couldn't prepare transaction");
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "Prepare transaction failed.");
		  return json_obj;
	  }else{
	  	Transaction signed_tx = wallet.signTransaction(res_tx);
	  	if (WalletClient.broadcastTransaction(signed_tx)){
			saveTransaction(WalletClient.encode58Check(wallet.getAddress()), toAddress, amount ,
					signed_tx.getRawData().getTimestamp());
			json_obj.put("result", SUCCESS);
		}else{
			json_obj.put("result", FAILED);
			json_obj.put("reason", "Broadcast transaction failed.");
			return json_obj;
		}

	  }


    return json_obj;
  }


  public JSONObject prepareTransaction(String password, String toAddress, long amount){
      JSONObject json_obj = new JSONObject();
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: Create transaction failed,  Please login first !!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to create transaction. Please login in first.");
	  return json_obj;
	}
	if (!WalletClient.passwordValid(password)) {
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Password is invalid!");
	  return json_obj;
	}
	byte[] to = WalletClient.decodeFromBase58Check(toAddress);
	if (to == null) {
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Recipient address is invalid!");
	  return json_obj;
	}


	Transaction res_tx = wallet.prepareTransaction(to, amount);
	if (res_tx == null){
	  logger.warn("Warning: Couldn't prepare transaction");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Prepare transaction failed.");
	}else{
	  byte[] data_bytes = new byte[res_tx.getSerializedSize()];

	  try{
		  res_tx.writeTo(CodedOutputStream.newInstance(data_bytes));
	  }catch (IOException e) {
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Transaction write failed: " + e.getMessage());
		  return json_obj;
	  }

	  if (res_tx.hasRawData()){
	      json_obj.put("data", ByteUtil.toHexString(data_bytes));
		json_obj.put("timestamp", res_tx.getRawData().getTimestamp());
		json_obj.put("refblocknum", res_tx.getRawData().getRefBlockNum());
		json_obj.put("from", getAddress().get("address"));
		json_obj.put("to", toAddress);
		json_obj.put("amount", amount);

		  JSONArray json_sigs = new JSONArray();
		  for(ByteString bs : res_tx.getSignatureList()){
			  json_sigs.add(Hex.toHexString(bs.toByteArray()));
		  }
		  json_obj.put("signatures", json_sigs);


		String result = "";
		long totalfee = 0;

		for (Transaction.Result r : res_tx.getRetList()){
			totalfee += r.getFee();
			if (r.getRetValue() == 1){
				result = FAILED;
			}else if (r.getRetValue() != 0 && !result.equals(FAILED)){
				result = "pending";
			}
		}
		if (result.equals("")) result = SUCCESS;

		json_obj.put("fee", totalfee);
		json_obj.put("result", result);
		json_obj.put("txhash", TransactionUtils.getHash(res_tx));
	  }else{
		json_obj.put("result", FAILED);
		json_obj.put("reason", "Created transaction does not have raw data.");
	  }
	}

	return json_obj;
  }

  public JSONObject getSignTxInfo(String hextx) {
      JSONObject json_obj = new JSONObject();

	  byte[] tx_byte = Hex.decode(hextx);
	  Transaction transaction;
	  try{
		  transaction = Transaction.parseFrom(tx_byte);
	  }catch(InvalidProtocolBufferException e){
	      json_obj.put("result", FAILED);
	      json_obj.put("reason", "Unable to parse transaction: " + e.getMessage());
		  return json_obj;
	  }


	  if (transaction.hasRawData()){
		  json_obj.put("timestamp", transaction.getRawData().getTimestamp());
		  json_obj.put("refblocknum", transaction.getRawData().getRefBlockNum());

		  Transaction.Contract contract =  transaction.getRawData().getContract(0);
		  try{
			  final Contract.TransferContract transferContract = contract.getParameter().
					  unpack(Contract.TransferContract.class);
			  final byte[] addressBytes = transferContract.getOwnerAddress().toByteArray();
			  final String addressHex = WalletClient.encode58Check(addressBytes);
			  final byte[] toAddressBytes = transferContract.getToAddress().toByteArray();
			  final String toAddressHex = WalletClient.encode58Check(toAddressBytes);
			  final long amount = transferContract.getAmount();

			  json_obj.put("from", addressHex);
			  json_obj.put("to", toAddressHex);
			  json_obj.put("amount", amount);

		  }catch(InvalidProtocolBufferException e){
              json_obj.put("result", FAILED);
              json_obj.put("reason", "Unable to fetch transaction contract details.");
              return json_obj;
		  }

		  JSONArray json_sigs = new JSONArray();
		  for(ByteString bs : transaction.getSignatureList()){
			  json_sigs.add(Hex.toHexString(bs.toByteArray()));
		  }
		  json_obj.put("signatures", json_sigs);


		  String result = "";
		  long totalfee = 0;

		  for (Transaction.Result r : transaction.getRetList()){
			  totalfee += r.getFee();
			  if (r.getRetValue() == 1){
				  result = FAILED;
			  }else if (r.getRetValue() != 0 && !result.equals(FAILED)){
				  result = "pending";
			  }
		  }
		  if (result.equals("")) result = SUCCESS;

		  json_obj.put("fee", totalfee);

		  json_obj.put("result", result);
		  json_obj.put("txhash", TransactionUtils.getHash(transaction));
	  }else{
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Imported transaction does not have raw data.");
	  }

	  return json_obj;
  }

  public JSONObject signTransaction(String password, String hextx) {
      JSONObject json_obj = new JSONObject();

	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: Sign transaction failed, Please login first!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to sign transaction. Please login in first.");
	  return json_obj;
	}
	if (!WalletClient.passwordValid(password)) {
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Password is invalid!");
        return json_obj;
	}

	if (hextx == null){
	  logger.warn("Warning: Transaction is null, nothing to sign!");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Transaction is null, nothing to sign!");
        return json_obj;
	}

	byte[] tx_byte = Hex.decode(hextx);
	Transaction transaction;
	try{
		transaction = Transaction.parseFrom(tx_byte);
	}catch(InvalidProtocolBufferException e){
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Transaction parsing failed: " + e.getMessage());
        return json_obj;
	}

	Transaction res_tx = wallet.signTransaction(transaction);

	if (res_tx == null){
	  logger.warn("Warning: Couldn't sign transaction");
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Could not sign transaction.");
        return json_obj;
	}else{
	   
	  byte[] data_bytes = new byte[res_tx.getSerializedSize()];
	  try{
		  res_tx.writeTo(CodedOutputStream.newInstance(data_bytes));
	  }catch (IOException e){
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Signed transaction write failed: " + e.getMessage());
          return json_obj;
	  }


	  if (res_tx.hasRawData()){
          json_obj.put("data", ByteUtil.toHexString(data_bytes));
		json_obj.put("timestamp", res_tx.getRawData().getTimestamp());
		json_obj.put("refblocknum", res_tx.getRawData().getRefBlockNum());

		Transaction.Contract contract =  res_tx.getRawData().getContract(0);
		try{
			final Contract.TransferContract transferContract = contract.getParameter().
					unpack(Contract.TransferContract.class);
			final byte[] addressBytes = transferContract.getOwnerAddress().toByteArray();
			final String addressHex = WalletClient.encode58Check(addressBytes);
			final byte[] toAddressBytes = transferContract.getToAddress().toByteArray();
			final String toAddressHex = WalletClient.encode58Check(toAddressBytes);
			final long amount = transferContract.getAmount();

			json_obj.put("from", addressHex);
			json_obj.put("to", toAddressHex);
			json_obj.put("amount", amount);

		}catch(InvalidProtocolBufferException e){
            json_obj.put("result", FAILED);
            json_obj.put("reason", "Unable to fetch transaction contract details: " + e.getMessage());
            return json_obj;
		}

		JSONArray json_sigs = new JSONArray();
		for(ByteString bs : res_tx.getSignatureList()){
			json_sigs.add(Hex.toHexString(bs.toByteArray()));
		}
		json_obj.put("signatures", json_sigs);

		String result = "";
		long totalfee = 0;

		for (Transaction.Result r : res_tx.getRetList()){
			totalfee += r.getFee();
			if (r.getRetValue() == 1){
				result = FAILED;
			}else if (r.getRetValue() != 0 && !result.equals(FAILED)){
				result = "pending";
			}
		}
		if (result.equals("")) result = SUCCESS;

		json_obj.put("fee", totalfee);

		json_obj.put("result", result);
		json_obj.put("txhash", TransactionUtils.getHash(res_tx));
	  }else{
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Imported transaction does not have raw data.");
	  }
	}

	return json_obj;
  }

  public JSONObject broadcastTransaction(String hextx){
	byte[] tx_byte = Hex.decode(hextx);
	Transaction transaction;
	JSONObject json_obj = new JSONObject();

	try{
		transaction = Transaction.parseFrom(tx_byte);

		Transaction.Contract contract =  transaction.getRawData().getContract(0);
		try{
			final Contract.TransferContract transferContract = contract.getParameter().
					unpack(Contract.TransferContract.class);
			final byte[] addressBytes = transferContract.getOwnerAddress().toByteArray();
			final String addressHex = WalletClient.encode58Check(addressBytes);
			final byte[] toAddressBytes = transferContract.getToAddress().toByteArray();
			final String toAddressHex = WalletClient.encode58Check(toAddressBytes);
			final long amount = transferContract.getAmount();

			json_obj.put("from", addressHex);
			json_obj.put("to", toAddressHex);
			json_obj.put("amount", amount);

		}catch(InvalidProtocolBufferException e){
            json_obj.put("result", FAILED);
            json_obj.put("reason", "Unable to fetch transaction contract details: " + e.getMessage());
            return json_obj;
		}
	}catch (InvalidProtocolBufferException e){
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to parse transaction: " + e.getMessage());
        return json_obj;
	}


	boolean res = WalletClient.broadcastTransaction(transaction);
	if (!res){
	  logger.warn("Warning: Broadcast transaction failed!");
	  json_obj.put("result", FAILED);
	  json_obj.put("reason", "Broadcasting transaction failed!");
	}else{
	  json_obj.put("result", SUCCESS);
		String publi_addr = String.valueOf(json_obj.get("from"));
		String to_addr = String.valueOf(json_obj.get("to"));
		long amount = Long.parseLong(String.valueOf(json_obj.get("amount")));

		saveTransaction(publi_addr, to_addr, amount , transaction.getRawData().getTimestamp());

	}

	return json_obj;
  }


  private void saveTransaction(String from, String to, long amount, long timestamp){

	  HashMap<String,String> curr_tx_map = new HashMap<>();
	  curr_tx_map.put("from", from);
	  curr_tx_map.put("to", to);
	  curr_tx_map.put("amount", String.valueOf(amount));
	  curr_tx_map.put("timestamp", String.valueOf(timestamp));


	  if (tx_map.containsKey(from)){
		  ArrayList<HashMap<String,String>> list = tx_map.get(from);
		  list.add(curr_tx_map);
		  Collections.sort(list, new TxComp("timestamp"));
		  tx_map.put(from, list);
	  }else {
		  ArrayList<HashMap<String, String>> list = new ArrayList<>();
		  list.add(curr_tx_map);
		  tx_map.put(from, list);
	  }

	  if (tx_map.containsKey(to)){
		  ArrayList<HashMap<String,String>> list = tx_map.get(to);
		  list.add(curr_tx_map);
		  Collections.sort(list, new TxComp("timestamp"));
		  tx_map.put(to, list);
	  }else {
		  ArrayList<HashMap<String, String>> list = new ArrayList<>();
		  list.add(curr_tx_map);
		  tx_map.put(to, list);
	  }

	  try{
		  FileOutputStream fos = new FileOutputStream("wallettx");
		  ObjectOutputStream outstream = new ObjectOutputStream(fos);
		  outstream.writeObject(tx_map);
		  outstream.close();
		  fos.close();
	  }catch(IOException e){}

  }

  public JSONObject getTransactions(String publicAddress){
	  JSONObject json_obj = new JSONObject();

	  try{
	  	  //make sure data is consistent
		  FileInputStream fis = new FileInputStream("wallettx");
		  ObjectInputStream instream = new ObjectInputStream(fis);
		  HashMap<String, ArrayList<HashMap<String,String>>> imap = (HashMap) instream.readObject();
		  instream.close();
		  fis.close();

		  JSONArray json_array = new JSONArray();

		  if (imap.containsKey(publicAddress)){
			  for (HashMap<String,String> map: imap.get(publicAddress)){
				  JSONObject obj = new JSONObject();
				  obj.putAll(map);

				  long milli = Long.parseLong((String)obj.get("timestamp"));
				  Date date = new Date(milli);
				  SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm zzz");
				  obj.put("timestamp", df.format(date));

				  json_array.add(obj);
			  }
		  }

		  json_obj.put("result" ,SUCCESS);
		  json_obj.put("transactions", json_array);
	  }catch(Exception e){
	  		json_obj.put("result", "failed");
	  		json_obj.put("reason", "Unable to fetch transactions: " + e.getMessage());
	  }

	  return json_obj;
  }

  public boolean transferAsset(String password, String toAddress, String assertName, long amount) {
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: TransferAsset failed,  Please login first !!");
	  return false;
	}
	if (!WalletClient.passwordValid(password)) {
	  return false;
	}
	byte[] to = WalletClient.decodeFromBase58Check(toAddress);
	if (to == null) {
	  return false;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: TransferAsset failed, Load wallet failed !!");
		return false;
	  }
	}

	return wallet.transferAsset(to, assertName.getBytes(), amount);
  }

  public boolean participateAssetIssue(String password, String toAddress, String assertName,
	  long amount) {
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: TransferAsset failed,  Please login first !!");
	  return false;
	}
	if (!WalletClient.passwordValid(password)) {
	  return false;
	}
	byte[] to = WalletClient.decodeFromBase58Check(toAddress);
	if (to == null) {
	  return false;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: TransferAsset failed, Load wallet failed !!");
		return false;
	  }
	}

	return wallet.participateAssetIssue(to, assertName.getBytes(), amount);
  }

  public boolean assetIssue(String password, String name, long totalSupply, int trxNum, int icoNum,
	  long startTime, long endTime, int decayRatio, int voteScore, String description, String url) {
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: assetIssue failed,  Please login first !!");
	  return false;
	}
	if (!WalletClient.passwordValid(password)) {
	  return false;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: assetIssue failed, Load wallet failed !!");
		return false;
	  }
	}

	try {
	  Contract.AssetIssueContract.Builder builder = Contract.AssetIssueContract.newBuilder();
	  builder.setOwnerAddress(ByteString.copyFrom(wallet.getAddress()));
	  builder.setName(ByteString.copyFrom(name.getBytes()));
	  if (totalSupply <= 0) {
		return false;
	  }
	  builder.setTotalSupply(totalSupply);
	  if (trxNum <= 0) {
		return false;
	  }
	  builder.setTrxNum(trxNum);
	  if (icoNum <= 0) {
		return false;
	  }
	  builder.setNum(icoNum);
	  long now = System.currentTimeMillis();
	  if (startTime <= now) {
		return false;
	  }
	  if (endTime <= startTime) {
		return false;
	  }
	  builder.setStartTime(startTime);
	  builder.setEndTime(endTime);
	  builder.setDecayRatio(decayRatio);
	  builder.setVoteScore(voteScore);
	  builder.setDescription(ByteString.copyFrom(description.getBytes()));
	  builder.setUrl(ByteString.copyFrom(url.getBytes()));

	  return wallet.createAssetIssue(builder.build());
	} catch (Exception ex) {
	  return false;
	}
  }

  public boolean createWitness(String password, String url) {
	if (wallet == null || !wallet.isLoginState()) {
	  logger.warn("Warning: createWitness failed,  Please login first !!");
	  return false;
	}
	if (!WalletClient.passwordValid(password)) {
	  return false;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		logger.warn("Warning: createWitness failed, Load wallet failed !!");
		return false;
	  }
	}

	try {
	  return wallet.createWitness(url.getBytes());
	} catch (Exception ex) {
	  return false;
	}
  }

  private static JSONObject parseBlock(Block block){
	  JSONObject json_obj = new JSONObject();
	  if (block == null){
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "There is not such block.");
		  return json_obj;
	  }
	  int transactionCount = block.getTransactionsCount();
	  Protocol.BlockHeader header = block.getBlockHeader();
	  Protocol.BlockHeader.raw data = header.getRawData();
	  ByteString witnessAddress = data.getWitnessAddress();
	  long witnessID = data.getWitnessId();
	  ByteString parentHash = data.getParentHash();
	  ByteString txTrieRoot = data.getTxTrieRoot();
	  long blockNum1 = data.getNumber();

	  long timestamp = data.getTimestamp();
	  Date date = new Date(timestamp);
	  SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm zzz");
	  String date_str = df.format(date);

	  Block.Builder tmp = block.toBuilder();
	  byte[] blockhash_byte =  sha256(tmp.build().toByteArray());
	  String blockhash = ByteArray.toHexString(blockhash_byte);

	  json_obj.put("blockNum", blockNum1);
	  json_obj.put("blockHash", blockhash);
	  json_obj.put("blockSize", block.getSerializedSize());
	  json_obj.put("timestamp", date_str);
	  json_obj.put("witnessID", witnessID);
	  json_obj.put("txCount", transactionCount);
	  json_obj.put("parentHash", ByteArray.toHexString(parentHash.toByteArray()));
	  json_obj.put("txTrieRoot", ByteArray.toHexString(txTrieRoot.toByteArray()));
	  json_obj.put("witnessAddress", WalletClient.encode58Check(witnessAddress.toByteArray()));
	  json_obj.put("result", SUCCESS);

	  return json_obj;
  }

  private static JSONObject getBlockWithCustomGrpc(int blockNum, GrpcClient grpc){
  	Block block = grpc.getBlock(blockNum);
  	return parseBlock(block);
  }

  public JSONObject getBlock(int blockNum) {

      Block block =  WalletClient.GetBlock(blockNum);
      return parseBlock(block);

     /* byte[] data_bytes = new byte[block.getSerializedSize()];

      try{
          block.writeTo(CodedOutputStream.newInstance(data_bytes));
          json_obj.put("blockNum", block.getBlockHeader().getRawData().getNumber());
          json_obj.put("blockData", block.);
          json_obj.put("result", SUCCESS);
      }catch (IOException e) {
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Failed to get bytes of block: " + e.getMessage());
      }*/

  }

  public JSONObject voteWitness(String password, HashMap<String, String> witness) {
  	JSONObject json_obj = new JSONObject();

	if (wallet == null || !wallet.isLoginState()) {
		json_obj.put("result", FAILED);
		json_obj.put("reason", "Please login first");
	  	return json_obj;
	}
	if (!WalletClient.passwordValid(password)) {
		json_obj.put("result", FAILED);
		json_obj.put("reason", "Password is not valid");
	  	return json_obj;
	}

	if (wallet.getEcKey() == null || wallet.getEcKey().getPrivKey() == null) {
	  wallet = WalletClient.GetWalletByStorage(password);
	  if (wallet == null) {
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "Failed to load wallet. It's not initialized");
		  return json_obj;
	  }
	}

	try {
		boolean res = wallet.voteWitness(witness);
		if (res){
			json_obj.put("result", SUCCESS);
		}else{
			json_obj.put("result", FAILED);
			json_obj.put("reason", "Failed to vote for witness");
		}
	}catch (Exception ex) {
	  	json_obj.put("result", FAILED);
	  	json_obj.put("reason", "Failed to vote for witness: " + ex.getMessage());
	}

	return json_obj;
  }

  public JSONObject listAccounts() {
      JSONObject json_obj = new JSONObject();
	try {
        JSONArray json_array = new JSONArray();
        AccountList acclist = WalletClient.listAccounts().get();
        List<Account> list = acclist.getAccountsList();
        for(Account account: list){
            JSONObject json_acc = new JSONObject();
            json_acc.put("accountName", account.getAccountName().toStringUtf8());
            json_acc.put("address", WalletClient.encode58Check(account.getAddress().toByteArray()));
            json_acc.put("balance", account.getBalance());
            json_acc.put("type", account.getType());
            json_array.add(json_acc);
        }
        json_obj.put("result", SUCCESS);
        json_obj.put("accounts",json_array);
	} catch (Exception e) {
	    json_obj.put("result", FAILED);
	    json_obj.put("reason", "Unable to get all accounts: " + e.getMessage());
	}
	return json_obj;
  }

  public JSONObject listWitnesses() {
  	JSONObject json_obj = new JSONObject();

	try {
		Optional<WitnessList> result = WalletClient.listWitnesses();
		if (result.isPresent()) {
			WitnessList witness_list = result.get();
			JSONArray json_arr = new JSONArray();

			for (Protocol.Witness witness: witness_list.getWitnessesList()) {
				JSONObject obj = new JSONObject();
				obj.put("pubAddress", WalletClient.encode58Check(witness.getAddress().toByteArray()));
				obj.put("voteCount", witness.getVoteCount());
				obj.put("pubKey", ByteArray.toHexString(witness.getPubKey().toByteArray()));
				obj.put("url", witness.getUrl());
				obj.put("totalProduced", witness.getTotalProduced());
				obj.put("totalMissed", witness.getTotalMissed());
				obj.put("latestBlockNum", witness.getLatestBlockNum());
				obj.put("latestSlotNum", witness.getLatestSlotNum());
				obj.put("isJobs", witness.getIsJobs());
				json_arr.add(obj);
			}
			json_obj.put("result", SUCCESS);
			json_obj.put("witnessList", json_arr);

		}else{
			json_obj.put("result", FAILED);
			json_obj.put("reason", "Witness list is not present");
		}

	} catch (Exception ex) {
	  	json_obj.put("result", FAILED);
	  	json_obj.put("reason", "Unable to fetch witness list: " + ex.getMessage());
	}
	return json_obj;
  }

  public Optional<AssetIssueList> getAssetIssueList() {
	try {
	  return WalletClient.getAssetIssueList();
	} catch (Exception ex) {
	  return Optional.empty();
	}
  }

  public JSONObject listNodes() {
      JSONObject json_obj = new JSONObject();
	try {
        JSONArray json_array = new JSONArray();
        NodeList nodelist = WalletClient.listNodes().get();
        List<Node> list = nodelist.getNodesList();
        for(Node node: list){
            JSONObject json_node = new JSONObject();
            json_node.put("host", node.getAddress().getHost().toStringUtf8());
            json_node.put("port", String.valueOf(node.getAddress().getPort()));
            json_array.add(json_node);
        }

        json_obj.put("result", SUCCESS);
        json_obj.put("nodes", json_array);
	} catch (Exception e) {
        json_obj.put("result", FAILED);
        json_obj.put("reason", "Unable to get all nodes: " + e.getMessage());
	}
	return json_obj;
  }

  public GrpcAPI.NumberMessage getTotalTransaction() {
	return WalletClient.getTotalTransaction();
  }


  /***********Additional App Features ***************/
  private JSONObject readJSONFromURL(String url){
	  try{
		  String jsonstr = IOUtils.toString(new URL(url), "utf-8");
		  JSONObject json_obj = (JSONObject) JSONValue.parseWithException(jsonstr);
		  return json_obj;
	  }catch(IOException e){
		  logger.warn("Warning: IOException from reading JSON through URL " + e.getMessage());
	  }catch(ParseException e){
		  logger.warn("Warning: Parse Exception! " + e.getMessage());
	  }
	  return null;
  }

  private JSONArray readArrayFromURL(String url){
	  try{
		  String jsonstr = IOUtils.toString(new URL(url), "utf-8");
		  JSONArray json_obj = (JSONArray) JSONValue.parseWithException(jsonstr);
		  return json_obj;
	  }catch(IOException e){
		  System.out.println("Warning: IOException from reading JSON through URL " + e.getMessage());
	  }catch(ParseException e){
		  System.out.println("Warning: Parse Exception! " + e.getMessage());
	  }
	  return null;
  }

  public JSONObject getTronPrice(){
	  class TrxPrice implements Runnable {
		  private volatile float price;

		  @Override
		  public void run() {
			  String url = "https://api.binance.com/api/v1/ticker/price?symbol=TRXBTC";
			  JSONObject json_obj = readJSONFromURL(url);
			  String price = String.valueOf(json_obj.get("price"));
			  float price_btc = Float.parseFloat(price);

			  String btc_price_url = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";
			  JSONArray coinmarketcap_json_obj = readArrayFromURL(btc_price_url);
			  String coinmarketcap_price = String.valueOf(((JSONObject) coinmarketcap_json_obj.get(0)).get("price_usd"));
			  float coinmarketcap_price_float = Float.parseFloat(coinmarketcap_price);
			  setPrice(coinmarketcap_price_float * price_btc);
		  }

		  private void setPrice(float value){
			  price = value;
		  }

		  public float getPrice() {
			  return price;
		  }
	  }

	  TrxPrice trxprice = new TrxPrice();
	  Thread thread = new Thread(trxprice);
	  thread.start();
	  try{
		  thread.join();
	  }catch(InterruptedException e){
		  logger.warn("Can't get TRX price: " + e.getMessage());
	  }
	  JSONObject json_obj = new JSONObject();
	  json_obj.put("trxPrice", trxprice.getPrice());
	  json_obj.put("result", SUCCESS);
	  return json_obj;
  }


  public JSONObject setAPIKeys(String apikey, String secretkey){
	  JSONObject json_obj = new JSONObject();

	  if (apikey != null && secretkey != null){
		  wallet.setAPIKeys(apikey, secretkey);
		  json_obj.put("result", SUCCESS);
	  }else{
		  logger.warn("Warning: Couldn't set API Keys");
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "API Key or Secret Key is null");
	  }
	  return json_obj;
  }

  public JSONObject buyTrxOnBinance(float amount, String buyTrxWith){
	  JSONObject json_obj = new JSONObject();

	  if (amount <= 0){
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "Amount cannot be less than or equal to 0");
	  }else if (buyTrxWith == null || (buyTrxWith.toUpperCase().equals("ETH") &&
		buyTrxWith.toUpperCase().equals("BTC"))){
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "You can only place a market order with BTC or ETH");
	  }else if (wallet == null || !wallet.isLoginState()) {
          json_obj.put("result", FAILED);
          json_obj.put("reason", "Wallet is not initialized!");
      }else{
          if (wallet.getApiKey().equals("") || wallet.getSecretKey().equals("")){
              json_obj.put("result", FAILED);
              json_obj.put("reason", "API Keys are not set yet");
          }else{
              BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(wallet.getApiKey(), wallet.getSecretKey());
              BinanceApiRestClient client = factory.newRestClient();

              NewOrderResponse newOrderResponse = client.newOrder(NewOrder.marketBuy("TRX"+buyTrxWith, String.valueOf(amount)));
              json_obj.put("result", SUCCESS);
              json_obj.put("timestamp", newOrderResponse.getTransactTime());
              json_obj.put("orderid", newOrderResponse.getClientOrderId());
          }
      }

	  return json_obj;
  }

  public JSONObject convertBinanceAssetToTrx(String asset){
	  JSONObject json_obj = new JSONObject();

	  if (asset == null || (asset.toUpperCase().equals("ETH") &&
              asset.toUpperCase().equals("BTC"))){
		  json_obj.put("result", FAILED);
		  json_obj.put("reason", "You can only withdraw BTC or ETH");
	  }else{
		  BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(wallet.getApiKey(),
                  wallet.getSecretKey());
		  BinanceApiRestClient client = factory.newRestClient();
		  client.withdraw(asset, String.valueOf(getAddress().get("address")),
                  client.getAccount().getAssetBalance(asset).getFree(), null);

		  json_obj.put("result", SUCCESS);
	  }

	  return json_obj;
  }


  public static void addToQueue(ItemBaggage itemBaggage){
  	  priorityQueue.offer(itemBaggage);
  }

  private static JSONObject runMethod(ItemBaggage itemBaggage, long timeout){
  	Callable<JSONObject> calltask = new Callable<JSONObject>(){
  		@Override
		public JSONObject call(){
  			try{
				return itemBaggage.invokeMethod();
			}catch (Exception e){}
			return new JSONObject();
		}
	};
	  Future<JSONObject> f = null;
	  long starttime = System.nanoTime();
  	try{

	  ExecutorService exec = Executors.newSingleThreadExecutor();
	  f = exec.submit(calltask);
	  exec.shutdown();

	  	return f.get(timeout, TimeUnit.MILLISECONDS);
	  }catch (TimeoutException e){
	  	f.cancel(true);
	  	System.out.println("Request timeout in runMethod");
		  long endtime = System.nanoTime() - starttime;
		  System.out.println("FAILED because TIME TOOK : " + TimeUnit.NANOSECONDS.toMillis(endtime));
	  	return null;
	  }catch(Exception e){
		  System.out.println("exc");
	  	System.out.println(e.getCause());
	  }
	  System.out.println("runMethod is null");
	  return null;
  }



  public static void runDaemonThread(){
	  class IPCallback implements Callable<Pair<Integer,Long>> {
		  private int ipIdx;
		  IPCallback(int idx){
			  this.ipIdx = idx;
		  }

		  public Pair<Integer,Long> call() {
			  try{
				  GrpcClient grpc = new GrpcClient(fullnodelist.get(this.ipIdx));
				  System.out.println("Created client for node: " + fullnodelist.get(this.ipIdx) + " INDEX: " + this.ipIdx);
				  JSONObject json_obj = getBlockWithCustomGrpc(-1, grpc);
				  System.out.println("Got JSON result from node: " + json_obj);
				  System.out.println("Got result from node " + fullnodelist.get(this.ipIdx) + " ; block is : " + json_obj.get("blockNum"));

				  grpc.shutdownNow();
				  Long blocknum = (Long)json_obj.get("blockNum");
				  return new Pair<>(this.ipIdx, blocknum);
			  }catch (Exception e){
				  System.out.println("Grpc exception: " + e.getMessage());
			  }
			  return new Pair<>(this.ipIdx, Long.MIN_VALUE);
		  }
	  }

  	Thread thread = new Thread(new Runnable() {
		@Override
		public void run() {
			try {
				while (true) {
					System.out.println("QUEUE SIZE: " + priorityQueue.size());

					ItemBaggage baggage = priorityQueue.take();
					JSONObject res_obj = runMethod(baggage, 10000);
					if (res_obj != null) {
						String currnode = WalletClient.getCurrFullNode();
						System.out.println("NODE: " + currnode);
						res_obj.put("fullnode", currnode);
						baggage.addToQueue(res_obj);
					} else {
						//String node = fullnodelist.get(++ip_idx % fullnodelist.size());
						//WalletClient.connectNewGrpcIP(node);
						//Thread.sleep(500);
						priorityQueue.offer(baggage);

						/*
						ExecutorService executor = Executors.newFixedThreadPool(fullnodelist.size());
						CompletionService<Pair<Integer,Long>> comp_serv = new ExecutorCompletionService<>(executor);
						ArrayList<Future<Pair<Integer,Long>>> futures_arr = new ArrayList<>();
						ArrayList<Pair<Integer,Long>> latency_list = new ArrayList<>();
						boolean success = false;
						long timeout = 2000;

						try {
							for (int i = 0; i < fullnodelist.size(); i++) {
								IPCallback ipcallback = new IPCallback(i);
								Future<Pair<Integer,Long>> future = comp_serv.submit(ipcallback);
								futures_arr.add(future);
							}

							for (int x = 0; x < fullnodelist.size(); x++) {
								try {
									Future<Pair<Integer,Long>> f_pair = comp_serv.poll(timeout, TimeUnit.MILLISECONDS);
									if (f_pair == null){
										throw new TimeoutException("No more items to compute");
									}
									Pair<Integer,Long> res_pair = f_pair.get();
									int upperbound = (int) Math.floor(fullnodelist.size() * 0.2);
									latency_list.add(res_pair);

									if (latency_list.size() >= upperbound){
										boolean dirty = false;
										for(Pair<Integer,Long> p: latency_list){
											Long blocknum = p.getValue();
											if (blocknum.longValue() != latency_list.get(0).getValue().longValue()){
												dirty = true;
												break;
											}
										}

										System.out.println("Dirty? " + dirty);

										if (!dirty && latency_list.get(0).getValue() != Long.MIN_VALUE){
											//pick the smallest latency node -- fastest
											System.out.println("inside");


											for(int i = 0; i < latency_list.size();i++){
												int ipidx = latency_list.get(i).getKey();
												String fullnode = fullnodelist.get(ipidx);

												if (!WalletClient.getCurrFullNode().equals(fullnode)) {
													boolean conn_res = WalletClient.connectNewGrpcIP(fullnode);
													if (!conn_res){
														continue;
													}else{
														success = true;
														break; //connection success
													}
												}
											}

											if (success){
												break; //we are done
											}

										}//else wait for completion
									}


								} catch (ExecutionException e) {

								} catch (InterruptedException e) {

								} catch(TimeoutException e){
									System.out.println("Node timeout; no result came Retry: " + x);
								}
							}

							if (!success){
								System.out.println("Block array: " + Arrays.toString(latency_list.toArray()));

								//find the most synced block
								int maxidx = 0;
								Long maxval = Long.MIN_VALUE;
								for(int i = 0; i < latency_list.size(); i++){
									if (latency_list.get(i).getValue() > maxval){
										maxidx = latency_list.get(i).getKey();
										maxval = latency_list.get(i).getValue();
									}
								}

								String ip = fullnodelist.get(maxidx);

								System.out.println("Want to connect to " + ip);
								if (WalletClient.getCurrFullNode() != ip){
									System.out.println("About to connect to: " + ip);
									WalletClient.connectNewGrpcIP(ip);
								}
							}

							addToQueue(baggage);


						}finally {
							System.out.println("Cancelling all futures");
							try {
								for (Future<Pair<Integer, Long>> future : futures_arr) {
									if (!future.isDone()){
										future.cancel(true);
									}

								}
								executor.shutdown();
							}catch (Exception e){
								System.out.println("Future cancelled: " + e.getMessage());
							}
							//Thread.sleep(1000);
						}*/

					}
				}
			}catch (InterruptedException e){}

		}
	});
  	thread.setDaemon(true);
  	thread.start();
  }


}
