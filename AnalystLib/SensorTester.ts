import {NativeModules} from 'react-native';

const {SensorTester} = NativeModules;

interface AndroidSensorTesterInterface {
  listenForProximity(): Promise<boolean>;
}

export const AndroidSensorTester: AndroidSensorTesterInterface = SensorTester;
