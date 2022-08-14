import {NativeModules} from 'react-native';

const {ReportingTester} = NativeModules;

interface AndroidReportingTesterInterface {}

interface iOSReportingTesterInterface {}

export const AndroidReportingTester: AndroidReportingTesterInterface =
  ReportingTester;
export const iOSReportingTester: iOSReportingTesterInterface = ReportingTester;
