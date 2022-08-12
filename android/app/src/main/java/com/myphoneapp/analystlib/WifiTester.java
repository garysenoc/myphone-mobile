package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class WifiTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.WifiTester wifiTester;

    WifiTester(ReactApplicationContext context){
        super(context);
        wifiTester = new bb.com.bbanalyst.WifiTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "WifiTester";
    }
}
