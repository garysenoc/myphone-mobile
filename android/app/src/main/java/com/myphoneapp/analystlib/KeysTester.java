package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.IKeysDetected;
import bb.com.bbanalyst.KeysDetector;

public class KeysTester extends ReactContextBaseJavaModule implements IKeysDetected {
    KeysDetector keysDetector;
    Callback HKCallback;
    Callback PKCallback;

    KeysTester(ReactApplicationContext context){
        super(context);
        keysDetector = new KeysDetector();
    }

    @ReactMethod
    public void startListeningForHomeKey(Callback callback){
        keysDetector.startListeningForHomeKey(this.getReactApplicationContext(),this);
        HKCallback = callback;
    }

    @ReactMethod
    public void startListeningForPowerKey(Callback callback){
        keysDetector.startListeningForPowerKey(this.getReactApplicationContext(),this);
        PKCallback = callback;
    }

    @ReactMethod
    public void stopListeningForHomeKey(){
        keysDetector.stopListeningForHomeKey();
        HKCallback = null;
    }

    @ReactMethod
    public void stopListeningForPowerKey(){
        keysDetector.stopListeningForPowerKey(this.getReactApplicationContext());
        PKCallback = null;
    }

    @NonNull
    @Override
    public String getName() {
        return "KeysTester";
    }

    @Override
    public void homeKeyDetected() {
        HKCallback.invoke();
    }

    @Override
    public void powerKeyDetected() {
        PKCallback.invoke();
    }

    @Override
    public void volumeDownKeyDetected() {

    }

    @Override
    public void volumeUpKeyDetected() {

    }

    @Override
    public void menuKeyDetected() {

    }

    @Override
    public void cameraKeyDetected() {

    }

    @Override
    public void recentAppKeyDetected() {

    }

    @Override
    public void backKeyDetected() {

    }
}
