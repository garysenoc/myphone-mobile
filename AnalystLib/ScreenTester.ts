import {NativeModules} from 'react-native';

const {ScreenTester} = NativeModules;

interface AndroidScreenTesterInterface {}

export const AndroidScreenTester: AndroidScreenTesterInterface = ScreenTester;
