import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from '../components/Header';




type Nav = {
  navigate: (value: string) => void;
}

const RepairDetails =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };

  const [carrier, setCarrier] = useState('');
  const [condition, setCondition] = useState('');
  const [storage, setStorage] = useState('');


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


            <View style={[Styles.productDetailsImage,{ height:150, marginTop:20}]}>
                      <View style={Styles.buyDetailContentCard}>
                        <Image source={require("../assets/images/iphone13proImage.png")} style={[Styles.productCardIndividualImage,{height:'40%',}]}/>
                      </View>
            </View>

            <View style={{marginTop:10, marginBottom:20}}>
              <Text style={[Styles.primaryText,{fontSize:18, textAlign:'center'}]}>IPHONE 13 PRO MAX</Text>
            </View>
            
            <View>
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

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Phone Number</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your phone number'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Email</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your email'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16,}]}>Tell us about your mobile problem</Text>
              <View style={Styles.detailList}>

                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter mobile problem...'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {10}
                        style={[Styles.regularField,{textAlignVertical:'top', borderWidth:.6, borderColor:'grey', paddingHorizontal:10, paddingVertical:10}]}
                    />

              </View>

              <View style={{ maxWidth:'95%', display:'flex', flexDirection:'row'}}>
                <BouncyCheckbox
                  size={22}
                  fillColor="#070707"
                  unfillColor="#fff"
                  iconStyle={{ borderColor: "#70707" }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular" }}

                />
                <Text style={[Styles.detailTitle,{fontSize:14,}]}>Yes, email me coupons and special offers from CPR Cell Phone Repair. *</Text>
              </View>

              <View style={{ maxWidth:'90%', display:'flex', flexDirection:'row'}}>
                <BouncyCheckbox
                  size={22}
                  fillColor="#070707"
                  unfillColor="#fff"
                  iconStyle={{ borderColor: "#70707" }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular" }}

                />
                <Text style={[Styles.detailTitle,{fontSize:14,}]}>Yes, text me coupons and special offers from CPR Cell Phone Repair. *</Text>
              </View>
            <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
              <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('RepairEstimate')}
                    style={[Styles.mainButton,{width:'100%', marginTop:20, paddingVertical:15} ]}
                  >
                    <Text style={Styles.mainButtonText}>Get Free Estimate</Text>
                </TouchableOpacity>
            </View>
              

              <Text style={[Styles.detailTitle,{fontSize:14, color:'#807D77'}]}>
                * By Submitting this estimate form I understand I may receive an email, text or phone call regarding my repair estimate. You can unsubscribe at any time.
              </Text>


            </View>
            <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between',marginBottom:200}}>
              <View style={Styles.boxCard}>
                <View style={Styles.boxImage}>
                  <Image source={require("../assets/images/rep1.png")} style={{width:30, height:30,}} />
                </View>
                  
                  
                  <Text style={[Styles.detailTitle,{fontSize:14, color:'#2D81B8',paddingVertical:10, fontFamily:'Montserrat-SemiBold'}]}>
                    Lifetime Warranty
                  </Text>
                  <Text style={[Styles.detailTitle,{fontSize:10,paddingVertical:0, color:'#7B7B7F'}]}>
                    Replacement parts and workmanship are covered under our warranty policy.
                  </Text>
              </View>

              <View style={Styles.boxCard}>
                <View style={Styles.boxImage}>
                  <Image source={require("../assets/images/rep2.png")} style={{width:25, height:25,}} />
                </View>
                  
                  <Text style={[Styles.detailTitle,{fontSize:14, color:'#2D81B8',paddingVertical:10, fontFamily:'Montserrat-SemiBold'}]}>
                    Same Day Repairs
                  </Text>
                  <Text style={[Styles.detailTitle,{fontSize:10,paddingVertical:0,color:'#7B7B7F'}]}>
                    We offer same day repair solutions for a wide variety of common issues.
                  </Text>
              </View>

              <View style={Styles.boxCard}>
                <View style={Styles.boxImage}>
                  <Image source={require("../assets/images/rep3.png")} style={{width:25, height:25,}} />
                </View>
                  
                  <Text style={[Styles.detailTitle,{fontSize:14, color:'#2D81B8',paddingVertical:10, fontFamily:'Montserrat-SemiBold'}]}>
                    Expert Technicians
                  </Text>
                  <Text style={[Styles.detailTitle,{fontSize:10,paddingVertical:0, color:'#7B7B7F'}]}>
                    Our expert technicians have completed extensive technical training.
                  </Text>
              </View>

              <View style={Styles.boxCard}>
                <View style={Styles.boxImage}>
                  <Image source={require("../assets/images/rep4.png")} style={{width:25, height:25,}} />
                </View>
                  
                  <Text style={[Styles.detailTitle,{fontSize:14, color:'#2D81B8',paddingVertical:10, fontFamily:'Montserrat-SemiBold'}]}>
                    1M+ Devices
                  </Text>
                  <Text style={[Styles.detailTitle,{fontSize:10,paddingVertical:0, color:'#7B7B7F'}]}>
                    From phones and tablets to drones and more; you name– we’ve fixed it!
                  </Text>
              </View>
              </View>
            <Footer/>
        </View>
              

      </ScrollView>
      
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



  export default RepairDetails;