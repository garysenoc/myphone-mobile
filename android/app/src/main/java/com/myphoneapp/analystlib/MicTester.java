package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class MicTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.MicTester micTester;

    MicTester(ReactApplicationContext context){
        super(context);
        micTester = new bb.com.bbanalyst.MicTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "MicTester";
    }
}
