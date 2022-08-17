package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.IWifiResult;

public class WifiTester extends ReactContextBaseJavaModule implements IWifiResult {
    bb.com.bbanalyst.WifiTester wifiTester;
    Promise SWTPromise;
    boolean wifiError = false;
    boolean wifiEnabled = false;
    boolean wifiNetworkFound = false;

    WifiTester(ReactApplicationContext context){
        super(context);
        wifiTester = new bb.com.bbanalyst.WifiTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "WifiTester";
    }

    @ReactMethod
    public void startWifiTest(Promise promise){
        SWTPromise = promise;
        try{
            wifiTester.startWifiTest(this.getReactApplicationContext(),this);
        }catch(Exception e) {
            promise.reject("Error WifiTester startWifiTest", e);
        }
    }

    @ReactMethod
    public void enableWifi(){
        wifiTester.enableWifi(this.getReactApplicationContext());
    }

    @ReactMethod
    public void disableWifi(){
        wifiTester.disableWifi(this.getReactApplicationContext());
    }

    @Override
    public void wifiTestCompleted(boolean b, boolean b1, boolean b2) {
        wifiError = b;
        wifiEnabled = b1;
        wifiNetworkFound = b2;
        SWTPromise.resolve(wifiError + " " + wifiEnabled + " " +wifiNetworkFound);
    }
}
