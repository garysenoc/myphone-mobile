package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SpeakerTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.SpeakerTester module;

    SpeakerTester(ReactApplicationContext context) {
        super(context);
        module = new bb.com.bbanalyst.SpeakerTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "SpeakerTester";
    }

    @ReactMethod
    public void startSound() {
        module.startSound(bb.com.bbanalyst.SpeakerTester.RESOURCE.speaker,this.getReactApplicationContext());
    }

    @ReactMethod
    public void stopSound() {
        module.stopSound();
    }
}
