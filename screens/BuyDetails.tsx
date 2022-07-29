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

const BuyDetails =() =>{

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

            <View style={{marginTop:20}}>
              <Text style={[Styles.primaryText, {fontSize:18}]}>iPhone 13 Pro Max</Text>
            </View>

            <View>
              <Text style={Styles.detailTitle}>Carrier</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={[Styles.detailButton,]} onPress={()=>setCarrier('unlocked')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'unlocked' ? '#E0E0E0' : '#fff' , carrier == 'unlocked' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center', paddingHorizontal:0}]}>
                      <Image source={require("../assets/images/unlocked.png")} style={[{height:35,marginHorizontal:'auto', width: 80, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('128GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == '128GB' ? '#E0E0E0' : '#fff' , carrier == '128GB' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/metro.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('at&t')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'at&t' ? '#E0E0E0' : '#fff' , carrier == 'at&t' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/at&t.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('boost')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'boost' ? '#E0E0E0' : '#fff' , carrier == 'boost' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/boost.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('sprint')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'sprint' ? '#E0E0E0' : '#fff' , carrier == 'sprint' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/sprint.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('cricket')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'cricket' ? '#E0E0E0' : '#fff' , carrier == 'cricket' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/cricket.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('verizon')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'verizon' ? '#E0E0E0' : '#fff' , carrier == 'verizon' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/verizon.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCarrier('tmobile')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[carrier == 'tmobile' ? '#E0E0E0' : '#fff' , carrier == 'tmobile' ? '#E0E0E0' : '#fff']} 
                  style={[Styles.detailGradientButton,{display:'flex', alignItems:'center'}]}>
                      <Image source={require("../assets/images/tmobile.png")} style={[{height:35,marginHorizontal:'auto', maxWidth: 55, resizeMode:'contain'}]}/>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>Condition</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('BRAND NEW')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'BRAND NEW' ? '#232323' : '#F3F3F4' , condition == 'BRAND NEW' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'BRAND NEW' ? '#fff' : '#070707'}]}>BRAND NEW</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('refurbished')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'refurbished' ? '#232323' : '#F3F3F4' , condition == 'refurbished' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'refurbished' ? '#fff' : '#070707'}]}>refurbished</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('EXCELLENT')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'EXCELLENT' ? '#232323' : '#F3F3F4' , condition == 'EXCELLENT' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'EXCELLENT' ? '#fff' : '#070707'}]}>EXCELLENT</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('Good')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'Good' ? '#232323' : '#F3F3F4' , condition == 'Good' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'Good' ? '#fff' : '#070707'}]}>Good</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.detailButton} onPress={()=>setCondition('Fair')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[condition == 'Fair' ? '#232323' : '#F3F3F4' , condition == 'Fair' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: condition == 'Fair' ? '#fff' : '#070707'}]}>Fair</Text>
                  </LinearGradient>
                </TouchableOpacity>
                

              </View>
            </View>

            

            <View>
              <Text style={Styles.detailTitle}>Storage</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('128GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '128GB' ? '#232323' : '#F3F3F4' , storage == '128GB' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == 'BRAND NEW' ? '#fff' : '#070707'}]}>128GB</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('256GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '256GB' ? '#232323' : '#F3F3F4' , storage == '256GB' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '256GB' ? '#fff' : '#070707'}]}>256GB</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('512GB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '512GB' ? '#232323' : '#F3F3F4' , storage == '512GB' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '512GB' ? '#fff' : '#070707'}]}>512GB</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.detailButton} onPress={()=>setStorage('1TB')}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[storage == '1TB' ? '#232323' : '#F3F3F4' , storage == '1TB' ? '#232323' : '#F3F3F4']} 
                  style={Styles.detailGradientButton}>
                      <Text style={[Styles.detailButtonText,{color: storage == '1TB' ? '#fff' : '#070707'}]}>1TB</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>

            <View>
              <Text style={Styles.detailTitle}>Color</Text>
              <View style={Styles.detailList}>

                <TouchableOpacity style={[Styles.productColor,{backgroundColor:'#F3F3F4'}]}>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.productColor,{backgroundColor:'#807D77'}]}>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.productColor,{backgroundColor:'#FFE67E'}]}>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.productColor,{backgroundColor:'#91B2C6'}]}>
                </TouchableOpacity>


              </View>
            </View>

            <View style={Styles.productDetailsImage}>
                      <View style={Styles.buyDetailContentCard}>
                        <Image source={require("../assets/images/screen1.png")} style={[Styles.productCardIndividualImage,{height:'90%',}]}/>
                      </View>
            </View>

            

            <View style={{marginTop:50}}>
              <Text style={[Styles.primaryText,{fontSize:18}]}>Related Products</Text>
            </View>
            <View style={Styles.productCardList}>
              
              <TouchableOpacity style={[Styles.productType, {width:'20%'}]} onPress={()=>navigation.navigate('SellDetails')}>
                  <View style={Styles.productCardIndividual}>
                      <View style={Styles.productCardContent}>
                        <Image source={require('../assets/images/iphone11.png')} style={[Styles.productCardIndividualImage]}/>
                      </View>
                  </View>

                  <Text style={[Styles.productTitle, {fontSize:12,textAlign:'center', marginTop:-20}]}>iPhone 11</Text>
                  <Text style={[Styles.productTitle,{fontSize:12,paddingTop:5, color:'#807D77', textAlign:'center'}]}>400.00$</Text>

                </TouchableOpacity>
              
                <TouchableOpacity style={[Styles.productType, {width:'20%'}]} onPress={()=>navigation.navigate('SellDetails')}>
                  <View style={[Styles.productCardIndividual]}>
                      <View style={Styles.productCardContent}>
                        <Image source={require('../assets/images/iphone12promax1.png')} style={[Styles.productCardIndividualImage]}/>
                      </View>
                  </View>
                  <Text style={[Styles.productTitle, {fontSize:12,textAlign:'center', marginTop:-20}]}>iPhone 12 Pro Max</Text>
                  <Text style={[Styles.productTitle,{fontSize:12,paddingTop:5, color:'#807D77', textAlign:'center'}]}>400.00$</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Styles.productType, {width:'20%'}]} onPress={()=>navigation.navigate('SellDetails')}>
                  <View style={Styles.productCardIndividual}>
                      <View style={Styles.productCardContent}>
                        <Image source={require('../assets/images/iphonexs.png')} style={[Styles.productCardIndividualImage]}/>
                      </View>
                  </View>

                  <Text style={[Styles.productTitle, {fontSize:12,textAlign:'center', marginTop:-20}]}>iPhone XS</Text>
                  <Text style={[Styles.productTitle,{fontSize:12,paddingTop:5, color:'#807D77', textAlign:'center'}]}>400.00$</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Styles.productType, {width:'20%'}]} onPress={()=>navigation.navigate('SellDetails')}>
                  <View style={Styles.productCardIndividual}>
                      <View style={Styles.productCardContent}>
                        <Image source={require('../assets/images/iphone81.png')} style={[Styles.productCardIndividualImage]}/>
                      </View>
                  </View>
                  <Text style={[Styles.productTitle, {fontSize:12,textAlign:'center', marginTop:-20}]}>iPhone 8</Text>
                  <Text style={[Styles.productTitle,{fontSize:12,paddingTop:5, color:'#807D77', textAlign:'center'}]}>400.00$</Text>
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



  export default BuyDetails;