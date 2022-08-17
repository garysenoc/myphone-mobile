import {NativeModules} from 'react-native';

const {WifiTester} = NativeModules;

interface AndroidWifiTesterInterface {
  startWifiTest(): Promise<String>;
  enableWifi(): void;
  disableWifi(): void;
}

interface iOSWifiTesterInterface {}

export const AndroidWifiTester: AndroidWifiTesterInterface = WifiTester;
export const iOSWifiTester: iOSWifiTesterInterface = WifiTester;
