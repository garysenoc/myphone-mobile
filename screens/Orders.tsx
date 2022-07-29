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

const Orders =() =>{

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

    const [tab2, setTab2] = useState([true,false,false]);

    useEffect(() => {
      setTab([true,false,false]);
      setTab2([true,false,false]);
    }, [])
  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>

            <View style={{marginTop:30, display:'flex', justifyContent:'center',flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity onPress={()=>setTab([true,false,false])}>
                <Text style={[Styles.genText,{fontWeight:tab[0]==true?'700':'600',marginHorizontal:10,color:tab[0]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[0]==true?2:0,  borderBottomColor:'#3681B8' }]}>Sell Smart</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>setTab([false,true,false])}>
                <Text style={[Styles.genText,{fontWeight:tab[1]==true?'700':'600',marginHorizontal:10, color:tab[1]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[1]==true?2:0,  borderBottomColor:'#3681B8' }]}>Buy Smart</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setTab([false,false,true])}>
                <Text style={[Styles.genText,{fontWeight:tab[2]==true?'700':'600',marginHorizontal:10, color:tab[2]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:7, borderBottomWidth:tab[2]==true?2:0,  borderBottomColor:'#3681B8' }]}>Repair Smart</Text>
              </TouchableOpacity>
              
            </View>

            <View style={{marginVertical:10, display:'flex', flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity onPress={()=>setTab2([true,false,false])}>
                <Text style={[Styles.genText,{fontWeight:tab2[0]==true?'700':'600', fontSize:14, marginRight:15,color:tab2[0]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:0, borderBottomWidth:tab2[0]==true?2:0,  borderBottomColor:'#3681B8' }]}>all orders</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>setTab2([false,true,false])}>
                <Text style={[Styles.genText,{fontWeight:tab2[1]==true?'700':'600',fontSize:14, marginRight:15, color:tab2[1]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:0, borderBottomWidth:tab2[1]==true?2:0,  borderBottomColor:'#3681B8' }]}>pending orders</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setTab2([false,false,true])}>
                <Text style={[Styles.genText,{fontWeight:tab2[2]==true?'700':'600', fontSize:14,  color:tab2[2]==true?'#070707':'#B6B6B6', paddingBottom:8,paddingHorizontal:0, borderBottomWidth:tab2[2]==true?2:0,  borderBottomColor:'#3681B8' }]}>completed orders</Text>
              </TouchableOpacity>
              
            </View>

            {
             ( tab2[0] == true || tab2[1] == true) &&
            
            <View style={{marginBottom:150}}>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={[Styles.genText,{width:'50%'}]}>order id</Text>
                <Text style={[Styles.genText,{width:'50%'}]}>31000048534272</Text>
              </View>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={[Styles.genText,{width:'50%'}]}>order date</Text>
                <Text style={[Styles.genText,{width:'50%'}]}>Mar 31, 2022</Text>
              </View>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={[Styles.genText,{width:'50%', paddingTop:0}]}>delivery way</Text>
                <View style={{width:'50%'}}>
                  <Image source={require("../assets/images/640px-United_Pa.png")} style={{ height:35, resizeMode:'contain'}}/>
                </View>
                
              </View>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={[Styles.genText,{width:'50%'}]}>order value</Text>
                <Text style={[Styles.genText,{width:'50%'}]}>$677.69(1)</Text>
              </View>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={[Styles.genText,{width:'50%'}]}>order status</Text>
                <Text style={[Styles.genText,{width:'50%'}]}>Order Placed</Text>
              </View>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={[Styles.genText,{width:'50%', paddingTop:0}]}>operation</Text>
                <View style={{width:'50%'}}>
                  <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('OrderDetails')}
                        style={[Styles.mainButton,{width:90, paddingVertical:7} ]}
                      >
                        <Text style={Styles.mainButtonText}>details</Text>
                  </TouchableOpacity>
                </View>
                
              </View>

            </View>

          }

          {
             tab2[2] == true &&
            
            <View style={{marginBottom:150}}>

              <View style={{width:'100%', display:'flex', alignItems:'center', paddingVertical:30}}>
                  <Image source={require("../assets/images/nodata.png")} style={{ height:50, resizeMode:'contain'}}/>
              </View>

              <Text style={[Styles.genText,{width:'100%', fontSize:16, marginBottom:15}]}>
                Sorry, you have no order data on this page! 
              </Text>
              <Text style={[Styles.genText,{width:'100%', fontSize:16, marginBottom:25}]}>
                You can sell a wide range of devices for
                more cash, including many types of cellphones,
                tablets, and so on.
              </Text>

              <View style={{width:'100%', display:'flex', alignItems:'center'}}>
                  <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Home')}
                        style={[Styles.mainButton,{width:140, paddingVertical:10} ]}
                      >
                        <Text style={Styles.mainButtonText}>go to home</Text>
                  </TouchableOpacity>
              </View>

            </View>

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



  export default Orders;