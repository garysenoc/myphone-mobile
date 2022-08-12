package com.myphoneapp.analystlib;

import android.view.MotionEvent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.TouchTestActivity;

public class ScreenTester extends ReactContextBaseJavaModule {
    TouchTestActivity touchTestActivity;

    ScreenTester(ReactApplicationContext context) {
        super(context);
        touchTestActivity = new TouchTestActivity();
    }

    @NonNull
    @Override
    public String getName() {
        return "ScreenTester";
    }

    @ReactMethod
    public void onBackPress() {
        touchTestActivity.onBackPressed();
    }

    @ReactMethod
    public void onTouchEvent(MotionEvent motionEvent) {
        touchTestActivity.onTouchEvent(motionEvent);
    }
}
