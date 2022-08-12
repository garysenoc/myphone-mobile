package com.myphoneapp.analystlib;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AnalystLib implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new VibratorTester(reactContext));
        modules.add(new SpeakerTester(reactContext));
        modules.add(new LEDTester(reactContext));
        modules.add(new DeviceInfoTester(reactContext));
//        modules.add(new ScreenTester(reactContext));
        modules.add(new SensorTester(reactContext));
//        modules.add(new PixelTester(reactContext));
//        modules.add(new CameraTester(reactContext));
        modules.add(new KeysTester(reactContext));
        modules.add(new GPSTester(reactContext));
        modules.add(new MicTester(reactContext));
        modules.add(new WifiTester(reactContext));
//        modules.add(new BluetoothTester(reactContext));
        modules.add(new ReportingTester(reactContext));

        return modules;
    }

}
