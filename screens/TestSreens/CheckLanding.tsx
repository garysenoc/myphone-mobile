import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from '../../styles/Styles';
import {useNavigation} from '@react-navigation/native';

type Nav = {
  navigate: (value: string) => void;
};

const CheckLanding = () => {
  const navigation = useNavigation<Nav>();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#fff"
        barStyle={isDarkMode ? 'dark-content' : 'dark-content'}
      />

      <View
        style={[
          Styles.main,
          {paddingTop: 70, paddingBottom: 50, backgroundColor: '#fff'},
        ]}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 25,
            paddingHorizontal: 20,
            position: 'absolute',
            top: 0,
            left: 0,
          }}></View>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[Styles.bodyTheme]}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}>
            <View
              style={{
                width: '100%',
                paddingVertical: 30,
                paddingHorizontal: 20,
              }}>
              <View style={Styles.testIconBox}>
                <Image
                  source={require('../../assets/images/test/test1.png')}
                  style={Styles.testImage}
                />

                <TouchableOpacity
                  style={[Styles.checkButton]}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={Styles.mainButtonText}>I have no code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Styles.checkButton]}
                  onPress={() => navigation.navigate('EnterCode')}>
                  <Text style={Styles.mainButtonText}>
                    I have a code from the website
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Styles.checkButton]}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={Styles.mainButtonText}>Exit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CheckLanding;
