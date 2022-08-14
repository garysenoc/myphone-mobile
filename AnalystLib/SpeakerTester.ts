import {NativeModules} from 'react-native';

const {SpeakerTester: NativeSpeakerTester} = NativeModules;

interface SpeakerTesterInterface {}

export const SpeakerTester: SpeakerTesterInterface = NativeSpeakerTester;
