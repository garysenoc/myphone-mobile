import {NativeModules} from 'react-native';

const {ScreenTester} = NativeModules;

interface AndroidScreenTesterInterface {
  onBackPress(): void;
}

export const AndroidScreenTester: AndroidScreenTesterInterface = ScreenTester;
