package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LEDTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.LEDTester ledTester;

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
//        TODO
//        ledTester.startLED(this.getReactApplicationContext(), ILEDTester);
    }

    @ReactMethod
    public void removeAdminAccess() {
        ledTester.removeAdminAccess(this.getReactApplicationContext());
    }
}
