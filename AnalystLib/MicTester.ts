import {NativeModules} from 'react-native';

const {MicTester} = NativeModules;

interface AndroidMicTesterInterface {}

interface iOSMicTesterInterface {}

export const AndroidMicTester: AndroidMicTesterInterface = MicTester;
export const iOSMicTester: iOSMicTesterInterface = MicTester;
