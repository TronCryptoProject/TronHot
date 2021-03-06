package org.tron.walletcli;

import org.json.simple.JSONObject;

import java.lang.reflect.Method;
import java.util.PriorityQueue;
import java.util.concurrent.BlockingQueue;

class ItemPriority{
    public static final int HIGH = 1;
    public static final int MEDIUM = 2;
    public static final int LOW = 3;
}

public class ItemBaggage implements Comparable<ItemBaggage>{
    public Method method;
    private BlockingQueue<JSONObject> queue;
    private Object[] args;
    private int priority;
    private Object instance_obj;
    private long timeout;
    private boolean solidity_node_required = false;

    public ItemBaggage(int priority, long timeout, BlockingQueue<JSONObject> resQueue,
                       Object instance_obj, Method method, Object... args){
        this.method = method;
        this.queue = resQueue;
        this.args = args;
        this.priority = priority;
        this.instance_obj = instance_obj;
        this.timeout = timeout;

        if (method.getName().equals("getTransactionsSocket")){
            this.solidity_node_required = true;
        }
    }

    public boolean isSolidity(){
        return solidity_node_required;
    }

    public long getTimeout(){
        return timeout;
    }

    public int getPriority(){
        return priority;
    }

    public Method getMethod(){
        return method;
    }

    public BlockingQueue<JSONObject> getQueue(){
        return queue;
    }

    public Object[] getArgs(){
        return args;
    }

    public JSONObject invokeMethod(){
        JSONObject res_obj;
        try {
            res_obj = (JSONObject) method.invoke(instance_obj, args);
        }catch(Exception e){
            e.printStackTrace();
            System.out.println("invokeMethod exception: " + e.getLocalizedMessage());
            res_obj = new JSONObject();
            res_obj.put("invokeMethod", TronClient.FAILED);
            res_obj.put("result", TronClient.FAILED);
            res_obj.put("reason", "Failed to call method: " + e.toString());
            return res_obj;
        }
        return res_obj;
    }

    public void addToQueue(JSONObject obj){
        queue.offer(obj);
    }

    @Override
    public int compareTo(ItemBaggage obj){
        if (this.priority < obj.getPriority()){
            return 1;
        }
        if (this.priority > obj.getPriority()){
            return -1;
        }
        return 0;
    }
}
