import {NativeModules} from 'react-native';

const {WifiTester} = NativeModules;

interface AndroidWifiTesterInterface {}

interface iOSWifiTesterInterface {}

export const AndroidWifiTester: AndroidWifiTesterInterface = WifiTester;
export const iOSWifiTester: iOSWifiTesterInterface = WifiTester;
