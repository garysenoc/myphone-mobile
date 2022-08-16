import {NativeModules} from 'react-native';

const {LEDTester} = NativeModules;

interface AndroidLEDTesterInterface {
  startLED(): Promise<any>;
  removeAdminAccess(): void;
}

export const AndroidLEDTester: AndroidLEDTesterInterface = LEDTester;
