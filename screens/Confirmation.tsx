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
import {Styles, colors} from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Header from '../components/Header';

type Nav = {
  navigate: (value: string) => void;
};

const Confirmation = () => {
  const navigation = useNavigation<Nav>();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#070707',
  };

  const [payment, setPayment] = useState('');
  const [shipment, setShipment] = useState('');

  const Image1 = require('../assets/images/iphone13gold.png');
  const Image2 = require('../assets/images/iphone13pro.png');
  const Image3 = require('../assets/images/iphone13.png');
  const Image4 = require('../assets/images/iphone13mini.png');

  const products = [
    {image: Image1, name: 'iPhone 13 Pro Max'},
    {image: Image2, name: 'iPhone 13 Pro'},
    {image: Image3, name: 'iPhone 13'},
    {image: Image4, name: 'iPhone 13 Mini'},
  ];

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#fff"
        barStyle={isDarkMode ? 'dark-content' : 'dark-content'}
      />
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[Styles.bodyTheme]}>
        <View style={Styles.main}>
          <View>
            <Text style={Styles.screenTitle}>Confirmation</Text>
          </View>

          <View style={{paddingVertical: 20}}>
            <View style={Styles.detailList}>
              <View
                style={{
                  backgroundColor: '#E7E7E9',
                  marginBottom: 10,
                  width: '100%',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text style={[Styles.detailTitle, {paddingVertical: 5}]}>
                  Hishamhosam20@gmail.com
                </Text>
                <Text
                  style={[
                    Styles.detailTitle,
                    {fontSize: 12, paddingVertical: 5},
                  ]}>
                  All email about your order we'll be sent here.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: '#E7E7E9',
                  marginBottom: 10,
                  width: '100%',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text style={[Styles.detailTitle, {paddingVertical: 5}]}>
                  Payment Details: Cash Card
                </Text>
                <Text
                  style={[
                    Styles.detailTitle,
                    {fontSize: 12, paddingVertical: 5},
                  ]}>
                  Hishamhosam20@gmail.com
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Checkout')}
                  style={[
                    {
                      width: '100%',
                      marginVertical: 10,
                      paddingVertical: 0,
                      display: 'flex',
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={{color: '#2D81B8'}}>Change</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: '#E7E7E9',
                  marginBottom: 10,
                  width: '100%',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text style={[Styles.detailTitle, {paddingVertical: 5}]}>
                  Payment Details: Cash Card
                </Text>
                <Text style={[Styles.detailTitle, {paddingVertical: 5}]}>
                  Hishamhosam
                </Text>
                <Text style={[Styles.detailTitle, {paddingVertical: 5}]}>
                  Gaza Strip
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Checkout')}
                  style={[
                    {
                      width: '100%',
                      marginVertical: 10,
                      paddingVertical: 0,
                      display: 'flex',
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={{color: '#070707'}}>Change</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: '#E7E7E9',
                  marginBottom: 10,
                  width: '100%',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[Styles.cartText, {fontSize: 16, color: '#070707'}]}>
                    Item Total:
                  </Text>
                  <Text
                    style={{
                      color: '#070707',
                      fontSize: 20,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    310.00$
                  </Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[Styles.cartText, {fontSize: 16, color: '#070707'}]}>
                    Shipping:
                  </Text>
                  <Text
                    style={{
                      color: '#070707',
                      fontSize: 20,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    0.5%
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{maxWidth: '95%', display: 'flex', flexDirection: 'row'}}>
              <BouncyCheckbox
                size={22}
                fillColor="#070707"
                unfillColor="#fff"
                iconStyle={{borderColor: '#070707'}}
                textStyle={{fontFamily: 'MontserratAlternates-Regular'}}
              />
              <Text style={[Styles.detailTitle, {fontSize: 14}]}>
                Terms and Policy
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                Styles.mainButton,
                {width: 150, marginTop: 20, paddingVertical: 10},
              ]}>
              <Text style={Styles.mainButtonText}>Submit Order</Text>
            </TouchableOpacity>

            <View>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#595959', '#595959']}
                style={{
                  display: 'flex',
                  padding: 0.5,
                  marginTop: 16,
                  borderRadius: 5,
                }}></LinearGradient>
            </View>

            <View style={{width: '100%'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Checkout')}
                style={[
                  {
                    width: '100%',
                    marginTop: 20,
                    paddingVertical: 0,
                    display: 'flex',
                    flexDirection: 'row',
                  },
                ]}>
                <Text style={{color: '#2D81B8'}}>Back To Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
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

export default Confirmation;
