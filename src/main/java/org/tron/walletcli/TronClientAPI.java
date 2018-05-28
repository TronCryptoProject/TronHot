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
    private TronClient globalTronClient = new TronClient();
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
        JSONObject json_obj = getResultFromQueue("registerWallet",
                                                new Class[]{String.class, String.class},
                                                new Object[]{password, accountName},
                                                tronClient,
                                                ItemPriority.HIGH);
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

        JSONObject json_obj = getResultFromQueue("importWallet",
                new Class[]{String.class, String.class},
                new Object[]{password, privKey},
                tronClient,
                ItemPriority.HIGH);
        tronClient.login(password);

        sessionMap.put(tronClient.getAddress().get("address").toString(), tronClient);
        System.out.println("SESSIONS MAP: " + tronClient.getAddress().get("address").toString());
        System.out.println("MAP SIZE: " + sessionMap.size());
        return encryption.encryptObject(json_obj);
        //return json_obj;
    }

    @RequestMapping(value="/restoreWallet", method=RequestMethod.POST)
    public String restoreWallet(@RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);
        TronClient tronClient = new TronClient();

        JSONObject json_obj = getResultFromQueue("restoreWallet",
                new Class[]{String.class},
                new Object[]{pubAddress},
                tronClient,
                ItemPriority.HIGH);

        if (json_obj.containsKey("result") && json_obj.get("result") == SUCCESS){
            wSessionMap.put(pubAddress, tronClient);
        }

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
                JSONObject json_obj = getResultFromQueue("logout",
                        new Class[]{},
                        new Object[]{},
                        tronClient,
                        ItemPriority.HIGH);

                return encryption.encryptObject(json_obj);
            }
        }else{
            if (sessionMap.containsKey(pubAddress)){
                TronClient tronClient = sessionMap.get(pubAddress);
                JSONObject json_obj = getResultFromQueue("logout",
                        new Class[]{},
                        new Object[]{},
                        tronClient,
                        ItemPriority.HIGH);

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
            JSONObject json_obj = getResultFromQueue("backupWallet",
                    new Class[]{String.class},
                    new Object[]{password},
                    tronClient,
                    ItemPriority.HIGH);

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
            JSONObject json_obj = getResultFromQueue("prepareVoteWitness",
                    new Class[]{HashMap.class},
                    new Object[]{witness},
                    tronClient,
                    ItemPriority.HIGH);

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

            JSONObject json_obj = getResultFromQueue("voteWitness",
                    new Class[]{HashMap.class},
                    new Object[]{witness},
                    tronClient,
                    ItemPriority.HIGH);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @MessageMapping("/accountInfo")
    @SendTo("/persist/accountInfo")
    public String queryAccountSocket(String jsonMessage){
        JSONParser parser = new JSONParser();
        JSONObject json_obj;
        if (!jsonMessage.equals("")){
            try{
                json_obj = (JSONObject)parser.parse(encryption.decryptText(jsonMessage));
                boolean is_watch = Boolean.parseBoolean((String)json_obj.get("isWatch"));
                String pub_add = (String)json_obj.get("pubAddress");
                String res = getAccountInfo(pub_add, is_watch);
                System.out.println("ACCRES: " + res);
                return res;

            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return encryption.encryptObject(new JSONObject());
    }

    @RequestMapping(value="/accountInfo/{pubAddress}", method=RequestMethod.GET)
    public String queryAccountJSON(@PathVariable("pubAddress") String pubAddress,
                                       @PathVariable(value="isWatch", required=false) String isWatch){
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
            if (wSessionMap.containsKey(pubAddress)){
                TronClient tronClient = wSessionMap.get(pubAddress);
                JSONObject json_obj = getResultFromQueue("queryAccountJSON",
                        new Class[]{},
                        new Object[]{},
                        tronClient,
                        ItemPriority.HIGH);

                return encryption.encryptObject(json_obj);
            }
        }else{
            if (sessionMap.containsKey(pubAddress)){
                TronClient tronClient = sessionMap.get(pubAddress);
                JSONObject json_obj = getResultFromQueue("queryAccountJSON",
                        new Class[]{},
                        new Object[]{},
                        tronClient,
                        ItemPriority.HIGH);

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
            //JSONObject json_obj = tronClient.sendCoin(toAddress, long_amount);
            JSONObject json_obj = getResultFromQueue("sendCoin",
                    new Class[]{String.class, long.class},
                    new Object[]{toAddress, long_amount},
                    tronClient,
                    ItemPriority.HIGH);

            return encryption.encryptObject(json_obj);
            //return json_obj;
        }
        //return new JSONObject();
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

            JSONObject json_obj = getResultFromQueue("freezeBalance",
                    new Class[]{long.class, long.class},
                    new Object[]{long_amount, long_duration},
                    tronClient,
                    ItemPriority.HIGH);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/unfreezeBalance", method=RequestMethod.POST)
    public String unfreezeBalance(@RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);

        if (sessionMap.containsKey(pubAddress)){
            TronClient tronClient = sessionMap.get(pubAddress);

            JSONObject json_obj = getResultFromQueue("unfreezeBalance",
                    new Class[]{},
                    new Object[]{},
                    tronClient,
                    ItemPriority.HIGH);

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

            JSONObject json_obj = getResultFromQueue("prepareFreezeBalance",
                    new Class[]{long.class, long.class},
                    new Object[]{long_amount, long_duration},
                    tronClient,
                    ItemPriority.HIGH);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/prepareUnfreezeBalance", method=RequestMethod.POST)
    public String prepareUnfreezeBalance(@RequestParam("pubAddress") String pubAddress){

        pubAddress = encryption.decryptText(pubAddress);

        if (wSessionMap.containsKey(pubAddress)){
            TronClient tronClient = wSessionMap.get(pubAddress);

            JSONObject json_obj = getResultFromQueue("prepareUnfreezeBalance",
                    new Class[]{},
                    new Object[]{},
                    tronClient,
                    ItemPriority.HIGH);

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

            JSONObject json_obj = getResultFromQueue("prepareTransaction",
                    new Class[]{String.class, long.class},
                    new Object[]{toAddress, long_amount},
                    tronClient,
                    ItemPriority.HIGH);

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
            JSONObject json_obj = getResultFromQueue("broadcastTransaction",
                    new Class[]{String.class},
                    new Object[]{hextx},
                    tronClient,
                    ItemPriority.HIGH);

            return encryption.encryptObject(json_obj);
        }
        return encryption.encryptObject(reserve_json);
    }

    @RequestMapping(value="/txs/{pubAddress}", method=RequestMethod.GET)
    public String getTransactions(@PathVariable("pubAddress") String pubAddress){
        pubAddress = encryption.decryptText(pubAddress);
        return encryption.encryptObject(globalTronClient.getTransactions(pubAddress));
    }

    @MessageMapping("/txs")
    @SendTo("/persist/txs")
    public String getTransactionsSocket(String pubAddress){
        try{
            pubAddress = encryption.decryptText(pubAddress);
            System.out.println("TXSPUBADDRESS: " + pubAddress);
            JSONObject json_obj = getResultFromQueue("getTransactionsSocket",
                    new Class[]{String.class},
                    new Object[]{pubAddress},
                    globalTronClient,
                    ItemPriority.HIGH);
            return encryption.encryptObject(json_obj);

        }catch (Exception e){
            e.printStackTrace();
        }
        return encryption.encryptObject(new JSONObject());

    }

    @RequestMapping(value="/block/{blockNum}", method=RequestMethod.GET)
    public String getBlock(@PathVariable(value="blockNum") String blockNum){
        blockNum = encryption.decryptText(blockNum);
        if (blockNum != null && !blockNum.equals("")){
            JSONObject json_obj = getResultFromQueue("getBlock",
                    new Class[]{int.class},
                    new Object[]{Integer.parseInt(blockNum)},
                    globalTronClient,
                    ItemPriority.LOW);
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
                globalTronClient,
                ItemPriority.LOW);
        return encryption.encryptObject(json_obj);
    }

    @RequestMapping(value="/witnesses", method=RequestMethod.GET)
    public String getWitnesses(){
        JSONObject json_obj = getResultFromQueue("listWitnesses",
                new Class[]{},
                new Object[]{},
                globalTronClient,
                ItemPriority.HIGH);
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
    public String connectNode(@RequestParam("node") String node){
        node = encryption.decryptText(node);
        return encryption.encryptObject( globalTronClient.connectNode(node));
    }

    @MessageMapping("/nodes")
    @SendTo("/persist/nodes")
    @RequestMapping(value="/nodes", method=RequestMethod.GET)
    public String getNodes(){
        JSONObject json_obj = getResultFromQueue("listNodes",
                new Class[]{},
                new Object[]{},
                globalTronClient,
                ItemPriority.HIGH);
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
                                  TronClient tronClient, int priority){
        BlockingQueue<JSONObject> queue = new ArrayBlockingQueue<>(1);
        try {
            Method method = TronClient.class.getMethod(methodName, methodClasses);
            ItemBaggage baggage = new ItemBaggage(
                    priority, queue, tronClient, method, methodParams
            );
            TronClient.addToQueue(baggage);
            JSONObject res_obj = queue.take();
            return res_obj;

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new JSONObject();
    }

}
