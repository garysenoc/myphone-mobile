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

const OrderDetails =() =>{

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
            <View>
              <Text style={[Styles.primaryText,{fontSize:18, marginTop:15}]}>My Orders</Text>
              <Text style={[Styles.primaryText,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                Order Details
              </Text>
            </View>

            <View style={{backgroundColor:'#F3BFBF', marginBottom:20, paddingVertical:10,maxWidth:'90%', paddingHorizontal:5}}>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0, marginBottom:10}]}>
                Sales Order / 310.4353535356777
              </Text>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0,}]}>
                Ordered submitted on Mar 31, 2022 15:47
              </Text>
            </View>

            <Text style={[Styles.primaryText,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                Order Status: Order Placed
            </Text>
            <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0, textTransform:'capitalize'}]}>
            You have made a successful reservation, please wait for the express delivery.
            </Text>

            <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20,justifyContent:'center', alignItems:'center', paddingVertical:5}}>
                    <View style={{width:25,height:25,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#D42828',display:'flex', justifyContent:'center', alignItems:'center'}} >
                      <Image source={require('../assets/images/order1.png')} style={[ {width:15,height:15, resizeMode: 'contain'}]}/>
                    </View>
                    <View style={{width:'17%', backgroundColor:'#707070', height:7,borderTopLeftRadius:60, borderBottomLeftRadius:60, marginLeft:-10}} />

                    <View style={{width:25,height:25,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#9C9C9C',display:'flex', justifyContent:'center', alignItems:'center'}} >
                      <Image source={require('../assets/images/order2.png')} style={[ {width:15,height:15, resizeMode: 'contain'}]}/>
                    </View>
                    <View style={{width:'17%', backgroundColor:'#707070', height:7,borderTopLeftRadius:60, borderBottomLeftRadius:60, marginLeft:-10}} />
                   
                    <View style={{width:25,height:25,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#9C9C9C',display:'flex', justifyContent:'center', alignItems:'center'}} >
                      <Image source={require('../assets/images/order3.png')} style={[ {width:15,height:15, resizeMode: 'contain'}]}/>
                    </View>
                    <View style={{width:'17%', backgroundColor:'#707070', height:7,borderTopLeftRadius:60, borderBottomLeftRadius:60, marginLeft:-10}} />

                    <View style={{width:25,height:25,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#9C9C9C',display:'flex', justifyContent:'center', alignItems:'center'}} >
                      <Image source={require('../assets/images/order4.png')} style={[ {width:15,height:15, resizeMode: 'contain'}]}/>
                    </View>
                    <View style={{width:'17%', backgroundColor:'#707070', height:7,borderTopLeftRadius:60, borderBottomLeftRadius:60, marginLeft:-10}} />

                    <View style={{width:25,height:25,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#9C9C9C',display:'flex', justifyContent:'center', alignItems:'center'}} >
                      <Image source={require('../assets/images/order5.png')} style={[ {width:15,height:15, resizeMode: 'contain'}]}/>
                    </View>
            </View>

            <View style={{display:'flex',flexDirection:'row',width:'100%', alignItems:'flex-start', paddingVertical:5}}>
                <Text style={[Styles.detailTitle,{fontSize:10,width:'23%',color:'#070707', textAlign:'left', paddingVertical:0}]}>
                     Order Placed
                </Text>
                <Text style={[Styles.detailTitle,{fontSize:10,color:'#070707',width:'20%', textAlign:'left', paddingVertical:0}]}>
                     Package sent
                </Text>
                <Text style={[Styles.detailTitle,{fontSize:10,color:'#070707', width:'20%',textAlign:'left', paddingVertical:0}]}>
                     Package received
                </Text>

                <Text style={[Styles.detailTitle,{fontSize:10,color:'#070707', width:'20%',textAlign:'left', paddingVertical:0}]}>
                     Processing
                </Text>

                <Text style={[Styles.detailTitle,{fontSize:10,color:'#070707', width:'20%',textAlign:'left', paddingVertical:0}]}>
                     Completed
                </Text>
            </View>
            <View style={{marginTop:20}}>
              <Text style={[Styles.primaryText,{fontSize:16,paddingVertical:0, marginBottom:20,}]}>
                  Shipping Carrier: UPS
              </Text>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0,marginBottom:10 }]}>
                Track Number: 195787908988998
              </Text>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0, }]}>
                Logistics Information: Mar 31, 2022
              </Text>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0, }]}>
                16:47 Shipper created a label, UPS has not receive the package yet
              </Text>
            </View>

            <View style={{marginTop:20, marginBottom:30}}>
              <Text style={[Styles.primaryText,{fontSize:16,paddingVertical:0, marginBottom:20,}]}>
                  Payment Selection: Paypal
              </Text>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0,marginBottom:10 }]}>
                Payment method selected: Paypal
              </Text>
              <Text style={[Styles.genText,{fontSize:14,paddingVertical:0, paddingTop:0,marginBottom:10 }]}>
                Payment Delivery Account: Hishamhosam20@gmail.com
              </Text>
            </View>
            
              <View style={{display:'flex', flexDirection:'row',marginBottom:8,backgroundColor:'#EEEEEE',paddingHorizontal:5, paddingTop:7,paddingBottom:10, justifyContent:'space-between', width:'100%'}}>
                  
                  <Text style={[Styles.genText,{fontWeight:'600', width:'35%',fontSize:14 }]}>Product</Text>
                  <Text style={[Styles.genText,{fontWeight:'600',width:'20%',fontSize:14  }]}>Item ID</Text>
                  <Text style={[Styles.genText,{fontWeight:'600',width:'25%', fontSize:14 }]}>Item Status</Text>
                  <Text style={[Styles.genText,{fontWeight:'600',width:'20%',fontSize:14 , textAlign:'right' }]}>Qoute</Text>
                
              </View>
              <View style={{display:'flex', flexDirection:'row',width:'100%', alignItems:'flex-start',paddingVertical:10, }}>
                <View style={{width:'36%'}}>
                  <Image source={require('../assets/images/iphone13proImage.png')} style={[ {width:70,height:70,marginBottom:10, resizeMode: 'contain'}]}/>
                  <View style={{display:'flex',justifyContent:'center', flexDirection:'column', paddingVertical:0}}>
                      <Text style={[Styles.genText,{fontWeight:'600',fontSize:10,}]}>IPHONE 13 PRO MAX</Text>
                      <Text style={[Styles.cartText,{fontSize:10}]}><Text style={[Styles.cartText,{fontSize:10, color:'#9697A0'}]}>Condition:</Text> Brand New</Text>
                      <Text style={[Styles.cartText,{fontSize:10}]}><Text style={[Styles.cartText,{fontSize:10, color:'#9697A0'}]}>Carrier:</Text> Unlocked</Text>
                      <Text style={[Styles.cartText,{fontSize:10}]}><Text style={[Styles.cartText,{fontSize:10, color:'#9697A0'}]}>Storage:</Text> 256GB</Text>
                      <Text style={[Styles.cartText,{fontSize:10}]}><Text style={[Styles.cartText,{fontSize:10, color:'#9697A0'}]}>Phone Status:</Text> Financed</Text>
                      <View style={{display:'flex', flexDirection:'row', marginTop:10, width:'100%', flexWrap:'wrap'}}>
                        <Text style={[Styles.cartText,{fontSize:10,borderRadius:5, backgroundColor:'#E3E3E3', padding:5, marginRight:10,marginBottom:10}]}>
                          Unlocked
                        </Text>
                        <Text style={[Styles.cartText,{fontSize:10,borderRadius:5, backgroundColor:'#E3E3E3', padding:5,marginRight:10, marginBottom:10}]}>
                          46 GB
                        </Text>
                        <Text style={[Styles.cartText,{fontSize:10,borderRadius:5, backgroundColor:'#E3E3E3', padding:5,marginBottom:10}]}>
                          Like New
                        </Text>
                        <Text style={[Styles.cartText,{fontSize:10}]}><Text style={[Styles.cartText,{fontSize:10, color:'#9697A0'}]}>Is the Apple ID signed out?</Text> Yes</Text>
                        
                      </View>
                  </View>
                </View>
                <Text style={[Styles.genText,{fontWeight:'600',fontSize:10,  width:'20%',}]}>023392832</Text>
                <Text style={[Styles.genText,{fontWeight:'600',fontSize:10,  width:'20%',}]}>Waiting for drop off</Text>
                <Text style={[Styles.genText,{fontWeight:'600',fontSize:10,  width:'20%', textAlign:'right'}]}>$310.00</Text>
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
                    $310.00
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
                    $310.00
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



  export default OrderDetails;