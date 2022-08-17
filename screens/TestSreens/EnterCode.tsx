import React, {createContext, useContext, useReducer} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from '../../styles/Styles';

import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';

type Nav = {
  navigate: (value: string) => void;
};

const EnterCode: React.FC = () => {
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
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CheckLanding')}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Octicons
              name="chevron-left"
              size={28}
              color="#070707"
              style={{width: 15}}
            />
            <Text
              style={[
                Styles.detailTitle,
                {
                  textTransform: 'none',
                  fontSize: 14,
                  fontFamily: 'MontserratAlternates-Regular',
                },
              ]}>
              back
            </Text>
          </TouchableOpacity>
          {/* <Text style={[Styles.detailTitle,{textTransform:'none',fontSize:16}]}>Camera Test</Text>
            <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Home')}
                    style={{display:'flex', alignItems:'center', flexDirection:'row'}}
                >
                <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>Cancel</Text>
                
            </TouchableOpacity> */}
        </View>

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
                  source={require('../../assets/images/test/test2.png')}
                  style={Styles.testImage}
                />

                <TextInput
                  placeholder="enter code.."
                  style={{
                    backgroundColor: '#E5E4E4',
                    paddingHorizontal: 15,
                    width: '100%',
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={[
                    Styles.detailTitle,
                    {
                      textTransform: 'none',
                      fontSize: 12,
                      fontFamily: 'MontserratAlternates-Regular',
                    },
                  ]}>
                  Please enter the OTP code shown on the website. If the code
                  fails to validate, please get a new code from the website
                </Text>
                <TouchableOpacity
                  style={[Styles.checkButton, {width: '40%'}]}
                  onPress={() => navigation.navigate('DeviceInformation')}>
                  <Text style={Styles.mainButtonText}>submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EnterCode;
