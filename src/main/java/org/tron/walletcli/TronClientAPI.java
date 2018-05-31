package org.tron.walletcli;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.messaging.handler.annotation.DestinationVariable;
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
    private HashMap<String, TronClient> wSessionMap = new HashMap<>();
    private TronClient txTronClient = new TronClient(true);
    private TronClient blockTronClient = new TronClient(true);
    private TronClient witnessTronClient = new TronClient(true);
    private TronClient nodeTronClient = new TronClient(true);


    public static final String FAILED = "failed";
    public static final String SUCCESS = "success";
    private JSONObject reserve_json = new JSONObject();

    private static Encryption encryption;

    {
        try {
            InputStream inputStream = getClass().getResourceAsStream("/tronks.ks");
            String data = FileUtil.readFromInputStream(inputStream);
            System.out.println("STRING IS: " + data);
            encryption = new Encryption(data.trim());

            reserve_json.put("result", FAILED);
            reserve_json.put("reason", "Wallet not configured yet!");
        } catch (Exception e) {
            System.out.println("INITEXCEPTION: " + e.getMessage());
        }
    }


    @RequestMapping(value="/registerWallet", method=RequestMethod.POST)
    public String registerWallet(@RequestParam("password") String password,
                                     @RequestParam("accountName") String accountName){
        password = encryption.decryptText(password);
        accountName = encryption.decryptText(accountName);
        TronClient tronClient = new TronClient();
        JSONObject json_obj = tronClient.registerWallet(password, accountName);
        tronClient.login(password);
        sessionMap.put(tronClient.getAddress().get("address").toString(), tronClient);

        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/createPaperWallet", method=RequestMethod.POST)
    public String createPaperWallet(){
        TronClient tronClient = new TronClient();
        JSONObject json_obj = tronClient.createPaperWallet();
        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/importWallet", method=RequestMethod.POST)
    public String importWallet(@RequestParam("password") String password,
                               @RequestParam("privKey") String privKey){

        password = encryption.decryptText(password);
        privKey = encryption.decryptText(privKey);

        TronClient tronClient = new TronClient();;
        JSONObject json_obj = tronClient.importWallet(password, privKey);
        tronClient.login(password);

        sessionMap.put(tronClient.getAddress().get("address").toString(), tronClient);
        System.out.println("SESSIONS MAP: " + tronClient.getAddress().get("address").toString());
        System.out.println("MAP SIZE: " + sessionMap.size());
        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/restoreWallet", method=RequestMethod.POST)
    public String restoreWallet(@RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);
        TronClient tronClient = new TronClient();
        JSONObject json_obj = tronClient.restoreWallet(pubAddress);

        System.out.println("Adding " + pubAddress + " in wsessionmap");
        wSessionMap.put(pubAddress, tronClient);
        System.out.println("wsessionmap size:  " + wSessionMap.size());
        return encryption.encryptObject(json_obj);
    }


    @RequestMapping(value="/logout", method=RequestMethod.POST)
    public String logout(@RequestParam("pubAddress") String pubAddress,
                         @PathVariable(value="isWatch", required=false) String isWatch){
        pubAddress = encryption.decryptText(pubAddress);
        boolean is_watch = false;
        isWatch = encryption.decryptText(isWatch);
        if (isWatch != null && Boolean.parseBoolean(isWatch) == true){
            is_watch = true;
        }

        if (is_watch){
            if (wSessionMap.containsKey(pubAddress)){
                TronClient tronClient = wSessionMap.get(pubAddress);
                JSONObject json_obj = tronClient.logout();
                wSessionMap.remove(pubAddress);
                return encryption.encryptObject(json_obj);
            }
        }else{
            if (sessionMap.containsKey(pubAddress)){
                TronClient tronClient = sessionMap.get(pubAddress);
                JSONObject json_obj = tronClient.logout();
                sessionMap.remove(pubAddress);
                return encryption.encryptObject(json_obj);
            }
        }

        JSONObject json_obj = new JSONObject();
        json_obj.put("result", SUCCESS);
        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/backupWallet", method=RequestMethod.POST)
    public String backupWallet(@RequestParam("password") String password,
                                   @RequestParam("pubAddress") String pubAddress){
        pubAddress = encryption.decryptText(pubAddress);
        password = encryption.decryptText(password);

        if (sessionMap.containsKey(pubAddress)){
            TronClient tronClient = sessionMap.get(pubAddress);
            JSONObject json_obj = tronClient.backupWallet(password);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/prepareVoteWitness", method=RequestMethod.POST)
    public String prepareVoteWitness(@RequestParam("witnesses") String witnessStr,
                                  @RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);
        witnessStr = encryption.decryptText(witnessStr);

        if (wSessionMap.containsKey(pubAddress)){
            HashMap<String,String> witness = new HashMap<>();

            if (!witnessStr.equals("")) {
                String[] witnessList = witnessStr.split(",");
                for (int i = 0; i < witnessList.length; i += 2) {
                    String address = witnessList[i].trim();
                    String vote_count = witnessList[i + 1].trim();
                    if (!address.equals("") && !vote_count.equals((""))) {
                        witness.put(address, vote_count);
                    }
                }
            }

            System.out.println("WWITNESSES:" + witness);
            TronClient tronClient = wSessionMap.get(pubAddress);

            JSONObject json_obj = tronClient.prepareVoteWitness(witness);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    //for hot wallet only
    @RequestMapping(value="/voteWitness", method=RequestMethod.POST)
    public String voteWitness(@RequestParam("witnesses") String witnessStr,
                                  @RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);
        witnessStr = encryption.decryptText(witnessStr);

        if (sessionMap.containsKey(pubAddress)){
            HashMap<String,String> witness = new HashMap<>();
            if (!witnessStr.equals("")){
                String[] witnessList = witnessStr.split(",");
                for (int i = 0; i < witnessList.length; i += 2) {
                    String address = witnessList[i].trim();
                    String vote_count = witnessList[i+1].trim();
                    if (!address.equals("") && !vote_count.equals((""))){
                        witness.put(address, vote_count);
                    }
                }
            }

            System.out.println("WITNESSES: " + witness);
            TronClient tronClient = sessionMap.get(pubAddress);

            JSONObject json_obj = tronClient.voteWitness(witness);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    /*@MessageMapping("/accountInfo")
    @SendTo("/persist/accountInfo")
    public String queryAccountSocket(String jsonMessage){
        JSONParser parser = new JSONParser();
        JSONObject json_obj;
        if (!jsonMessage.equals("")){
            try{
                json_obj = (JSONObject)parser.parse(encryption.decryptText(jsonMessage));
                boolean is_watch = Boolean.parseBoolean((String)json_obj.get("isWatch"));
                System.out.println("WATCH IS: " + is_watch);
                String pub_add = (String)json_obj.get("pubAddress");
                String res = getAccountInfo(pub_add, is_watch);
                System.out.println("ACCRES: " + res);
                return res;

            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return encryption.encryptObject(new JSONObject());
    }*/

    @RequestMapping(value="/accountInfo", method=RequestMethod.POST)
    public String queryAccountJSON(@RequestParam("pubAddress") String pubAddress,
                                   @RequestParam("isWatch") String isWatch){
        pubAddress = encryption.decryptText(pubAddress);
        boolean is_watch = false;
        isWatch = encryption.decryptText(isWatch);
        if (isWatch != null && Boolean.parseBoolean(isWatch) == true){
            is_watch = true;
        }
        return getAccountInfo(pubAddress, is_watch);
    }

    private String getAccountInfo(String pubAddress, boolean isWatch){
        if (isWatch){
            System.out.println("WSessionMap: " + wSessionMap);
            System.out.println("WSessionMap contains " + pubAddress  + " : " + wSessionMap.containsKey(pubAddress));
            if (wSessionMap.containsKey(pubAddress)){
                TronClient tronClient = wSessionMap.get(pubAddress);
                JSONObject json_obj = getResultFromQueue("queryAccountJSON",
                        new Class[]{},
                        new Object[]{},
                        tronClient,
                        ItemPriority.LOW,
                        5000);
                json_obj.put("accountNode", tronClient.getCurrNode(false));
                return encryption.encryptObject(json_obj);
            }
        }else{
            if (sessionMap.containsKey(pubAddress)){
                TronClient tronClient = sessionMap.get(pubAddress);
                JSONObject json_obj = getResultFromQueue("queryAccountJSON",
                        new Class[]{},
                        new Object[]{},
                        tronClient,
                        ItemPriority.LOW,
                        5000);
                json_obj.put("accountNode", tronClient.getCurrNode(false));
                return encryption.encryptObject(json_obj);
            }
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/sendCoin", method=RequestMethod.POST)
    public String sendCoin(@RequestParam("toAddress") String toAddress,
                               @RequestParam("amount") String amount,
                               @RequestParam("pubAddress") String pubAddress){

        toAddress = encryption.decryptText(toAddress);
        amount = encryption.decryptText(amount);
        pubAddress = encryption.decryptText(pubAddress);

        if (sessionMap.containsKey(pubAddress)){
            TronClient tronClient = sessionMap.get(pubAddress);
            Double dbl_amount = Double.parseDouble(amount.trim());
            long long_amount = dbl_amount.longValue();
            JSONObject json_obj = tronClient.sendCoin(toAddress, long_amount);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/freezeBalance", method=RequestMethod.POST)
    public String freezeBalance(@RequestParam("duration") String duration,
                           @RequestParam("amount") String amount,
                           @RequestParam("pubAddress") String pubAddress){

        duration = encryption.decryptText(duration);
        amount = encryption.decryptText(amount);
        pubAddress = encryption.decryptText(pubAddress);

        if (sessionMap.containsKey(pubAddress)){
            TronClient tronClient = sessionMap.get(pubAddress);
            Double dbl_amount = Double.parseDouble(amount.trim());
            long long_amount = dbl_amount.longValue();
            Double dbl_duration = Double.parseDouble(duration.trim());
            long long_duration = dbl_duration.longValue();

            JSONObject json_obj = tronClient.freezeBalance(long_amount,long_duration);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/unfreezeBalance", method=RequestMethod.POST)
    public String unfreezeBalance(@RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);

        if (sessionMap.containsKey(pubAddress)){
            TronClient tronClient = sessionMap.get(pubAddress);

            JSONObject json_obj = tronClient.unfreezeBalance();

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }


    @RequestMapping(value="/prepareFreezeBalance", method=RequestMethod.POST)
    public String prepareFreezeBalance(@RequestParam("duration") String duration,
                                       @RequestParam("amount") String amount,
                                       @RequestParam("pubAddress") String pubAddress){

        duration = encryption.decryptText(duration);
        amount = encryption.decryptText(amount);
        pubAddress = encryption.decryptText(pubAddress);

        if (wSessionMap.containsKey(pubAddress)){
            TronClient tronClient = wSessionMap.get(pubAddress);
            Double dbl_amount = Double.parseDouble(amount.trim());
            long long_amount = dbl_amount.longValue();
            Double dbl_duration = Double.parseDouble(duration.trim());
            long long_duration = dbl_duration.longValue();

            JSONObject json_obj = tronClient.prepareFreezeBalance(long_amount, long_duration);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/prepareUnfreezeBalance", method=RequestMethod.POST)
    public String prepareUnfreezeBalance(@RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);

        if (wSessionMap.containsKey(pubAddress)){
            TronClient tronClient = wSessionMap.get(pubAddress);

            JSONObject json_obj = tronClient.prepareUnfreezeBalance();

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }


    @RequestMapping(value="/prepareTx", method=RequestMethod.POST)
    public String prepareTransaction(@RequestParam("toAddress") String toAddress,
                                         @RequestParam("amount") String amount,
                                         @RequestParam("pubAddress") String pubAddress){

        toAddress = encryption.decryptText(toAddress);
        amount = encryption.decryptText(amount);
        pubAddress = encryption.decryptText(pubAddress);

        if (wSessionMap.containsKey(pubAddress)){
            TronClient tronClient = wSessionMap.get(pubAddress);
            Double dbl_amount = Double.parseDouble(amount.trim());
            long long_amount = dbl_amount.longValue();

            JSONObject json_obj = tronClient.prepareTransaction(toAddress, long_amount);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/signTxInfo/{hextx}", method=RequestMethod.GET)
    public String getSignTxInfo(@PathVariable("hextx") String hextx){
        hextx = encryption.decryptText(hextx);
        return encryption.encryptObject(TronClient.getSignTxInfo(hextx));
    }


    //only for watch only wallet
    @RequestMapping(value="/broadcastTx", method=RequestMethod.POST)
    public String broadcastTransaction(@RequestParam("hextx") String hextx,
                                       @RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);
        hextx = encryption.decryptText(hextx);

        if (wSessionMap.containsKey(pubAddress)){
            TronClient tronClient = wSessionMap.get(pubAddress);
            JSONObject json_obj = tronClient.broadcastTransaction(hextx);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/txs/{pubAddress}", method=RequestMethod.GET)
    public String getTransactions(@PathVariable("pubAddress") String pubAddress){
        pubAddress = encryption.decryptText(pubAddress);
        System.out.println("TXSPUBADDRESS2: " + pubAddress);
        JSONObject json_obj = getResultFromQueue("getTransactionsSocket",
                new Class[]{String.class},
                new Object[]{pubAddress},
                txTronClient,
                ItemPriority.LOW,
                12000);
        return encryption.encryptObject(json_obj);
    }


    /*@MessageMapping("/txs")
    @SendTo("/persist/txs")
    public String getTransactionsSocket(String pubAddress){
        try{
            pubAddress = encryption.decryptText(pubAddress);
            System.out.println("TXSPUBADDRESS: " + pubAddress);
            JSONObject json_obj = getResultFromQueue("getTransactionsSocket",
                    new Class[]{String.class},
                    new Object[]{pubAddress},
                    txTronClient,
                    ItemPriority.LOW,
                    12000);
            return encryption.encryptObject(json_obj);

        }catch (Exception e){
            e.printStackTrace();
        }
        return encryption.encryptObject(new JSONObject());

    }*/

    @RequestMapping(value="/block/{blockNum}", method=RequestMethod.GET)
    public String getBlock(@PathVariable(value="blockNum") String blockNum){
        blockNum = encryption.decryptText(blockNum);
        if (blockNum != null && !blockNum.equals("")){
            JSONObject json_obj = getResultFromQueue("getBlock",
                    new Class[]{int.class},
                    new Object[]{Integer.parseInt(blockNum)},
                    blockTronClient,
                    ItemPriority.LOW,
                    8000);
            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(new JSONObject());
    }

    @MessageMapping("/block")
    @SendTo("/persist/block")
    @RequestMapping(value="/block", method=RequestMethod.GET)
    public String getBlock(){
        JSONObject json_obj = getResultFromQueue("getBlock",
                new Class[]{int.class},
                new Object[]{-1},
                blockTronClient,
                ItemPriority.LOW,
                3000);
        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/witnesses", method=RequestMethod.GET)
    public String getWitnesses(){
        JSONObject json_obj = getResultFromQueue("listWitnesses",
                new Class[]{},
                new Object[]{},
                witnessTronClient,
                ItemPriority.HIGH,
                8000);
        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/validatePass", method=RequestMethod.POST)
    public String validatePasscode(@RequestParam("password") String password,
                                   @RequestParam("store") String store,
                                   @RequestParam("pubAddress") String pubAddress){
        password = encryption.decryptText(password);
        store = encryption.decryptText(store);
        pubAddress = encryption.decryptText(pubAddress);

        if (sessionMap.containsKey(pubAddress)) {
            TronClient tronClient = sessionMap.get(pubAddress);
            Boolean tostore = Boolean.parseBoolean(store);
            return encryption.encryptObject(tronClient.validatePasscodeImport(password,tostore));
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/connectNode", method=RequestMethod.POST)
    public String connectNode(@RequestParam("node") String node,
                              @RequestParam("pubAddress") String pubAddress,
                              @RequestParam(value="isWatch",required =false) String isWatch){
        node = encryption.decryptText(node);
        pubAddress = encryption.decryptText(pubAddress);
        boolean is_watch = false;
        isWatch = encryption.decryptText(isWatch);
        if (isWatch != null && !isWatch.equals("") && Boolean.parseBoolean(isWatch) == true){
            is_watch = true;
        }

        TronClient tronClient = null;
        if (is_watch) {
            if (wSessionMap.containsKey(pubAddress)) {
                tronClient = wSessionMap.get(pubAddress);
            }
        }else{
            if (sessionMap.containsKey(pubAddress)){
                tronClient = sessionMap.get(pubAddress);
            }
        }

        JSONObject json_obj = new JSONObject();
        if (tronClient != null){
            json_obj = tronClient.connectNode(node);
        }else{
            json_obj = reserve_json;
        }

        return encryption.encryptObject(json_obj);
    }

    @MessageMapping("/nodes")
    @SendTo("/persist/nodes")
    @RequestMapping(value="/nodes", method=RequestMethod.GET)
    public String getNodes(){
        System.out.println("GETTING NODES");
        JSONObject json_obj = getResultFromQueue("listNodes",
                new Class[]{},
                new Object[]{},
                nodeTronClient,
                ItemPriority.HIGH,
                5000);
        return encryption.encryptObject(json_obj);
    }

    @MessageMapping("/trxPrice")
    @SendTo("/persist/trxPrice")
    @RequestMapping(value="/trxPrice", method=RequestMethod.GET)
    public String getTronPrice(){
        return encryption.encryptObject(TronClient.getTronPrice());
    }



    /* Methods for purchasing TRX on Binance */
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
    /* End Methods for purchasing TRX on Binance */

    private JSONObject getResultFromQueue(String methodName, Class[] methodClasses, Object[] methodParams,
                                  TronClient tronClient, int priority, long timeout){
        BlockingQueue<JSONObject> queue = new ArrayBlockingQueue<>(1);
        try {
            Method method = TronClient.class.getMethod(methodName, methodClasses);
            ItemBaggage baggage = new ItemBaggage(
                    priority, timeout, queue, tronClient, method, methodParams
            );
            tronClient.addToQueue(baggage);
            JSONObject res_obj = queue.take();
            return res_obj;

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new JSONObject();
    }

}
