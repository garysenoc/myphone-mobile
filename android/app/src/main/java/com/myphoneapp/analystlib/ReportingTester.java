package com.myphoneapp.analystlib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import bb.com.bbanalyst.DashboardUtility;

public class ReportingTester extends ReactContextBaseJavaModule {
    DashboardUtility dashboardUtility;

    ReportingTester(ReactApplicationContext context){
        super(context);
        dashboardUtility = new DashboardUtility();
    }

    @NonNull
    @Override
    public String getName() {
        return "ReportingTester";
    }
}
