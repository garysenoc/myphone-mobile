package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.Vibrator;

public class VibratorTester extends ReactContextBaseJavaModule {
    Vibrator vibrator;

    VibratorTester(ReactApplicationContext context) {
        super(context);
        vibrator = new Vibrator();
    }

    @NonNull
    @Override
    public String getName() {
        return "VibratorTester";
    }

    @ReactMethod
    public void vibrateDevice() {
        vibrator.vibrateDevice(this.getReactApplicationContext());
    }

    @ReactMethod
    public void stopVibration() {
        vibrator.stopVibration();
    }
}
