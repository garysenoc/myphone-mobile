import React,{useState,useEffect} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { DataTable } from 'react-native-paper';
import Header from '../components/Header';
import Checkout from '../components/Cart/Checkout';
import Confirmation from '../components/Cart/ConfirmationSection';


type Nav = {
  navigate: (value: string) => void;
}

const Cart =() =>{

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

    const [tab, setTab] = useState([true,false,false]);

    useEffect(() => {
      setTab([true,false,false]);
    }, [])
  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            <View style={{marginVertical:30, display:'flex', justifyContent:'center',flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity onPress={()=>setTab([true,false,false])}>
                <Text style={[Styles.genText,{fontWeight:tab[0]==true?'700':'600',marginHorizontal:10,color:tab[0]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[0]==true?2:0,  borderBottomColor:'#3681B8' }]}>cart</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>setTab([false,true,false])}>
                <Text style={[Styles.genText,{fontWeight:tab[1]==true?'700':'600',marginHorizontal:10, color:tab[1]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[1]==true?2:0,  borderBottomColor:'#3681B8' }]}>checkout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setTab([false,false,true])}>
                <Text style={[Styles.genText,{fontWeight:tab[2]==true?'700':'600',marginHorizontal:10, color:tab[2]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[2]==true?2:0,  borderBottomColor:'#3681B8' }]}>confirmation</Text>
              </TouchableOpacity>
              
            </View>
            
            {
             tab[0] == true && 
             <>
              <View style={{display:'flex', flexDirection:'row',marginBottom:8, justifyContent:'space-between',paddingBottom:8, borderBottomColor:'#070707', borderBottomWidth:.5, width:'100%'}}>
                <Text style={[Styles.genText,{fontWeight:'600', width:'40%', }]}>Product</Text>
                
                  <Text style={[Styles.genText,{fontWeight:'600',width:'20%',  }]}>Price</Text>
                  <Text style={[Styles.genText,{fontWeight:'600',width:'20%', }]}>Qty</Text>
                  <Text style={[Styles.genText,{fontWeight:'600',width:'20%', }]}>Total</Text>
                
              </View>
              <View style={{display:'flex', flexDirection:'row',marginBottom:15, justifyContent:'space-between',paddingBottom:8, width:'100%'}}>
                <Text style={[Styles.genText,{fontWeight:'600',fontSize:14,  width:'40%',}]}>IPHONE 13 PRO MAX</Text>
                  <Text style={[Styles.genText,{fontWeight:'600',fontSize:14, width:'20%'}]}>310.00$</Text>
                  <View style={[{width:'20%', display:'flex',flexDirection:'row', alignItems:'center'}]}>
                    <TouchableOpacity>
                      <Text style={[Styles.genText,{fontWeight:'600',fontSize:14,backgroundColor:'#E1E1E1', height:20, width:20,textAlign:'center',paddingTop:0, borderTopLeftRadius:3, borderBottomLeftRadius:3}]}>-</Text>
                    </TouchableOpacity>
                    <Text style={[Styles.genText,{fontWeight:'600',fontSize:14,backgroundColor:'#D2D2D2',width:20, textAlign:'center', paddingTop:0}]}>1</Text>
                    <TouchableOpacity>
                      <Text style={[Styles.genText,{fontWeight:'600',fontSize:14,backgroundColor:'#E1E1E1', height:20, width:20,textAlign:'center',paddingTop:0, borderTopRightRadius:3, borderBottomRightRadius:3}]}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={[Styles.genText,{fontWeight:'600',fontSize:14, width:'20%'}]}>310.00$</Text>
              </View>

              <View>

                <Image source={require('../assets/images/iphone13proImage.png')} style={[ {width:90,height:120,marginBottom:10, resizeMode: 'contain'}]}/>
                <View style={{display:'flex',justifyContent:'center', flexDirection:'column', paddingVertical:10}}>
                    <Text style={[Styles.cartText,{fontSize:14}]}><Text style={[Styles.cartText,{fontSize:14, color:'#9697A0'}]}>Condition:</Text> Brand New</Text>
                    <Text style={[Styles.cartText,{fontSize:14}]}><Text style={[Styles.cartText,{fontSize:14, color:'#9697A0'}]}>Carrier:</Text> Unlocked</Text>
                    <Text style={[Styles.cartText,{fontSize:14}]}><Text style={[Styles.cartText,{fontSize:14, color:'#9697A0'}]}>Storage:</Text> 256GB</Text>
                    <Text style={[Styles.cartText,{fontSize:14}]}><Text style={[Styles.cartText,{fontSize:14, color:'#9697A0'}]}>Phone Status:</Text> Financed</Text>
                </View>
              </View>

              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#070707', '#070707',]} 
                  style={{ display:'flex',padding:.3,marginTop:16,marginBottom:5, borderRadius:5}}>
              </LinearGradient>

              <View style={{display:'flex', flexDirection:'column',alignItems:'flex-end', marginTop:10, width:'100%'}}>

                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={[Styles.cartText,{fontSize:14,marginRight:50, color:'#070707'}]}>
                    Subtotal 
                  </Text>
                  <Text style={{color:'#070707', fontSize:14,width: '20%', fontFamily:'Montserrat-SemiBold'}}> 
                    310.00$
                  </Text>
                </View>

                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={[Styles.cartText,{fontSize:14, marginRight:50,color:'#070707'}]}>
                    Shipping 
                  </Text>
                  <Text style={{color:'#070707', fontSize:14,width: '20%',fontFamily:'Montserrat-SemiBold'}}> 
                    0.5%
                  </Text>
                </View>
                <View 
                  style={{ width:'55%', marginVertical:15, borderBottomColor:'#070707', borderBottomWidth:.3}}>
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={[Styles.cartText,{fontSize:14,marginRight:50, color:'#070707'}]}>
                    Total
                  </Text>
                  <Text style={{color:'#070707', fontSize:14,width: '20%', fontFamily:'Montserrat-SemiBold'}}> 
                    310.00$
                  </Text>
                </View>
              </View>
            <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>setTab([false,true,false])}
                      style={[Styles.mainButton,{width:'100%', marginVertical:40, paddingVertical:13} ]}
                    >
                      <Text style={Styles.mainButtonText}>Proceed To Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
          }
          {
              tab[1] == true &&
              <Checkout/>
          }
          {
              tab[2] == true &&
              <Confirmation/>
          }
            

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



  export default Cart;