import {NativeModules} from 'react-native';

const {BluetoothTester} = NativeModules;

interface AndroidBluetoothTesterInterface {}

export const AndroidBluetoothTester: AndroidBluetoothTesterInterface =
  BluetoothTester;
