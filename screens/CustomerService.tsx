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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




type Nav = {
  navigate: (value: string) => void;
}

const CustomerService =() =>{

  

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
              <Text style={[Styles.primaryText,{fontSize:18, marginTop:15}]}>Customer Service</Text>
              <Text style={[Styles.detailTitle,{fontSize:14,paddingVertical:0, marginBottom:20}]}>
                We're here to help! Send us your message and
                our representative will get back to you
                as soon as possible.
              </Text>
              <Text style={[Styles.primaryText,{fontSize:16,textTransform:'capitalize', paddingVertical:0, marginBottom:20}]}>
                Your Message:
              </Text>
            </View>

            <View style={{backgroundColor:'#fff',borderColor:'grey',minHeight:300,marginBottom:30, borderWidth:1, width:'100%', borderRadius:13, padding:12, display:'flex',}}>
                  
                 <View style={{display:'flex', flexDirection:'row',width:'100%',marginBottom:15, justifyContent:'space-between', alignItems:'center'}}>
                  
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                      <MaterialCommunityIcons   name="account-circle-outline" size={30} color="#787878" />
                      <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0,textTransform:'lowercase', marginLeft:6}]}>
                        wireless my phone
                      </Text>
                    </View>
                    <Text style={[Styles.detailTitle,{fontSize:10,paddingVertical:0,textTransform:'lowercase',color:'787878'}]}>
                        11/05/2022 | 04:25:32
                    </Text>
                 </View>
                 <View style={{width:'100%'}}>
                        
                 </View>
                 <Text style={[Styles.detailTitle,{fontSize:12,marginLeft:6,backgroundColor:'#E0E0E0', borderRadius:30, paddingHorizontal:15, paddingVertical:7, maxWidth:'70%', width:50}]}>
                          hi
                </Text>
                 
            </View>

            <View style={{display:'flex',height:47, paddingHorizontal:15, flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderColor:'#D42828',width:'100%', borderWidth:.5,marginBottom:200, borderRadius:100,  backgroundColor:'#fff'}}>
              <TextInput
                        // onChangeText={onChangeText}
                        placeholder='input your message'
                        placeholderTextColor="#9697A0" 
                        style={[Styles.regularField,{color:'grey',backgroundColor:'transparent',marginBottom:0, width:'70%',borderBottomWidth:0,}]}
                  />
              <TouchableOpacity>
                <Text style={[Styles.primaryText,{fontSize:16,color:'#D42828', marginBottom:0}]}>
                          send
                </Text>
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



  export default CustomerService;