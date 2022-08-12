package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import bb.com.bbanalyst.KeysDetector;

public class KeysTester extends ReactContextBaseJavaModule {
    KeysDetector keysDetector;

    KeysTester(ReactApplicationContext context){
        super(context);
        keysDetector = new KeysDetector();
    }

    @NonNull
    @Override
    public String getName() {
        return "KeysTester";
    }
}
