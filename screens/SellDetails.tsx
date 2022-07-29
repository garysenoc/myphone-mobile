import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';




type Nav = {
  navigate: (value: string) => void;
}

const SellDetails =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };

  const [condition, setCondition] = useState('');
  const [carrier, setCarrier] = useState('');
  const [storage, setStorage] = useState('');
  const [phoneStatus, setPhoneStatus] = useState('');
  const [cracksBack, setCracksBack] = useState('');
  const [cracksFront, setCracksFront] = useState('');
  const [icloudOff, setIcloudOff] = useState('');

  const [testDevice, setTestDevice] = useState('');
  const [fullyOperational, setFullyOperational] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>

            <View style={Styles.productDetailsImage}>
                <View style={[Styles.productDetailCard]}>
                  <View style={Styles.productCardIndividual}>
                      <View style={Styles.productDetailContentCard}>
                        <Image source={require("../assets/images/iphone13proImage.png")} style={[Styles.productCardIndividualImage]}/>
                      </View>
                  </View>
                </View>
            </View>
            {/* <Text style={[Styles.detailTitle, ]}>YOUR DEVICE'S VALUE</Text> */}
            <Text style={[Styles.primaryText, {fontSize:19,textAlign:'center'}]}>
              YOUR DEVICE'S VALUE
            </Text>
            <Text style={[Styles.primaryText, {fontSize:19,textAlign:'center'}]}>
              $1,020.00
            </Text>
            
            <View style={{marginTop:20}}>
              <Text style={[Styles.primaryText, {fontSize:19,}]}>
                iPhone 13 Pro Max
              </Text>
              <Text style={Styles.detailTitle}>Condition</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('BRAND NEW')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'BRAND NEW' ? '#45091A' : '#121825' , condition == 'BRAND NEW' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'BRAND NEW' ? '#fff' : '#fff'}]}>BRAND NEW</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('EXCELLENT')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'EXCELLENT' ? '#45091A' : '#121825' , condition == 'EXCELLENT' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'EXCELLENT' ? '#fff' : '#fff'}]}>EXCELLENT</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('Good')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'Good' ? '#45091A' : '#121825' , condition == 'Good' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'Good' ? '#fff' : '#fff'}]}>Good</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('Fair')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'Fair' ? '#45091A' : '#121825' , condition == 'Fair' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'Fair' ? '#fff' : '#fff'}]}>Fair</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('Dead')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'Dead' ? '#45091A' : '#121825' , condition == 'Dead' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'Dead' ? '#fff' : '#fff'}]}>Dead</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>Carrier</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton}  onPress={()=>setCarrier('UNLOCKED')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'UNLOCKED' ? '#45091A' : '#121825' , carrier == 'UNLOCKED' ? '#121825' : '#4D4D4D']}  
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: carrier == 'UNLOCKED' ? '#fff' : '#fff'}]}>UNLOCKED</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('LOCKED')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'LOCKED' ? '#45091A' : '#121825' , carrier == 'LOCKED' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: carrier == 'LOCKED' ? '#fff' : '#fff'}]}>LOCKED</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>Storage</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('128GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '128GB' ? '#45091A' : '#121825' , storage == '128GB' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '128GB' ? '#fff' : '#fff'}]}>128GB</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('256GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '256GB' ? '#45091A' : '#121825' , storage == '256GB' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '256GB' ? '#fff' : '#fff'}]}>256GB</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('512GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '512GB' ? '#45091A' : '#121825' , storage == '512GB' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '512GB' ? '#fff' : '#fff'}]}>512GB</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('1TB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '1TB' ? '#45091A' : '#121825' , storage == '1TB' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '1TB' ? '#fff' : '#fff'}]}>1TB</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>Phone Status</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPhoneStatus('NO LOCKS')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[phoneStatus == 'NO LOCKS' ? '#45091A' : '#121825' , phoneStatus == 'NO LOCKS' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: phoneStatus == 'NO LOCKS' ? '#fff' : '#fff'}]}>NO LOCKS</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPhoneStatus('FINANCED')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[phoneStatus == 'FINANCED' ? '#45091A' : '#121825' , phoneStatus == 'FINANCED' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: phoneStatus == 'FINANCED' ? '#fff' : '#fff'}]}>FINANCED</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPhoneStatus('BLACKLISTED/BLOCKED')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[phoneStatus == 'BLACKLISTED/BLOCKED' ? '#45091A' : '#121825' , phoneStatus == 'BLACKLISTED/BLOCKED' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: phoneStatus == 'BLACKLISTED/BLOCKED' ? '#fff' : '#fff'}]}>BLACKLISTED/BLOCKED</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setPhoneStatus('ACTIVATION LOCKED')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[phoneStatus == 'ACTIVATION LOCKED' ? '#45091A' : '#121825' , phoneStatus == 'ACTIVATION LOCKED' ? '#121825' : '#4D4D4D']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: phoneStatus == 'ACTIVATION LOCKED' ? '#fff' : '#fff'}]}>ACTIVATION LOCKED</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>ARE THERE ANY CRACKS/CHIPS ON THE BACK?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCracksBack('YES')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[cracksBack == 'YES' ? '#45091A' : '#121825' , cracksBack == 'YES' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: cracksBack == 'YES' ? '#fff' : '#fff'}]}>YES</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCracksBack('NO')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[cracksBack == 'NO' ? '#45091A' : '#121825' , cracksBack == 'NO' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: cracksBack == 'NO' ? '#fff' : '#fff'}]}>NO</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>ANY CRACKS/CHIPS ON FRONT SCREEN?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCracksFront('YES')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[cracksFront == 'YES' ? '#45091A' : '#121825' , cracksFront == 'YES' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: cracksFront == 'YES' ? '#fff' : '#fff'}]}>YES</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCracksFront('NO')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[cracksFront == 'NO' ? '#45091A' : '#121825' , cracksFront == 'NO' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: cracksFront == 'NO' ? '#fff' : '#fff'}]}>NO</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>IS YOUR ICLOUD TURNED OFF?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setIcloudOff('YES')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[icloudOff == 'YES' ? '#45091A' : '#121825' , icloudOff == 'YES' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: icloudOff == 'YES' ? '#fff' : '#fff'}]}>YES</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setIcloudOff('NO')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[icloudOff == 'NO' ? '#45091A' : '#121825' , icloudOff == 'NO' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: icloudOff == 'NO' ? '#fff' : '#fff'}]}>NO</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>DO YOU WANT TO TEST YOUR DEVICE FROM HOME TO ENSURE IT'S FULLY FUNCTIONAL?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setTestDevice('YES')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[testDevice == 'YES' ? '#45091A' : '#121825' , testDevice == 'YES' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: testDevice == 'YES' ? '#fff' : '#fff'}]}>
                        YES, I WANT TO TEST MY DEVICE THROUGH THE MOBILE APP "SELL MY PHONE"
                      </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setTestDevice('NO')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[testDevice == 'NO' ? '#45091A' : '#121825' , testDevice == 'NO' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: testDevice == 'NO' ? '#fff' : '#fff'}]}>
                        NO, I DO NOT WANT TO TEST MY DEVICE
                      </Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>IS THE DEVICE FULLY OPERATIONAL/ FUNCTIONAL?</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setFullyOperational('YES')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[fullyOperational == 'YES' ? '#45091A' : '#121825' , fullyOperational == 'YES' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: fullyOperational == 'YES' ? '#fff' : '#fff'}]}>
                        YES- SWITCHES ON AND OFF AND FUNCTIONS 100% AS INTENDED
                      </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setFullyOperational('NO')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[fullyOperational == 'NO' ? '#45091A' : '#121825' , fullyOperational == 'NO' ? '#121825' : '#4D4D4D']}
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: fullyOperational == 'NO' ? '#fff' : '#fff'}]}>
                        NO, IT'S NOT FULLY FUNCTIONAL
                      </Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>NOTES/COMMENTS</Text>
              <View style={Styles.detailList}>

                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Your Message...'
                        placeholderTextColor="#070707" 
                        multiline = {true}
                        numberOfLines = {10}
                        style={[Styles.messageField]}
                    />

              </View>
            </View>
            <View style={{display:'flex', justifyContent: 'center',width:'100%',marginTop:40,marginBottom:80, alignItems:'center'}}>
              <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Cart')}
                    style={[Styles.mainButton,{width:150, marginTop:30,} ]}
                  >
                    <Text style={Styles.mainButtonText}>Checkout</Text>
              </TouchableOpacity>
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



  export default SellDetails;