import {NativeModules} from 'react-native';

const {DeviceInfoTester} = NativeModules;

interface AndroidDeviceInfoTesterInterface {}

interface iOSDeviceInfoTesterInterface {}

export const AndroidDeviceInfoTester: AndroidDeviceInfoTesterInterface =
  DeviceInfoTester;
export const iOSDeviceInfoTester: iOSDeviceInfoTesterInterface =
  DeviceInfoTester;
