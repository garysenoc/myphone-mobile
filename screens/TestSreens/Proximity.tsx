import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
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
import Modal from 'react-native-modal';

type Nav = {
  navigate: (value: string) => void;
};

const Proximity = () => {
  const navigation = useNavigation<Nav>();
  const isDarkMode = useColorScheme() === 'dark';
  const [skip, setSkip] = useState(false);

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
            onPress={() => navigation.navigate('DeviceInformation')}
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
          <Text
            style={[Styles.detailTitle, {textTransform: 'none', fontSize: 16}]}>
            Proximity Test
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={[
                Styles.detailTitle,
                {
                  textTransform: 'none',
                  fontSize: 14,
                  fontFamily: 'MontserratAlternates-Regular',
                },
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
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
                paddingVertical: 0,
                paddingHorizontal: 20,
              }}>
              <View style={[Styles.testIconBox, {paddingBottom: 0}]}>
                <Image
                  source={require('../../assets/images/test/test4.png')}
                  style={[Styles.testImage, {width: '80%'}]}
                />
                {/* <AntDesign name='closecircle' color='#E16F6F' size={25} /> */}
              </View>
              <Text
                style={[
                  Styles.testTextCenter,
                  {paddingBottom: 0, marginBottom: 0},
                ]}>
                Put your hand over the front camera to check the proximity
                sensor
              </Text>

              <Text
                style={[
                  Styles.testTextCenter,
                  {paddingBottom: 0, marginBottom: 0},
                ]}>
                Please place your hand on the device to activate proximity
                sensor.
              </Text>

              {/* <View style={[{marginTop:5,borderWidth:0,alignItems:'center', display:'flex', paddingVertical:10} ]}>
                   <Text style={[Styles.testFooterBtn, Styles.mainButtonText]}>Fail</Text>
              </View>
              <Text style={[Styles.testTextCenter,]}>
               Proximity testing...
              </Text> */}
            </View>

            <View
              style={{
                paddingHorizontal: 12,
                display: 'flex',
                paddingVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  paddingVertical: 30,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Proximity')}
                  style={[Styles.testFooterBtn, {marginHorizontal: 3}]}>
                  <Text
                    style={[
                      Styles.mainButtonText,
                      {textTransform: 'lowercase'},
                    ]}>
                    Retry
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setSkip(true)}
                  style={[Styles.testFooterBtn, {marginHorizontal: 3}]}>
                  <Text
                    style={[
                      Styles.mainButtonText,
                      {textTransform: 'lowercase', marginHorizontal: 3},
                    ]}>
                    Skip
                  </Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Gyro')}
                        style={[Styles.testFooterBtn,{marginHorizontal:3}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase'}]}>Next</Text>
                      </TouchableOpacity> */}
              </View>
              <TextInput
                placeholder="Anything you'd like to mention about this test about your device
                      or results? Let us know in the comment section below"
                placeholderTextColor="#A7A7A9"
                multiline={true}
                numberOfLines={4}
                style={[
                  Styles.regularField,
                  {textAlignVertical: 'top', fontSize: 14},
                ]}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* SKIP MODAL */}
      <Modal isVisible={skip} animationIn="fadeIn" animationOut="fadeOut">
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={Styles.testPopupBox}>
            <Text style={Styles.testPopupText}>
              Are you sure you want to skip?
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Gyro')}
                style={[
                  Styles.mainButton,
                  {
                    width: 120,
                    paddingVertical: 10,
                    backgroundColor: '#C6C6C6',
                    borderWidth: 0,
                  },
                ]}>
                <Text
                  style={[
                    Styles.mainButtonText,
                    {color: '#595959', fontFamily: 'Montserrat-SemiBold'},
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSkip(false)}
                style={[
                  Styles.mainButton,
                  {
                    width: 120,
                    paddingVertical: 10,
                    marginLeft: 5,
                    backgroundColor: '#070707',
                  },
                ]}>
                <Text
                  style={[
                    Styles.mainButtonText,
                    {fontFamily: 'Montserrat-SemiBold'},
                  ]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Proximity;
