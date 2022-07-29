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

const Login =() =>{

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

            <View>
              {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#2C8CD4', '#D22828',]} 
              style={{ display:'flex',padding:.2,marginTop:16, borderRadius:5}}>
              </LinearGradient> */}
            </View>
            <View>
              <Text style={[Styles.primaryText, {marginTop:20, fontSize:18}]}>Login to My Phone</Text>
            </View>
            
            <View style={{marginBottom:350}}>
              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Email</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your username or email'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Password</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor="#9697A0" 
                        secureTextEntry={true}
                        textContentType={'password'}
                        numberOfLines = {1}
                        style={[Styles.regularField]}
                        returnKeyType='go'
                        autoCorrect={false}
                    />
              </View>

              <View style={{width:'100%'}}>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Sell')}
                    style={[{width:'100%', marginTop:20, paddingVertical:0} ]}
                  >
                    <Text style={{color:'#2D81B8', textAlign:'right'}}>Forgot password?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                  activeOpacity={.7}
                  onPress={()=>navigation.navigate('Home')}
                  style={[Styles.mainButton,{width:150, marginTop:20, paddingVertical:10} ]}
                >
                   <Text style={Styles.mainButtonText}>Login</Text>
              </TouchableOpacity>

              <View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#595959', '#595959',]} 
                style={{ display:'flex',padding:.2,marginTop:16, borderRadius:5}}>
                </LinearGradient>
              </View>

              <View style={{width:'100%'}}>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Register')}
                    style={[{width:'100%', marginTop:20, paddingVertical:0, display:'flex', flexDirection:'row'} ]}
                  >
                    <Text style={{color:'#070707',}}>Not registered yet?</Text>
                    <Text style={{color:'#2D81B8', marginLeft:10}}>Create an Account</Text>
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



  export default Login;