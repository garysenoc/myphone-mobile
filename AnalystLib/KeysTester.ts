import {NativeModules} from 'react-native';

const {KeysTester} = NativeModules;

interface AndroidKeysTesterInterface {}

interface iOSKeysTesterInterface {}

export const AndroidKeysTester: AndroidKeysTesterInterface = KeysTester;
export const iOSKeysTester: iOSKeysTesterInterface = KeysTester;
