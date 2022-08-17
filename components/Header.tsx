import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import {useNavigation} from '@react-navigation/native';
import {Styles} from '../styles/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Nav = {
  navigate: (value: string) => void;
};

const Header = () => {
  const navigation = useNavigation<Nav>();

  const [menu, setMenu] = useState(false);

  return (
    <>
      <View style={s.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setMenu(true)}
          style={{
            zIndex: 100,
            width: 40,
            alignItems: 'center',
            marginLeft: 10,
            height: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#070707',
              width: 23,
              height: 2,
              marginBottom: 7,
              borderRadius: 5,
            }}
          />
          <View
            style={{
              backgroundColor: '#070707',
              width: 23,
              height: 2,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/images/headerLogo.png')}
            style={[s.logo, {resizeMode: 'contain'}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Cart')}
          style={{
            width: 40,
            alignItems: 'center',
            marginLeft: 0,
            paddingRight: 15,
          }}>
          <Feather name="shopping-cart" size={23} color="#070707" />
        </TouchableOpacity>
      </View>

      <View
        style={[
          {
            width: 250,
            backgroundColor: '#F6F9FA',
            elevation: 10,
            display: menu == false ? 'none' : 'flex',
            paddingTop: 20,
            paddingLeft: 20,
            flexDirection: 'column',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            zIndex: 100,
          },
        ]}>
        <SafeAreaView>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setMenu(false)}>
            <AntDesign name="close" size={25} color="#070707" />
          </TouchableOpacity>
        </SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Home'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Octicons name="home" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Sell'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="store-plus-outline"
              size={20}
              color="#070707"
            />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Sell Smart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Buy'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="cart-plus" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>Buy Smart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Repair'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="auto-fix" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Repair Smart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('CheckLanding'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Octicons name="codescan-checkmark" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Test Device
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Orders'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Octicons name="checklist" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('MyCommission'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="dollar" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 17}]}>
              My Commission
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('MyCommission'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Feather name="external-link" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Refer Friends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('BrandAmbassador'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="human-male-board-poll"
              size={20}
              color="#070707"
            />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Brand Ambassador
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('CustomerService'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign name="customerservice" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Customer Service
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('MyProfile'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={20}
              color="#070707"
            />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              My Profile
            </Text>
          </TouchableOpacity>
          {/* <View style={{flexGrow:1}} /> */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Login'), setMenu(false);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#F8F8F8',
              borderWidth: 1,
              paddingHorizontal: 10,
              width: '90%',
              paddingVertical: 2,
              marginTop: 30,
            }}>
            <AntDesign name="login" size={20} color="#070707" />
            <Text style={[Styles.headerLink, {marginLeft: 10}]}>
              Login Account
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>{navigation.navigate('MyProfile'),setMenu(false)}}
                    style={{display:'flex', flexDirection:'row', alignItems: 'center', borderRadius:5, backgroundColor:'#F8F8F8',
                    borderWidth:1, paddingHorizontal:10, width:'90%', paddingVertical:2, marginTop:30}}
                >
                    <SimpleLineIcons name="logout" size={20} color="#070707" />
                    <Text style={[Styles.headerLink, {marginLeft:10}]}>Logout Account</Text>
            </TouchableOpacity> */}

          <Image
            source={require('../assets/images/headerLogo.png')}
            style={[s.logo, {width: 200, marginTop: 50, resizeMode: 'contain'}]}
          />
        </ScrollView>
      </View>
    </>
  );
};

const s = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  logo: {
    height: 60,
    width: 70,
  },
});

export default Header;
