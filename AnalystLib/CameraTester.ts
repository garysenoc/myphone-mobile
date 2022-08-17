import {NativeModules} from 'react-native';

const {CameraTester} = NativeModules;

interface AndroidCameraTesterInterface {
  FrontCameraID(): Promise<number>;
  RearCameraID(): Promise<number>;
}

interface iOSCameraTesterInterface {}

export const AndroidCameraTester: AndroidCameraTesterInterface = CameraTester;
export const iOSCameraTester: iOSCameraTesterInterface = CameraTester;
