package org.tron.walletcli;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.tron.common.utils.FileUtil;

import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;


@RestController
@RequestMapping("/api")
public class TronClientAPI {
    private HashMap<String, TronClient> sessionMap = new HashMap<>();
    private TronClient globalTronClient = new TronClient();

    private static Encryption encryption;

    {
        try {
            InputStream inputStream = getClass().getResourceAsStream("/tronks.ks");
            String data = FileUtil.readFromInputStream(inputStream);
            System.out.println("STRING IS: " + data);
            encryption = new Encryption(data.trim());
        } catch (Exception e) {
            System.out.println("INITEXCEPTION: " + e.getMessage());
        }
    }


    @RequestMapping(value="/registerWallet", method=RequestMethod.POST)
    public JSONObject registerWallet(@RequestParam("password") String password,
                                     @RequestParam("accountName") String accountName){
        TronClient tronClient = new TronClient();
        JSONObject json_obj = tronClient.registerWallet(password, accountName);
        tronClient.login(password);
        sessionMap.put(tronClient.getAddress().get("address").toString(), tronClient);
        return json_obj;
    }

    @RequestMapping(value="/importWallet", method=RequestMethod.POST)
    public JSONObject importWallet(@RequestParam("password") String password,
                                    @RequestParam("privKey") String privKey,
                                   @RequestParam(value="pubAddress", required=false) String publicAddress){
        TronClient tronClient;
        if (sessionMap.containsKey(publicAddress)){
            tronClient = sessionMap.get(publicAddress);
        }else{
            tronClient = new TronClient();
            sessionMap.put(publicAddress, tronClient);
        }

        BlockingQueue<JSONObject> queue = new ArrayBlockingQueue<>(1);
        try {
            Method method = TronClient.class.getMethod("importWalletWithPubAddressCheck", new Class[]{String.class,
                String.class, String.class});
            ItemBaggage baggage = new ItemBaggage(
                    ItemPriority.LOW, queue, tronClient, method, new Object[]{password,privKey,publicAddress}
            );
            TronClient.addToQueue(baggage);
            JSONObject res_obj = queue.take();
            return res_obj;

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new JSONObject();

        //return tronClient.importWalletWithPubAddressCheck(password, privKey,publicAddress);
    }

    @RequestMapping(value="/restoreWallet", method=RequestMethod.POST)
    public JSONObject restoreWallet(@RequestParam("pubAddress") String pubAddress,
                                    @RequestParam("rawPubAddress") String rawPubAddress){
        TronClient tronClient;
        if (sessionMap.containsKey(pubAddress)){
            tronClient = sessionMap.get(pubAddress);
        }else{
            tronClient = new TronClient();
            sessionMap.put(pubAddress, tronClient);
        }
        return tronClient.restoreWallet(rawPubAddress);
    }


    @RequestMapping(value="/accountName", method=RequestMethod.POST)
    public JSONObject setAccountName(@RequestParam("accountname") String accountname,
                                     @RequestParam("pubAddress") String publicAddress){

        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.setAccountName(accountname);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/changePass", method=RequestMethod.POST)
    public JSONObject changePassword(@RequestParam("oldpass") String oldpass,
                                 @RequestParam("newpass") String newpass,
                                     @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.changePassword(oldpass, newpass);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/login", method=RequestMethod.POST)
    public JSONObject login(@RequestParam("password") String password,
                            @RequestParam("pubAddress") String publicAddress){

        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.login(password);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/logout", method=RequestMethod.POST)
    public JSONObject logout(@RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.logout();
        }
        return new JSONObject();
    }

    @RequestMapping(value="/backupWallet/{password}", method=RequestMethod.GET)
    public JSONObject backupWallet(@PathVariable("password") String password,
                                   @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.backupWallet(password);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/voteWitness", method=RequestMethod.POST)
    public JSONObject voteWitness(@RequestParam("password") String password,
                                  @RequestParam("witnesses") String witnessStr,
                                  @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){

            HashMap<String,String> witness = new HashMap<>();
            String[] witnessList = witnessStr.split(",");
            for (int i = 0; i < witnessList.length; i += 2) {
                String address = witnessList[i].trim();
                String vote_count = witnessList[i+1].trim();
                if (!address.equals("") && !vote_count.equals((""))){
                    witness.put(address, vote_count);
                }
            }

            System.out.println(witness);
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.voteWitness(password, witness);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/accountInfo", method=RequestMethod.GET)
    public JSONObject queryAccountJSON(@RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.queryAccountJSON();
        }
        return new JSONObject();
    }

    @RequestMapping(value="/sendCoin", method=RequestMethod.POST)
    public JSONObject sendCoin(@RequestParam("password") String password,
                               @RequestParam("toAddress") String toAddress,
                               @RequestParam("amount") String amount,
                               @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            Double dbl_amount = Double.parseDouble(amount.trim());
            return tronClient.sendCoin(password, toAddress, dbl_amount.longValue());
        }
        return new JSONObject();
    }

    @RequestMapping(value="/prepareTx", method=RequestMethod.POST)
    public JSONObject prepareTransaction(@RequestParam("password") String password,
                                         @RequestParam("toAddress") String toAddress,
                                         @RequestParam("amount") String amount,
                                         @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            Double dbl_amount = Double.parseDouble(amount.trim());
            return tronClient.prepareTransaction(password, toAddress, dbl_amount.longValue());
        }
        return new JSONObject();
    }

    @RequestMapping(value="/signTxInfo/{hextx}", method=RequestMethod.GET)
    public JSONObject getSignTxInfo(@PathVariable("hextx") String hextx,
                                    @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.getSignTxInfo(hextx);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/signTx", method=RequestMethod.POST)
    public JSONObject signTransaction(@RequestParam("password") String password,
                                      @RequestParam("hextx") String hextx,
                                      @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.signTransaction(password, hextx);
        }
        return new JSONObject();
    }

    @RequestMapping(value="/broadcastTx", method=RequestMethod.POST)
    public JSONObject broadcastTransaction(@RequestParam("hextx") String hextx,
                                           @RequestParam("pubAddress") String publicAddress){

        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.broadcastTransaction(hextx);
        }
        return new JSONObject();

    }

    @RequestMapping(value="/txs/{publicAddress}", method=RequestMethod.GET)
    public JSONObject getTransactions(@PathVariable("publicAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.getTransactions(publicAddress);
        }
        return new JSONObject();

    }

    @RequestMapping(value="/block/{blockNum}", method=RequestMethod.GET)
    public JSONObject getBlock(@PathVariable(value="blockNum") String blockNum){

        if (blockNum != null && !blockNum.equals("")){
            return globalTronClient.getBlock(Integer.parseInt(blockNum));
        }
        return new JSONObject();
    }

    @MessageMapping("/block")
    @SendTo("/persist/block")
    @RequestMapping(value="/block", method=RequestMethod.GET)
    public JSONObject getBlock(){
        BlockingQueue<JSONObject> queue = new ArrayBlockingQueue<>(1);
        try {
            Method method = TronClient.class.getMethod("getBlock", new Class[]{int.class});
            ItemBaggage baggage = new ItemBaggage(
                    ItemPriority.LOW, queue, globalTronClient, method, new Object[]{-1}
            );
            TronClient.addToQueue(baggage);
            JSONObject res_obj = queue.take();
            return res_obj;

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new JSONObject();
    }

    @RequestMapping(value="/witnesses", method=RequestMethod.GET)
    public JSONObject getWitnesses(){
        BlockingQueue<JSONObject> queue = new ArrayBlockingQueue<>(1);
        try {
            Method method = TronClient.class.getMethod("listWitnesses",  new Class[]{});
            ItemBaggage baggage = new ItemBaggage(
                    ItemPriority.HIGH, queue, globalTronClient, method,  new Object[]{}
            );
            TronClient.addToQueue(baggage);
            JSONObject res_obj = queue.take();
            return res_obj;

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new JSONObject();
        //return globalTronClient.listWitnesses();

    }

    @RequestMapping(value="/accounts", method=RequestMethod.GET)
    public JSONObject getAccounnts(){
        return globalTronClient.listAccounts();
    }

    @MessageMapping("/nodes")
    @SendTo("/persist/nodes")
    @RequestMapping(value="/nodes", method=RequestMethod.GET)
    public JSONObject getNodes(){
        BlockingQueue<JSONObject> queue = new ArrayBlockingQueue<>(1);
        try {
            Method method = TronClient.class.getMethod("listNodes",  new Class[]{});
            ItemBaggage baggage = new ItemBaggage(
                    ItemPriority.HIGH, queue, globalTronClient, method,  new Object[]{}
            );
            TronClient.addToQueue(baggage);
            JSONObject res_obj = queue.take();
            return res_obj;

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new JSONObject();
    }

    @MessageMapping("/trxPrice")
    @SendTo("/persist/trxPrice")
    @RequestMapping(value="/trxPrice", method=RequestMethod.GET)
    public JSONObject getTronPrice(){
        return globalTronClient.getTronPrice();
    }

    @RequestMapping(value="/apikeys", method=RequestMethod.POST)
    public JSONObject setAPIKeys(@RequestParam("apikey") String apikey,
                                 @RequestParam("secretkey") String secretkey,
                                 @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.setAPIKeys(apikey, secretkey);
        }
        return new JSONObject();

    }

    @RequestMapping(value="/buyTrx/{asset}/{amount:.+}", method=RequestMethod.GET)
    public JSONObject buyTrxOnBinance(@PathVariable("asset") String asset,
                                      @PathVariable("amount") String amount,
                                      @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.buyTrxOnBinance(Float.parseFloat(amount), asset);
        }
        return new JSONObject();

    }

    @RequestMapping(value="/convertBinanceAssetToTrx", method=RequestMethod.POST)
    public JSONObject convertBinanceAssetToTrx(@RequestParam("asset") String asset,
                                               @RequestParam("pubAddress") String publicAddress){
        if (sessionMap.containsKey(publicAddress)){
            TronClient tronClient = sessionMap.get(publicAddress);
            return tronClient.convertBinanceAssetToTrx(asset);
        }
        return new JSONObject();

    }

}
