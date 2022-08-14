import {NativeModules} from 'react-native';

const {FlashLightTester} = NativeModules;

interface iOSFlashLightTesterInterface {}

export const iOSFlashLightTester: iOSFlashLightTesterInterface =
  FlashLightTester;
