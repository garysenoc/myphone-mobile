import {NativeModules} from 'react-native';

const {PixelTester} = NativeModules;

interface AndroidPixelTesterInterface {}

interface iOSPixelTesterInterface {}

export const AndroidPixelTester: AndroidPixelTesterInterface = PixelTester;
export const iOSPixelTester: iOSPixelTesterInterface = PixelTester;
