package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.ILEDTester;

public class LEDTester extends ReactContextBaseJavaModule implements ILEDTester {
    bb.com.bbanalyst.LEDTester ledTester;
    boolean isLEDPermissionDenied = false;
    boolean isLEDStarted = false;

    LEDTester(ReactApplicationContext context) {
        super(context);
        ledTester = new bb.com.bbanalyst.LEDTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "LEDTester";
    }

    @ReactMethod
    public void startLED() {
        ledTester.startLED(this.getReactApplicationContext(), this);
    }

    @ReactMethod
    public void removeAdminAccess() {
        ledTester.removeAdminAccess(this.getReactApplicationContext());
    }

    @Override
    public void ledPermissionDenied() {
        isLEDPermissionDenied = true;
    }

    @Override
    public void ledStarted() {
        isLEDStarted = true;
    }
}
