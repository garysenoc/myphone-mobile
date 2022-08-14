import {NativeModules} from 'react-native';

const {LineDrawTester} = NativeModules;

interface iOSLineDrawTesterInterface {}

export const iOSLineDrawTester: iOSLineDrawTesterInterface = LineDrawTester;
