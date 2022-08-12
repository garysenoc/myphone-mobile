package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class GPSTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.GPSTester gpsTester;

    GPSTester(ReactApplicationContext context){
        super(context);
        gpsTester = new bb.com.bbanalyst.GPSTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "GPSTester";
    }
}
