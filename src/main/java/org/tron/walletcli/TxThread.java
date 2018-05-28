package org.tron.walletcli;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.tron.api.GrpcAPI;
import org.tron.protos.Contract;
import org.tron.protos.Protocol;
import org.tron.walletserver.WalletClient;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.*;

public class TxThread {
    public static final long DROP = 1000000;
    public static final String FAILED = "failed";
    public static final String SUCCESS = "success";

    private byte[] addressBytes;
    public TxThread(byte[] addressBytes) {
        this.addressBytes = addressBytes;
    }

    public JSONObject getTransactions(){
        Callable<JSONObject> fromTxs = new Callable<JSONObject>(){
            @Override
            public JSONObject call(){
                JSONObject json_obj = new JSONObject();

                try{
                    Optional<GrpcAPI.TransactionList> result = WalletClient.getTransactionsFromThis(addressBytes,
                            0, Integer.MAX_VALUE);

                    if (result.isPresent()) {
                        GrpcAPI.TransactionList transactionList = result.get();
                        JSONArray from_tx_arr = parseTransactions(transactionList);
                        json_obj.put("result", SUCCESS);
                        json_obj.put("txs", from_tx_arr);
                        System.out.println("FROMLENGTH: " + from_tx_arr.size());
                        return json_obj;
                    }

                }catch (Exception e){
                    e.printStackTrace();
                }
                json_obj.put("result", FAILED);
                json_obj.put("reason", "Fetch transactions failed!");
                return json_obj;
            }
        };

        Callable<JSONObject> toTxs = new Callable<JSONObject>(){
            @Override
            public JSONObject call(){
                JSONObject json_obj = new JSONObject();

                try{
                    Optional<GrpcAPI.TransactionList> result = WalletClient.getTransactionsToThis(addressBytes,
                            0, Integer.MAX_VALUE);

                    if (result.isPresent()) {
                        GrpcAPI.TransactionList transactionList = result.get();
                        JSONArray to_tx_arr = parseTransactions(transactionList);
                        json_obj.put("result", SUCCESS);
                        json_obj.put("txs", to_tx_arr);
                        System.out.println("TOLENGTH: " + to_tx_arr.size());
                        return json_obj;
                    }

                }catch (Exception e){
                    e.printStackTrace();
                }
                json_obj.put("result", FAILED);
                json_obj.put("reason", "Fetch transactions failed!");
                return json_obj;
            }
        };

        JSONObject json_obj = new JSONObject();

        try{

            ExecutorService exec = Executors.newFixedThreadPool(2);
            Future<JSONObject>toFuture = exec.submit(toTxs);
            Future<JSONObject>fromFuture = exec.submit(fromTxs);
            exec.shutdown();

            JSONObject to_json = toFuture.get();
            JSONObject from_json = fromFuture.get();

            JSONArray agg_arr = new JSONArray();
            boolean valid = false;

            JSONArray arr = (JSONArray)to_json.get("txs");
            JSONArray arr2 = (JSONArray)from_json.get("txs");
            System.out.println("ARRES_TO_BEGIN: " + arr.size());
            System.out.println("ARRES_FROM_BEGIN: " + arr2.size());

            System.out.println("TO_JSON: " + to_json);

            if (to_json.containsKey("result") && to_json.get("result") == SUCCESS){
                System.out.println("ARRES_TO_IN");
                JSONArray t_arr = (JSONArray)to_json.get("txs");
                System.out.println("ARRES_TO_SIZE: " + t_arr.size());
                for(int i = 0; i < t_arr.size(); i++){
                    System.out.println("ARRES_TO_ADDING: " + t_arr.get(i));
                    agg_arr.add(t_arr.get(i));
                }
                valid = true;
            }
            System.out.println("ARRES: " + agg_arr.size());

            if (from_json.containsKey("result") && from_json.get("result") == SUCCESS){
                JSONArray t_arr = (JSONArray)from_json.get("txs");
                for(int i = 0; i < t_arr.size(); i++){
                    agg_arr.add(t_arr.get(i));
                }
                valid = true;
            }

            System.out.println("ARRES 2: " + agg_arr.size());

            if (valid){
                json_obj.put("result", SUCCESS);
                json_obj.put("txs", agg_arr);
            }else{
                json_obj.put("result", FAILED);
                json_obj.put("reason", "Fetch transactions failed!");
            }

        }catch(Exception e){
            e.printStackTrace();
            json_obj.put("result", FAILED);
            json_obj.put("reason", "Fetch transactions failed!");
        }

        return json_obj;
    }

    public JSONArray parseTransactions(GrpcAPI.TransactionList transactionList) {
        JSONArray res_arr = new JSONArray();
        for(Protocol.Transaction transaction : transactionList.getTransactionList()) {
            Protocol.Transaction.raw tx_raw = transaction.getRawData();
            for (Protocol.Transaction.Contract tx_contract : tx_raw.getContractList()) {
                if (tx_contract.getType() == Protocol.Transaction.Contract.ContractType.TransferContract) {
                    try {
                        Contract.TransferContract trans_contract = tx_contract.getParameter()
                                .unpack(Contract.TransferContract.class);
                        String from = WalletClient.encode58Check(trans_contract.getOwnerAddress().toByteArray());
                        String to = WalletClient.encode58Check(trans_contract.getToAddress().toByteArray());
                        long amount = trans_contract.getAmount();

                        JSONObject tx_json = new JSONObject();
                        tx_json.put("from", from);
                        tx_json.put("to", to);
                        tx_json.put("amount", ((double)amount/DROP));

                        long timestamp = tx_raw.getTimestamp();
                        String time_str = String.valueOf(timestamp);
                        if (time_str.length() > 13){
                            time_str = time_str.substring(0, 13);
                            timestamp = Long.parseLong(time_str);
                        }
                        Date date = new Date(timestamp);
                        SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss zzz");
                        tx_json.put("timestamp", df.format(date));

                        System.out.println("TIMESTAMP: " + timestamp + " DATE: " + df.format(date));

                        res_arr.add(tx_json);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return res_arr;
    }
}