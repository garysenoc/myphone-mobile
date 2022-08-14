import {NativeModules} from 'react-native';

const {VibratorTester: NativeVibratorTester} = NativeModules;

interface VibratorTesterInterface {}

export const VibratorTester: VibratorTesterInterface = NativeVibratorTester;
