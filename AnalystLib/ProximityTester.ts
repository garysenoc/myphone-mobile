import {NativeModules} from 'react-native';

const {ProximityTester} = NativeModules;

interface iOSProximityTesterInterface {}

export const iOSProximityTester: iOSProximityTesterInterface = ProximityTester;
