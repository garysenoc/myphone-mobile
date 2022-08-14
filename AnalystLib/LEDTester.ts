import {NativeModules} from 'react-native';

const {LEDTester} = NativeModules;

interface AndroidLEDTesterInterface {}

export const AndroidLEDTester: AndroidLEDTesterInterface = LEDTester;
