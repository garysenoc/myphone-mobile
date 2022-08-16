import {NativeModules} from 'react-native';

const {SpeakerTester: NativeSpeakerTester} = NativeModules;

interface SpeakerTesterInterface {
  startSound(): void;
  stopSound(): void;
}

export const SpeakerTester: SpeakerTesterInterface = NativeSpeakerTester;
