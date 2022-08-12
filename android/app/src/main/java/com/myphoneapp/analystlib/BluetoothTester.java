package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class BluetoothTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.BluetoothTester bluetoothTester;

    BluetoothTester(ReactApplicationContext context){
        super(context);
        bluetoothTester = bb.com.bbanalyst.BluetoothTester.getInstance();
    }

    @NonNull
    @Override
    public String getName() {
        return "BluetoothTester";
    }
}
