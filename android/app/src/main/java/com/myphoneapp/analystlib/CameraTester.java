package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.CameraTestActivity;

public class CameraTester extends ReactContextBaseJavaModule {
    CameraTestActivity cameraTestActivity;

    CameraTester(ReactApplicationContext context){
        super(context);
        cameraTestActivity = new CameraTestActivity();
    }

    @NonNull
    @Override
    public String getName() {
        return "CameraTester";
    }

    @ReactMethod
    public void FrontCameraID(Promise promise){
        try{
            promise.resolve(cameraTestActivity.FrontCameraID());
        } catch (Exception e) {
            promise.reject("Error CameraTester FrontCameraID:",e);
        }
    }

    @ReactMethod
    public void RearCameraID(Promise promise){
        try{
            promise.resolve(cameraTestActivity.RearCameraID());
        } catch (Exception e) {
            promise.reject("Error CameraTester FrontCameraID:",e);
        }
    }
}
