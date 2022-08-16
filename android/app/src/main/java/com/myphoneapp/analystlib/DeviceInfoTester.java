package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.CollectInfo;
import bb.com.bbanalyst.DeviceInfoAPI;
import bb.com.bbanalyst.IDeviceInfo;

public class DeviceInfoTester extends ReactContextBaseJavaModule {
    CollectInfo collectInfo;
    ChildClass childClass;

    DeviceInfoTester(ReactApplicationContext context) {
        super(context);
        collectInfo = CollectInfo.getInstance();
        childClass = new ChildClass();
    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceInfoTester";
    }

    @ReactMethod
    public void collectAllInfo(Promise promise) {
        try{
            collectInfo.collectAllInfo(this.getReactApplicationContext(), childClass);
            promise.resolve(childClass.deviceInfoAPI.getiAndroidSerial());
        } catch (Exception e){
            promise.reject("DeviceInfoTester collecctAllInfo:",e);
        }
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

    class ChildClass implements IDeviceInfo {
        public DeviceInfoAPI deviceInfoAPI;
        @Override
        public void infoCollected(DeviceInfoAPI deviceInfoAPI) {
            this.deviceInfoAPI = deviceInfoAPI;
        }
    }
}
