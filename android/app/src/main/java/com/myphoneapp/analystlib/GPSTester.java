package com.myphoneapp.analystlib;

import android.location.Location;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONStringer;

public class GPSTester extends ReactContextBaseJavaModule {
    bb.com.bbanalyst.GPSTester gpsTester;

    GPSTester(ReactApplicationContext context){
        super(context);
        gpsTester = new bb.com.bbanalyst.GPSTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "GPSTester";
    }

    @ReactMethod
    public void isGPSEnabled(Promise promise) {
        try{
            promise.resolve(gpsTester.isGPSEnabled(this.getReactApplicationContext()));
        }catch(Exception e) {
            promise.reject("Error GPSTester isGPSEnabled", e);
        }
    }

    @ReactMethod
    public void displayPromptForEnablingGPS() {
        gpsTester.displayPromptForEnablingGPS(this.getCurrentActivity());
    }

    @ReactMethod
    public void getLocation(Promise promise) {
        try{
            Location result = gpsTester.getLocation(this.getReactApplicationContext());
            promise.resolve(result.toString());
        } catch(Exception e){
            promise.reject("Error GPSTester getLocation:", e);
        }
    }
}
