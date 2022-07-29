import React,{useState, useEffect} from 'react'
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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';




type Nav = {
  navigate: (value: string) => void;
}

const MyCommission =() =>{

  

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


    const [tab, setTab] = useState([true,false]);

    useEffect(() => {
      setTab([true,false]);
    }, [])

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            
            <View>
              <Text style={[Styles.primaryText,{fontSize:18, marginTop:15}]}>My Commission</Text>
              <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                The commission You Earn From Your Referral Are Displayed Here
              </Text>
            </View>
            <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:15}]}>Referral Commission</Text>
            <View style={{display:'flex', justifyContent:'center', width:'100%', alignItems:'center'}}>
              <View style={{display:'flex',marginVertical:5, justifyContent:'space-between',flexDirection:'row',flexWrap:'wrap', width:'93%'}}>
                <View style={{backgroundColor:'#FEF5F5',width:'48%', borderRadius:10,height:110, padding:3, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14, paddingVertical:5}]}>Total commission</Text>
                  <Text style={[Styles.detailTitle,{fontSize:34,color:'#D42828',fontFamily:'Montserrat-SemiBold', paddingVertical:5}]}>$0.00</Text>
                </View>
                <View style={{backgroundColor:'#FEF5F5',width:'48%', borderRadius:10,height:110, padding:3, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14, paddingVertical:5}]}>Available commission</Text>
                  <Text style={[Styles.detailTitle,{fontSize:34,color:'#D42828',fontFamily:'Montserrat-SemiBold', paddingVertical:5}]}>$0.00</Text>
                </View>
                <View style={{backgroundColor:'#FEF5F5',width:'48%', borderRadius:10,height:110, padding:3, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14, paddingVertical:5}]}>Pending commission</Text>
                  <Text style={[Styles.detailTitle,{fontSize:34,color:'#D42828',fontFamily:'Montserrat-SemiBold', paddingVertical:5}]}>$0.00</Text>
                </View>
                <View style={{backgroundColor:'#FEF5F5',width:'48%', borderRadius:10,height:110, padding:3, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14, paddingVertical:5}]}>Used commission</Text>
                  <Text style={[Styles.detailTitle,{fontSize:34,color:'#D42828',fontFamily:'Montserrat-SemiBold', paddingVertical:5}]}>$0.00</Text>
                </View>
              </View>
            </View>

            <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:15}]}>Commission Composition</Text>
            <View style={{display:'flex', justifyContent:'center', width:'100%', alignItems:'center'}}>
              <View style={{display:'flex',marginVertical:5, justifyContent:'space-between',flexDirection:'row',flexWrap:'wrap', width:'93%'}}>
                <View style={{backgroundColor:'#FEF5F5',width:'48%', borderRadius:10,height:110, padding:3, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14, paddingVertical:5}]}>Individual Invite Center</Text>
                  <Text style={[Styles.detailTitle,{fontSize:34,color:'#D42828',fontFamily:'Montserrat-SemiBold', paddingVertical:5}]}>$0.00</Text>
                </View>
                <View style={{backgroundColor:'#FEF5F5',width:'48%', borderRadius:10,height:110, padding:3, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14, paddingVertical:5}]}>Brand Ambassador</Text>
                  <Text style={[Styles.detailTitle,{fontSize:34,color:'#D42828',fontFamily:'Montserrat-SemiBold', paddingVertical:5}]}>$0.00</Text>
                </View>
              </View>
            </View>

            <View style={{backgroundColor:'#FEF5F5',width:'100%', borderRadius:10,minHeight:80, padding:8, marginBottom:8,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  <Text style={[Styles.detailTitle,{fontSize:14,width:'100%', textAlign:'left', paddingVertical:5}]}>
                    Invite 2 friends to complete their orders on myphone, 
                    then you can become a brand ambassador!
                  </Text>
                  <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>navigation.navigate('Register')}
                      style={[Styles.mainButton,{width:130, marginTop:20, paddingVertical:10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'} ]}
                    >
                      <Text style={[Styles.mainButtonText,{marginLeft:5}]}>Invite Now</Text>
                  </TouchableOpacity>
                 
            </View>

            <View>
              <Text style={[Styles.primaryText,{fontSize:18, marginTop:15}]}>My Coupon</Text>
              <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                Check Your Coupon And Use Them As Soon As Possible.
              </Text>
            </View>

            <View style={{marginBottom:10, display:'flex', justifyContent:'center',flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity onPress={()=>setTab([true,false])}>
                <Text style={[Styles.genText,{fontWeight:tab[0]==true?'700':'600',marginHorizontal:10,color:tab[0]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[0]==true?2:0,  borderBottomColor:'#3681B8' }]}>
                  Coupon Available
                </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>setTab([false,true])}>
                <Text style={[Styles.genText,{fontWeight:tab[1]==true?'700':'600',marginHorizontal:10, color:tab[1]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[1]==true?2:0,  borderBottomColor:'#3681B8' }]}>
                  Coupon Unavailable
                </Text>
              </TouchableOpacity>
              
            </View>
            <View style={{display:'flex',marginBottom:20, alignItems:'center',flexDirection:'column', justifyContent:'center', width:'100%'}}>
              <Image source={require('../assets/images/coupon.png')} style={[ {width:'90%',height:150, resizeMode: 'contain'}]}/>
              <Text style={[Styles.primaryText,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                Oops, you have no available Coupon
              </Text>
              <Text style={[Styles.primaryText,{fontSize:16,paddingVertical:0,textAlign:'center', marginBottom:20}]}>
                All your Available coupon will be displayed here.
              </Text>
            </View>

            <View style={{height:.5, backgroundColor:'#070707', width:'100%'}} />
            
            
            <View style={{marginTop:30,}}>

              <Text style={[Styles.primaryText,{fontSize:18,paddingVertical:0, marginBottom:20}]}>
                  Individual Invite Center
              </Text>
              <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                Your Referrar Method:
              </Text>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0,}]}>Share Your Invitation Code</Text>
              <View style={[Styles.detailList, {display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}]}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your first name'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey', width:'65%'}]}

                        value='m2256922'
                    />

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[Styles.mainButton,{width:90, marginTop:20, paddingVertical:5, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'} ]}
                  >
                    <Ionicons name="ios-copy-outline" size={16} color="#fff" />
                    <Text style={[Styles.mainButtonText,{marginLeft:5}]}>copy</Text>
                </TouchableOpacity>
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0}]}>Share Your Referral Link</Text>
              <View style={[Styles.detailList, {display:'flex', flexDirection:'row',marginBottom:200, justifyContent:'space-between', alignItems:'center'}]}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your first name'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey', width:'65%'}]}

                        value='https://buymyphones.com'
                    />

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[Styles.mainButton,{width:90, marginTop:20, paddingVertical:5, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'} ]}
                  >
                    <Ionicons name="ios-copy-outline" size={16} color="#fff" />
                    <Text style={[Styles.mainButtonText,{marginLeft:5}]}>copy</Text>
                </TouchableOpacity>
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



  export default MyCommission;