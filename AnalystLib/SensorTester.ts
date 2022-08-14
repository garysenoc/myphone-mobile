import {NativeModules} from 'react-native';

const {SensorTester} = NativeModules;

interface AndroidSensorTesterInterface {}

export const AndroidSensorTester: AndroidSensorTesterInterface = SensorTester;
