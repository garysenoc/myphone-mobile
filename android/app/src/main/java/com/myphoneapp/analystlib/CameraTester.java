package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

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
}
