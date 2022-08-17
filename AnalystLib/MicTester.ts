import {NativeModules} from 'react-native';

const {MicTester} = NativeModules;

interface AndroidMicTesterInterface {
  startListeningToMic(): void;
  stopListeningToMic(): void;
  startRecord(): void;
  playRecord(path: string): void;
}

interface iOSMicTesterInterface {}

export const AndroidMicTester: AndroidMicTesterInterface = MicTester;
export const iOSMicTester: iOSMicTesterInterface = MicTester;
