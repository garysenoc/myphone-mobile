import {NativeModules} from 'react-native';

const {BluetoothTester} = NativeModules;

interface AndroidBluetoothTesterInterface {
  startBluetoothTest(): Promise<String>;
}

export const AndroidBluetoothTester: AndroidBluetoothTesterInterface =
  BluetoothTester;
