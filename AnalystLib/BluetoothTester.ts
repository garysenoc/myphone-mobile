import {NativeModules} from 'react-native';

const {BluetoothTester} = NativeModules;

interface AndroidBluetoothTesterInterface {
  vibrateDevice(): void;
  stopVibration(): void;
}

export const AndroidBluetoothTester: AndroidBluetoothTesterInterface =
  BluetoothTester;
