import {NativeModules} from 'react-native';

const {GPSTester} = NativeModules;

interface AndroidGPSTesterInterface {}

export const AndroidGPSTester: AndroidGPSTesterInterface = GPSTester;
