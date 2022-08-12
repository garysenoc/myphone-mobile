package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.CollectInfo;

public class DeviceInfoTester extends ReactContextBaseJavaModule {
    CollectInfo collectInfo;

    DeviceInfoTester(ReactApplicationContext context) {
        super(context);
        collectInfo = CollectInfo.getInstance();
    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceInfoTester";
    }

    @ReactMethod
    public void collectAllInfo() {
//        TODO
//        collectInfo.collectAllInfo(this.getReactApplicationContext(), IDeviceInfo);
    }

    @ReactMethod
    public void getBatteryHealth(Promise promise) {
        try {
            promise.resolve(collectInfo.getBatteryHealth(this.getReactApplicationContext()));
        } catch (Exception e) {
            promise.reject("DeviceInfoTester getBatteryHealth:", e);
        }
    }

    @ReactMethod
    public void injectIMEI(String imei) {
        collectInfo.injectIMEI(imei);
    }

    @ReactMethod
    public void isSimPresent(Promise promise) {
        try {
            promise.resolve(collectInfo.isSimPresent(this.getReactApplicationContext()));
        } catch (Exception e) {
            promise.reject("DeviceInfoTester isSimPresent:", e);
        }
    }
}
