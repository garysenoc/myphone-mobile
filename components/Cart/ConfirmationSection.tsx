import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../../styles/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';




type Nav = {
  navigate: (value: string) => void;
}

const Confirmation =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };

  const [payment, setPayment] = useState('');
  const [shipment, setShipment] = useState('');


    const Image1  = require("../../assets/images/iphone13gold.png");
    const Image2  = require("../../assets/images/iphone13pro.png");
    const Image3  = require("../../assets/images/iphone13.png");
    const Image4  = require("../../assets/images/iphone13mini.png");


    const products = [
      {'image':Image1,'name':'iPhone 13 Pro Max'},
      {'image':Image2,'name':'iPhone 13 Pro'},
      {'image':Image3,'name':'iPhone 13'},
      {'image':Image4,'name':'iPhone 13 Mini'},
      

    ];

  return (
    <>
            

            <View style={{paddingVertical:0}}>

              <View style={Styles.detailList}>
                  <View style={{backgroundColor:'#fff',borderBottomColor:'#AAAAAA', borderBottomWidth:1, marginBottom:10, width:'100%', padding:10,borderRadius:5}}>
                    <Text style={[Styles.detailTitle,{paddingBottom:5, paddingTop:0, textTransform:'lowercase'}]}>
                      Hishamhosam20@gmail.com
                    </Text>
                    <Text style={[Styles.detailTitle,{fontSize:12, paddingVertical:5}]}>
                    All email about your order we'll be sent here.
                    </Text>
                  </View>

                  <View style={{backgroundColor:'#fff',borderBottomColor:'#AAAAAA', borderBottomWidth:1,marginBottom:10,width:'100%', padding:10,borderRadius:5}}>
                    <Text style={[Styles.detailTitle,{paddingVertical:5}]}>
                      Payment Details: Cash Card
                    </Text>
                    {/* <Text style={[Styles.detailTitle,{fontSize:12, paddingVertical:5}]}>
                      Hishamhosam20@gmail.com
                    </Text> */}
                    <View style={{display:'flex',width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                      <TextInput
                          placeholder='Hishamhosam20@gmail.com'
                          placeholderTextColor="#9697A0" 
                          style={[{borderBottomWidth:0,padding:0,paddingVertical:0,  width:'70%'}]}
                      />
                      <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Cart')}
                        
                      >
                        <Text style={{color:'#2D81B8',}}>Change</Text>
                      </TouchableOpacity>
                    </View>
                    
                  </View>

                  <View style={{backgroundColor:'#fff',borderBottomColor:'#AAAAAA', borderBottomWidth:1,marginBottom:10,width:'100%', padding:10,borderRadius:5}}>
                    <Text style={[Styles.detailTitle,{paddingVertical:5}]}>
                      Payment Details: Cash Card
                    </Text>
                    <View style={{display:'flex',width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                      
                      <View>
                        <Text style={[Styles.detailTitle,{paddingVertical:5, fontSize:16}]}>
                          Hishamhosam
                        </Text>
                        <Text style={[Styles.detailTitle,{paddingVertical:5, fontSize:16}]}>
                          Gaza Strip
                        </Text>
                      </View>

                      <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Cart')}
                        
                      >
                        <Text style={{color:'#2D81B8',}}>Change</Text>
                      </TouchableOpacity>
                      
                    </View>
                  </View>

                  <View style={{backgroundColor:'#fff', borderBottomColor:'#AAAAAA', borderBottomWidth:1,marginBottom:10,width:'100%', padding:10,borderRadius:5}}>
                    
                    <View style={{display:'flex',width:'70%',marginBottom:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={[Styles.cartText,{fontSize:16, color:'#070707'}]}>
                        Item Total: 
                      </Text>
                      <Text style={{color:'#D42828', fontSize:16, }}> 
                        310.00$
                      </Text>
                    </View>

                    <View style={{display:'flex', width:'70%',borderBottomColor:'#AAAAAA',marginBottom:10, borderBottomWidth:0, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={[Styles.cartText,{fontSize:16, color:'#070707'}]}>
                        Shipping: 
                      </Text>
                      <Text style={{color:'#D42828', fontSize:16,}}> 
                        0.5%
                      </Text>
                    </View>

                  </View>
                    


              </View>
              
              <View style={{ maxWidth:'95%', display:'flex', flexDirection:'row'}}>
                <BouncyCheckbox
                  size={20}
                  fillColor="#070707"
                  unfillColor="#fff"
                  iconStyle={{ borderColor: "#070707" }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular" }}

                />
                <Text style={[Styles.detailTitle,{fontSize:14,}]}>Terms and Policy</Text>
              </View>

              <View style={{display:'flex', alignItems:'center'}}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Orders')}
                    activeOpacity={.7}
                    style={[Styles.mainButton,{width:190, marginTop:30, marginBottom:90, paddingVertical:10} ]}
                  >
                    <Text style={Styles.mainButtonText}>Submit Order</Text>
                </TouchableOpacity>
              </View>
              



            </View>

            

    </>
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



  export default Confirmation;