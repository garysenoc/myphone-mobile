import {NativeModules} from 'react-native';

const {GPSTester} = NativeModules;

interface AndroidGPSTesterInterface {
  isGPSEnabled(): Promise<boolean>;
  displayPromptForEnablingGPS(): void;
  getLocation(): Promise<boolean>;
}

export const AndroidGPSTester: AndroidGPSTesterInterface = GPSTester;
