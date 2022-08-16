package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.ILEDTester;

public class LEDTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.LEDTester ledTester;
    ChildClass childClass;

    LEDTester(ReactApplicationContext context) {
        super(context);
        ledTester = new bb.com.bbanalyst.LEDTester();
        childClass = new ChildClass();
    }

    @NonNull
    @Override
    public String getName() {
        return "LEDTester";
    }

    @ReactMethod
    public void startLED() {
        ledTester.startLED(this.getReactApplicationContext(), this.childClass);
    }

    @ReactMethod
    public void removeAdminAccess() {
        ledTester.removeAdminAccess(this.getReactApplicationContext());
    }

    private class ChildClass implements ILEDTester {
        boolean isLEDPermissionDenied = false;
        boolean isLEDStarted = false;

        @Override
        public void ledPermissionDenied() {
            isLEDPermissionDenied = true;
        }

        @Override
        public void ledStarted() {
            isLEDStarted = true;
        }
    }
}
