package com.myphoneapp.analystlib;

import android.hardware.Sensor;
import android.hardware.SensorEvent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.ISensorDetector;
import bb.com.bbanalyst.ResultLog;

public class SensorTester extends ReactContextBaseJavaModule implements ISensorDetector {
    bb.com.bbanalyst.SensorTester sensorTester;
    ResultLog resultLog;
    boolean isAmbientSensor = false;
    boolean proximitySensorDetected = false;
    Promise PSDPromise;

    SensorTester(ReactApplicationContext context) {
        super(context);
        sensorTester = new bb.com.bbanalyst.SensorTester();
        resultLog = new ResultLog();
    }

    @NonNull
    @Override
    public String getName() {
        return "SensorTester";
    }

    @ReactMethod
    public void listenForProximity(Promise promise) {
        PSDPromise = promise;
        try{
            sensorTester.listenForProximity(this.getReactApplicationContext(),this);
        }catch(Exception e){
            promise.reject("Error SensorTester listenForProximity:",e);
        }
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
        sensorTester.listenForAmbientLightSensor(this.getReactApplicationContext(),this);
    }

    @ReactMethod
    public void runAllAutoSensor() {
        sensorTester.runAllAutoSensor(this.getReactApplicationContext(),this,resultLog);
    }

    @ReactMethod
    public void onAccuracyChanged(Sensor sensor, int i) {
        sensorTester.onAccuracyChanged(sensor, i);
    }

    @Override
    public void proximitySensorDetected() {
        PSDPromise.resolve(true);
        this.proximitySensorDetected = true;
    }

    @Override
    public void sensorTestFinished(ResultLog resultLog, boolean b, boolean b1) {
        this.resultLog = resultLog;
    }

    @Override
    public void ambientSensorDetected() {
        isAmbientSensor = true;
    }
}
