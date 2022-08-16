package com.myphoneapp.analystlib;

import android.os.Parcelable;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.IBluetoothResult;

public class BluetoothTester extends ReactContextBaseJavaModule implements IBluetoothResult {
    bb.com.bbanalyst.BluetoothTester bluetoothTester;
    Promise BTCPromise;
    String deviceFoundParam1;
    String deviceFoundParam2;

    BluetoothTester(ReactApplicationContext context){
        super(context);
        bluetoothTester = bb.com.bbanalyst.BluetoothTester.getInstance();
    }

    @NonNull
    @Override
    public String getName() {
        return "BluetoothTester";
    }

    @ReactMethod
    public void startBluetoothTest(Promise promise){
        BTCPromise = promise;
        bluetoothTester.setCallback(this.getReactApplicationContext(),this);
        bluetoothTester.startBluetoothTest();
    }

    @Override
    public void bluetoothTestCompleted(boolean b) {
        if(b){
            BTCPromise.resolve(deviceFoundParam1 + ", " + deviceFoundParam2);
        } else {
            BTCPromise.reject("Error BluetoothTester bluetoothTestCompleted:","Bluetooth test is not completed properly.");
        }
    }

    @Override
    public void bluetoothScanCompleted() {

    }

    @Override
    public void deviceFound(String s, String s1, Parcelable[] parcelables) {
        deviceFoundParam1 = s;
        deviceFoundParam2 = s1;
    }

    @Override
    public void bluetoothConnected() {

    }

    @Override
    public void bluetoothNotConnected() {

    }
}
