import {NativeModules} from 'react-native';

const {DeviceInfoTester} = NativeModules;

interface AndroidDeviceInfoTesterInterface {
  collectAllInfo(): Promise<String>;
  getBatteryHealth(): Promise<number>;
  injectIMEI(imei: String): void;
  isSimPresent(): Promise<boolean>;
}

interface iOSDeviceInfoTesterInterface {}

export const AndroidDeviceInfoTester: AndroidDeviceInfoTesterInterface =
  DeviceInfoTester;
export const iOSDeviceInfoTester: iOSDeviceInfoTesterInterface =
  DeviceInfoTester;
