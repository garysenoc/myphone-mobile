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

const BrandAmbassador =() =>{

  

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
              <Text style={[Styles.primaryText,{fontSize:18, marginTop:15}]}>Brand Ambassador</Text>
              <Text style={[Styles.detailTitle,{fontSize:14,paddingVertical:0, marginBottom:20}]}>
                Invite Your Friends To Make Their Transaction On My Phone
                With Your Referral Link.
              </Text>
              <Text style={[Styles.detailTitle,{fontSize:14,textTransform:'capitalize', paddingVertical:0, marginBottom:20}]}>
                1. Invite friends to register and complete
                my phone transaction to get $10 cash rewards.
              </Text>
              <Text style={[Styles.detailTitle,{fontSize:14,textTransform:'capitalize', paddingVertical:0, marginBottom:20}]}>
                2. If you have invited 2 or more users, you can upgrade to brand
                ambassador and will be eligible to earn more money.
              </Text>
              <Text style={[Styles.detailTitle,{fontSize:14,textTransform:'capitalize', paddingVertical:0, marginBottom:20}]}>
                3. When you become a brand ambassador, we'll
                give you an extra $10 reward.
              </Text>
            </View>

            <View style={{backgroundColor:'#009BE8', width:'100%', borderRadius:10,minHeight:80, padding:8, marginBottom:250,display:'flex', justifyContent:'space-between', alignItems: 'center',}}>
                  
                  <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:10, justifyContent:'space-between', alignItems:'center', paddingVertical:5}}>
                    <Text style={[Styles.detailTitle,{fontSize:10,width:'33%',color:'#fff', textAlign:'left', paddingVertical:0}]}>
                     Your progress: 0%
                    </Text>
                    <Text style={[Styles.detailTitle,{fontSize:10,width:'33%',color:'#fff', textAlign:'left', paddingVertical:0}]}>
                     Your progress: 50%
                    </Text>
                    <Text style={[Styles.detailTitle,{fontSize:10,width:'33%',color:'#fff', textAlign:'left', paddingVertical:0}]}>
                     Your progress: 100%
                    </Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row',width:'100%', alignItems:'center', paddingVertical:5}}>
                    <View style={{width:'20%', backgroundColor:'#91B2C6', height:15,borderTopLeftRadius:60, borderBottomLeftRadius:60}} />
                    <View style={{width:15,height:15,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#637A87', marginLeft:-10}} />
                    <View style={{width:'30%', backgroundColor:'#F1F1F1', height:15, marginLeft:-10}} />
                    <View style={{width:15,height:15,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#637A87', marginLeft:-10}} />
                    <View style={{width:'47%', backgroundColor:'#F1F1F1', height:15, marginLeft:-10,borderTopRightRadius:60, borderBottomRightRadius:60}} />
                    <View style={{width:15,height:15,elevation:5, borderRadius:100,zIndex: 1, backgroundColor:'#637A87', marginLeft:-10}} />
                  </View>

                  <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between', alignItems:'center', paddingVertical:5}}>
                    <Text style={[Styles.detailTitle,{fontSize:10,width:'37%',color:'#fff', textAlign:'left', paddingVertical:0}]}>
                     Registered successfully
                    </Text>
                    <Text style={[Styles.detailTitle,{fontSize:10,width:'26%',color:'#fff', textAlign:'left', paddingVertical:0}]}>
                     Invite 1 friend
                    </Text>
                    <Text style={[Styles.detailTitle,{fontSize:10,width:'33%',color:'#fff', textAlign:'right', paddingVertical:0}]}>
                    Invite 2 friends
                    </Text>
                  </View>

                  <View style={{ width:'100%', display:'flex', flexDirection:'row'}}>
                    <BouncyCheckbox
                      size={14}
                      fillColor="#070707"
                      unfillColor="#fff"
                      iconStyle={{ borderColor: "#fff" }}
                      textStyle={{ fontFamily:'Montserrat-MediumItalic',}}
                      style={{marginRight:0,  width:20}}

                    />
                    <Text style={[Styles.detailTitle,{fontSize:10,color:'#fff',fontFamily:'Montserrat-MediumItalic',padding:0}]}>
                      I agree to our Terms & Condition of Brand Ambassador
                    </Text>
                  </View>


                  <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>navigation.navigate('Register')}
                      style={[Styles.mainButton,{width:250, paddingHorizontal:0, backgroundColor:'#fff', marginTop:20, paddingVertical:10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'} ]}
                    >
                      <Text style={[Styles.mainButtonText,{marginLeft:5,fontSize:14,fontFamily:'Montserrat-MediumItalic', color:'#070707'}]}>become a brand ambassador</Text>
                  </TouchableOpacity>
                  <Text style={[Styles.detailTitle,{fontSize:12,width:'100%',color:'#fff', textAlign:'left', paddingVertical:5}]}>
                    The $10 reward is only applicable when you become a brand
                    ambassador for the first time.
                  </Text>
                  <Text style={[Styles.detailTitle,{fontSize:12,width:'100%',color:'#fff', textAlign:'left', paddingVertical:0}]}>
                    Subsequent exists and re-entries will not have the bonus.
                  </Text>
                 
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



  export default BrandAmbassador;