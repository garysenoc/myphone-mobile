package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.CollectInfo;
import bb.com.bbanalyst.DashboardUtility;
import bb.com.bbanalyst.DeviceInfoAPI;
import bb.com.bbanalyst.IDeviceInfo;
import bb.com.bbanalyst.ResultLog;

public class DeviceInfoTester extends ReactContextBaseJavaModule implements IDeviceInfo {
    CollectInfo collectInfo;
    DeviceInfoAPI deviceInfoAPI;
    DashboardUtility dashboardUtility;

    DeviceInfoTester(ReactApplicationContext context) {
        super(context);
        collectInfo = CollectInfo.getInstance();
        dashboardUtility = new DashboardUtility();
    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceInfoTester";
    }

    @ReactMethod
    public void collectAllInfo(Promise promise) {
        try{
            collectInfo.collectAllInfo(this.getReactApplicationContext(), this);
            promise.resolve(dashboardUtility.getTestResultJSON(new ResultLog(), deviceInfoAPI));
        } catch (Exception e){
            promise.reject("Error DeviceInfoTester collectAllInfo:",e);
        }
    }

    @ReactMethod
    public void getModel(Promise promise){
        promise.resolve(deviceInfoAPI.getiModel());
    }

    @ReactMethod
    public void getManufacturer(Promise promise){
        promise.resolve(deviceInfoAPI.getiManufacturer());
    }

    @ReactMethod
    public void getBatteryHealth(Promise promise) {
        try {
            promise.resolve(collectInfo.getBatteryHealth(this.getReactApplicationContext()));
        } catch (Exception e) {
            promise.reject("Error DeviceInfoTester getBatteryHealth:", e);
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
            promise.reject("Error DeviceInfoTester isSimPresent:", e);
        }
    }

    @Override
    public void infoCollected(DeviceInfoAPI deviceInfoAPI) {
        this.deviceInfoAPI = deviceInfoAPI;
    }
}
