import React from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  AndroidDeviceInfoTester,
  AndroidGPSTester,
  AndroidLEDTester,
  AndroidScreenTester,
  SpeakerTester,
  VibratorTester,
} from '../AnalystLib';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#BCE5FF',
        width: '80%',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
      }}>
      <Text
        style={{
          fontFamily: 'MontserratAlternates-Regular',
          fontSize: 16,
          paddingTop: 5,
          color: '#070707',
          textAlign: 'center',
          paddingLeft: 5,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const AnalystLibTest = () => {
  return (
    <SafeAreaView>
      <Button
        title="VibratorTester vibrateDevice"
        onPress={async () => {
          VibratorTester.vibrateDevice();
        }}
      />
      <Button
        title="VibratorTester stopVibration"
        onPress={async () => {
          VibratorTester.stopVibration();
        }}
      />
      <Button
        title="SpeakerTester startSound"
        onPress={async () => {
          SpeakerTester.startSound();
        }}
      />
      <Button
        title="SpeakerTester stopSound"
        onPress={async () => {
          SpeakerTester.stopSound();
        }}
      />
      <Button
        title="LEDTester start led"
        onPress={() => {
          AndroidLEDTester.startLED();
        }}
      />
      <Button
        title="GPSTester isGPSEnabled"
        onPress={async () => {
          console.log('isGPSEnabled:', await AndroidGPSTester.isGPSEnabled());
        }}
      />
      <Button
        title="GPSTester getLocation"
        onPress={async () => {
          try {
            console.log('getLocation:', await AndroidGPSTester.getLocation());
          } catch (error) {
            console.log('GPSTester error:', error);
          }
        }}
      />
      <Button
        title="DeviceInfoTester collectAllInfo"
        onPress={async () => {
          let result = await AndroidDeviceInfoTester.collectAllInfo();
          console.log('DeviceInfoTester collectAllInfo:', result);
        }}
      />
      <Button
        title="DeviceInfoTester getBatteryHealth"
        onPress={async () => {
          let result = await AndroidDeviceInfoTester.getBatteryHealth();
          console.log('DeviceInfoTester getBatteryHealth:', result);
        }}
      />
      <Button
        title="DeviceInfoTester isSimPresent"
        onPress={async () => {
          let result = await AndroidDeviceInfoTester.isSimPresent();
          console.log('DeviceInfoTester isSimPresent:', result);
        }}
      />
      <Button
        title="ScreenTester onBackPress"
        onPress={() => {
          AndroidScreenTester.onBackPress();
        }}
      />
    </SafeAreaView>
  );
};
