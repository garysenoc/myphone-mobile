import {NativeModules} from 'react-native';

const {KeysTester} = NativeModules;

interface AndroidKeysTesterInterface {
  startListeningForHomeKey(callback: () => void): void;
  startListeningForPowerKey(callback: () => void): void;
  stopListeningForHomeKey(): void;
  stopListeningForPowerKey(): void;
}

interface iOSKeysTesterInterface {}

export const AndroidKeysTester: AndroidKeysTesterInterface = KeysTester;
export const iOSKeysTester: iOSKeysTesterInterface = KeysTester;
