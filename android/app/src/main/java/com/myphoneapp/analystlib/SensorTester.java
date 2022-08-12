package com.myphoneapp.analystlib;

import android.hardware.Sensor;
import android.hardware.SensorEvent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SensorTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.SensorTester sensorTester;

    SensorTester(ReactApplicationContext context) {
        super(context);
        sensorTester = new bb.com.bbanalyst.SensorTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "SensorTester";
    }

    @ReactMethod
    public void listenForProximity() {
//        TODO
//        sensorTester.listenForProximity(this.getReactApplicationContext(),ISensorDetector);
    }

    @ReactMethod
    public void cancelListener() {
        sensorTester.cancelListener();
    }

    @ReactMethod
    public void onSensorChanged(SensorEvent sensorEvent) {
        sensorTester.onSensorChanged(sensorEvent);
    }

    @ReactMethod
    public void listenForAmbientLightSensor() {
//        sensorTester.listenForAmbientLightSensor(this.getReactApplicationContext(),ISensorDetector);
    }

    @ReactMethod
    public void runAllAutoSensor() {
//        sensorTester.runAllAutoSensor(this.getReactApplicationContext(),ISensorDetector,ResultLog);
    }

    @ReactMethod
    public void onAccuracyChanged(Sensor sensor, int i) {
        sensorTester.onAccuracyChanged(sensor, i);
    }
}
