import {NativeModules} from 'react-native';

const {CameraTester} = NativeModules;

interface AndroidCameraTesterInterface {}

interface iOSCameraTesterInterface {}

export const AndroidCameraTester: AndroidCameraTesterInterface = CameraTester;
export const iOSCameraTester: iOSCameraTesterInterface = CameraTester;
