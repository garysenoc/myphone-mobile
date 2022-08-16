import React, {useState, useEffect} from 'react';
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
import {Styles, colors} from '../../styles/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Nav = {
  navigate: (value: string) => void;
};

const Checkout = ({gotoConfirmation}) => {
  const navigation = useNavigation<Nav>();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#070707',
  };

  const [payment, setPayment] = useState('');
  const [shipment, setShipment] = useState('');

  const Image1 = require('../../assets/images/iphone13gold.png');
  const Image2 = require('../../assets/images/iphone13pro.png');
  const Image3 = require('../../assets/images/iphone13.png');
  const Image4 = require('../../assets/images/iphone13mini.png');

  const products = [
    {image: Image1, name: 'iPhone 13 Pro Max'},
    {image: Image2, name: 'iPhone 13 Pro'},
    {image: Image3, name: 'iPhone 13'},
    {image: Image4, name: 'iPhone 13 Mini'},
  ];

  const [tab, setTab] = useState([true, false, false]);

  useEffect(() => {
    setTab([true, false, false]);
  }, []);

  return (
    <>
      <View>
        <Text style={[Styles.detailTitle, {fontSize: 16, paddingVertical: 15}]}>
          HOW WOULD YOU LIKE TO BE PAID?
        </Text>
        <View style={Styles.detailList}>
          <TouchableOpacity
            style={Styles.detailButton}
            onPress={() => setPayment('paypal')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                payment == 'paypal' ? '#E2E2E2' : '#fff',
                payment == 'paypal' ? '#E2E2E2' : '#fff',
              ]}
              style={[
                Styles.detailGradientButton,
                {display: 'flex', alignItems: 'center'},
              ]}>
              <Image
                source={require('../../assets/images/paypal.png')}
                style={[
                  {
                    height: 35,
                    marginHorizontal: 'auto',
                    maxWidth: 55,
                    resizeMode: 'contain',
                  },
                ]}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.detailButton}
            onPress={() => setPayment('visa')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                payment == 'visa' ? '#E2E2E2' : '#fff',
                payment == 'visa' ? '#E2E2E2' : '#fff',
              ]}
              style={[
                Styles.detailGradientButton,
                {display: 'flex', alignItems: 'center'},
              ]}>
              <Image
                source={require('../../assets/images/visa.png')}
                style={[
                  {
                    height: 35,
                    marginHorizontal: 'auto',
                    maxWidth: 55,
                    resizeMode: 'contain',
                  },
                ]}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={[Styles.detailTitle, {fontSize: 16, paddingVertical: 15}]}>
          HOW WOULD YOU LIKE TO SHIP YOUR DEVICE?
        </Text>
        <View style={Styles.detailList}>
          <TouchableOpacity
            style={Styles.detailButton}
            onPress={() => setShipment('fedex')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                shipment == 'fedex' ? '#E2E2E2' : '#fff',
                shipment == 'fedex' ? '#E2E2E2' : '#fff',
              ]}
              style={[
                Styles.detailGradientButton,
                {display: 'flex', alignItems: 'center'},
              ]}>
              <Image
                source={require('../../assets/images/fedex.png')}
                style={[
                  {
                    height: 35,
                    marginHorizontal: 'auto',
                    maxWidth: 55,
                    resizeMode: 'contain',
                  },
                ]}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.detailButton}
            onPress={() => setShipment('limited')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                shipment == 'limited' ? '#E2E2E2' : '#fff',
                shipment == 'limited' ? '#E2E2E2' : '#fff',
              ]}
              style={[
                Styles.detailGradientButton,
                {display: 'flex', alignItems: 'center'},
              ]}>
              <Image
                source={require('../../assets/images/United-States-P.png')}
                style={[
                  {
                    height: 35,
                    marginHorizontal: 'auto',
                    maxWidth: 85,
                    resizeMode: 'contain',
                  },
                ]}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.detailButton}
            onPress={() => setShipment('ups')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                shipment == 'ups' ? '#E2E2E2' : '#fff',
                shipment == 'ups' ? '#E2E2E2' : '#fff',
              ]}
              style={[
                Styles.detailGradientButton,
                {display: 'flex', alignItems: 'center'},
              ]}>
              <Image
                source={require('../../assets/images/640px-United_Pa.png')}
                style={[
                  {
                    height: 35,
                    marginHorizontal: 'auto',
                    maxWidth: 55,
                    resizeMode: 'contain',
                  },
                ]}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingVertical: 20}}>
        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          name
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            // onChangeText={onChangeText}
            placeholder="Enter your name"
            placeholderTextColor="#9697A0"
            multiline={true}
            numberOfLines={1}
            style={[Styles.regularField]}
          />
        </View>

        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          House Number & Street Name
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            // onChangeText={onChangeText}
            placeholder="Enter your house number & street name"
            placeholderTextColor="#9697A0"
            multiline={true}
            style={[Styles.regularField]}
          />
        </View>

        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          Apartment, Suite
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            // onChangeText={onChangeText}
            placeholder="Enter your apartment or suite"
            placeholderTextColor="#9697A0"
            multiline={true}
            numberOfLines={1}
            style={[Styles.regularField]}
          />
        </View>

        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          Town/City
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            // onChangeText={onChangeText}
            placeholder="Enter your town or city"
            placeholderTextColor="#9697A0"
            multiline={true}
            numberOfLines={1}
            style={[Styles.regularField]}
          />
        </View>

        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          ZIP Code
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            placeholder="Enter your ZIP code"
            placeholderTextColor="#9697A0"
            multiline={true}
            numberOfLines={1}
            style={[Styles.regularField]}
          />
        </View>

        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          Phone Number
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#9697A0"
            multiline={true}
            numberOfLines={1}
            style={[Styles.regularField]}
          />
        </View>

        <Text
          style={[
            Styles.detailTitle,
            {fontSize: 16, paddingVertical: 5, paddingBottom: 0},
          ]}>
          Email Address
        </Text>
        <View style={Styles.detailList}>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor="#9697A0"
            multiline={true}
            numberOfLines={1}
            style={[Styles.regularField]}
          />
        </View>

        <View style={{maxWidth: '95%', display: 'flex', flexDirection: 'row'}}>
          <BouncyCheckbox
            size={22}
            fillColor="#151515"
            unfillColor="#FFF"
            iconStyle={{borderColor: '#070707'}}
            textStyle={{fontFamily: 'MontserratAlternates-Regular'}}
          />
          <Text style={[Styles.detailTitle, {fontSize: 14}]}>
            Create an account
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 13,
            borderRadius: 8,
            borderColor: '#070707',
            borderWidth: 1,
            marginVertical: 20,
          }}>
          <View style={{paddingVertical: 13}}>
            <Text
              style={[Styles.primaryText, {fontSize: 16, textAlign: 'left'}]}>
              Order summary
            </Text>
            <View
              style={{
                display: 'flex',
                paddingVertical: 3,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  Styles.cartText,
                  {fontSize: 14, width: '30%', color: '#070707'},
                ]}>
                Price
              </Text>
              <Text
                style={{
                  color: '#070707',
                  textAlign: 'left',
                  width: '60%',
                  fontSize: 16,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                $310.00
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                paddingVertical: 3,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  Styles.cartText,
                  {fontSize: 14, width: '30%', color: '#070707'},
                ]}>
                Shipping
              </Text>
              <Text
                style={{
                  color: '#070707',
                  textAlign: 'left',
                  width: '60%',
                  fontSize: 16,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Free
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                paddingVertical: 3,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  Styles.cartText,
                  {fontSize: 14, width: '30%', color: '#070707'},
                ]}>
                Tax
              </Text>
              <Text
                style={{
                  color: '#070707',
                  fontSize: 16,
                  textAlign: 'left',
                  width: '60%',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                0.5%
              </Text>
            </View>

            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#AAAAAA', '#AAAAAA']}
              style={{
                display: 'flex',
                padding: 0.5,
                width: '90%',
                marginTop: 16,
                marginBottom: 10,
                borderRadius: 5,
              }}></LinearGradient>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 20,
            }}>
            <View
              style={[
                Styles.productDetailsImage,
                {width: '50%', position: 'relative'},
              ]}>
              <View style={[Styles.buyDetailContentCard, {height: 190}]}>
                <Image
                  source={require('../../assets/images/iphone13proImage.png')}
                  style={[Styles.productCardIndividualImage, {height: '100%'}]}
                />
              </View>
            </View>
            <View
              style={{
                width: '50%',
                paddingLeft: 10,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text
                style={[Styles.primaryText, {fontSize: 14, textAlign: 'left'}]}>
                IPHONE 13 PRO MAX
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    Styles.productColor,
                    {backgroundColor: '#91B2C6', width: 30, height: 30},
                  ]}
                />
                <Text
                  style={[
                    Styles.detailTitle,
                    {fontSize: 14, paddingVertical: 5},
                  ]}>
                  Blue
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    Styles.detailTitle,
                    {fontSize: 14, minWidth: 42, paddingVertical: 5},
                  ]}>
                  X1
                </Text>
                <Text
                  style={[
                    Styles.detailTitle,
                    {fontSize: 14, paddingVertical: 5},
                  ]}>
                  $310.00
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={gotoConfirmation}
            style={[
              Styles.mainButton,
              {width: '100%', marginVertical: 40, paddingVertical: 13},
            ]}>
            <Text style={Styles.mainButtonText}>Proceed To Confirmation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bodyTheme: {
    backgroundColor: '#070707',
    height: '100%',
    paddingHorizontal: 15,
    fontFamily: 'Montserrat-Black',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Checkout;
