package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import bb.com.bbanalyst.PixelTestActivity;

public class PixelTester extends ReactContextBaseJavaModule {
    PixelTestActivity pixelTestActivity;

    PixelTester(ReactApplicationContext context){
        super(context);
        pixelTestActivity = new PixelTestActivity();
    }

    @NonNull
    @Override
    public String getName() {
        return "PixelTester";
    }
}
