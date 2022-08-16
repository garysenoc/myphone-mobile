package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import bb.com.bbanalyst.IMicProgressUpdate;

public class MicTester extends ReactContextBaseJavaModule implements IMicProgressUpdate {
    bb.com.bbanalyst.MicTester micTester;
    String recordingPath;
    int micProgress = 0;

    MicTester(ReactApplicationContext context){
        super(context);
        micTester = new bb.com.bbanalyst.MicTester();
    }

    @NonNull
    @Override
    public String getName() {
        return "MicTester";
    }

    @ReactMethod
    public void startListeningToMic(){
        micTester.startListeningToMic(this.getReactApplicationContext(),this.getCurrentActivity());
    }

    @ReactMethod
    public void stopListeningToMic(){
        micTester.stopListeningToMic();
    }

    @ReactMethod
    public void startRecord(){
        micTester.startRecording(this.getReactApplicationContext(),this);
    }

    @ReactMethod
    public void playRecord(String path){
        micTester.playRecording(this.getReactApplicationContext(),path);
    }

    @Override
    public void micProgressUpdate(int i) {
        micProgress = i;
    }

    @Override
    public void micRecordingDone(String s) {
        recordingPath = s;
    }

    @Override
    public void audioPermissionForMicrophoneDenied() {

    }

    @Override
    public void storagePermissionForMicrophoneDenied() {

    }

    @Override
    public void micRecordingStarted() {
        micProgress = 0;
    }
}
