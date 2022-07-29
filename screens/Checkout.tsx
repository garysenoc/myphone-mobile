import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Header from '../components/Header';




type Nav = {
  navigate: (value: string) => void;
}

const Checkout =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };

  const [payment, setPayment] = useState('');
  const [shipment, setShipment] = useState('');


    const Image1  = require("../assets/images/iphone13gold.png");
    const Image2  = require("../assets/images/iphone13pro.png");
    const Image3  = require("../assets/images/iphone13.png");
    const Image4  = require("../assets/images/iphone13mini.png");


    const products = [
      {'image':Image1,'name':'iPhone 13 Pro Max'},
      {'image':Image2,'name':'iPhone 13 Pro'},
      {'image':Image3,'name':'iPhone 13'},
      {'image':Image4,'name':'iPhone 13 Mini'},
      

    ];

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            <View>
              <Text style={Styles.screenTitle}>Checkout</Text>
            </View>

            <View style={Styles.productDetailsImage}>
                      <View style={Styles.buyDetailContentCard}>
                        <Image source={require("../assets/images/iphone13proImage.png")} style={[Styles.productCardIndividualImage,{height:'90%',}]}/>
                      </View>
            </View>
            <View>
              <Text style={[Styles.detailTitle, {fontSize:14, paddingVertical:5}]}>Color</Text>
              <View style={Styles.detailList}>
                <View style={[Styles.productColor,{backgroundColor:'#91B2C6', width:30,height:30}]}>
                </View>
              </View>
            </View>

            <View style={{paddingVertical:20}}>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={[Styles.cartText,{fontSize:14, color:'#070707'}]}>
                    Subtotal: 
                  </Text>
                  <Text style={{color:'#070707', fontSize:18, fontFamily:'Montserrat-SemiBold'}}> 
                    310.00$
                  </Text>
                </View>

                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={[Styles.cartText,{fontSize:14, color:'#070707'}]}>
                    Shipping: 
                  </Text>
                  <Text style={{color:'#070707', fontSize:18, fontFamily:'Montserrat-SemiBold'}}> 
                    Free
                  </Text>
                </View>

                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={[Styles.cartText,{fontSize:14, color:'#070707'}]}>
                    Tax: 
                  </Text>
                  <Text style={{color:'#070707', fontSize:18, fontFamily:'Montserrat-SemiBold'}}> 
                    0.5%
                  </Text>
                </View>

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#595959', '#595959',]} 
                  style={{ display:'flex',padding:.5,marginTop:16,marginBottom:10, borderRadius:5}}>
                </LinearGradient>

                
                
            </View>
            
            <View>
              <Text style={Styles.detailTitle}>HOW WOULD YOU LIKE TO BE PAID?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPayment('paypal')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[payment == 'paypal' ? '#2C8CD4' : '#E2E2E2' , payment == 'paypal' ? '#fff' : '#E2E2E2']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/paypal.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPayment('visa')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[payment == 'visa' ? '#2C8CD4' : '#E2E2E2' , payment == 'visa' ? '#fff' : '#E2E2E2']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/visa.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPayment('maestro')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[payment == 'maestro' ? '#2C8CD4' : '#E2E2E2' , payment == 'maestro' ? '#fff' : '#E2E2E2']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/maestro.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>HOW WOULD YOU LIKE TO SHIP YOUR DEVICE?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setShipment('fedex')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[shipment == 'fedex' ? '#2C8CD4' : '#E2E2E2' , shipment == 'fedex' ? '#fff' : '#E2E2E2']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/fedex.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setShipment('limited')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[shipment == 'limited' ? '#2C8CD4' : '#E2E2E2' , shipment == 'limited' ? '#fff' : '#E2E2E2']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/limited.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setShipment('ups')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[shipment == 'ups' ? '#2C8CD4' : '#E2E2E2' , shipment == 'ups' ? '#fff' : '#E2E2E2']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/ups.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>


            <View style={{paddingVertical:20}}>
              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Name</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your name'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>House Number & Street Name</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your house number & street name'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Apartment, Suite</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your apartment or suite'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Town/City</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your town or city'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>ZIP Code</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        placeholder='Enter your ZIP code'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Phone Number</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        placeholder='Enter your phone number'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Email Address</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        placeholder='Enter your email address'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <View style={{ maxWidth:'95%', display:'flex', flexDirection:'row'}}>
                <BouncyCheckbox
                  size={22}
                  fillColor="#151515"
                  unfillColor="#FFF"
                  iconStyle={{ borderColor: "#070707" }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular" }}

                />
                <Text style={[Styles.detailTitle,{fontSize:14,}]}>Create an account</Text>
              </View>


              <TouchableOpacity
                  activeOpacity={.7}
                  onPress={()=>navigation.navigate('Confirmation')}
                  style={[Styles.mainButton,{width:150, marginTop:20, paddingVertical:10} ]}
                >
                   <Text style={Styles.mainButtonText}>Checkout</Text>
              </TouchableOpacity>

              <View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#595959', '#595959',]} 
                style={{ display:'flex',padding:.2,marginTop:16, borderRadius:5}}>
                </LinearGradient>
              </View>

              <View style={{width:'100%'}}>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Cart')}
                    style={[{width:'100%', marginTop:20, paddingVertical:0, display:'flex', flexDirection:'row'} ]}
                  >
                    <Text style={{color:'#2D81B8',}}>Back To Cart</Text>
                </TouchableOpacity>
              </View>


            </View>

            

            

            
        </View>
              

      </ScrollView>
      <Footer/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    bodyTheme: {
      backgroundColor: '#070707',
      height:'100%',
      paddingHorizontal:15,
      fontFamily:'Montserrat-Black'
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