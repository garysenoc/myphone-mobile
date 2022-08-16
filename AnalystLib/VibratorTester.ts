import {NativeModules} from 'react-native';

const {VibratorTester: NativeVibratorTester} = NativeModules;

interface VibratorTesterInterface {
  vibrateDevice(): void;
  stopVibration(): void;
}

export const VibratorTester: VibratorTesterInterface = NativeVibratorTester;
