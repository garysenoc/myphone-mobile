import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Display from './TestSreens/Display';

type Nav = {
  navigate: (value: string) => void;
}

const Home = () =>{

    const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#070707' : '#070707',
      };

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header />
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            
            
            <View style={{marginTop:35, marginBottom:50}}>
              <Text style={[Styles.primaryText,{textAlign:'center'}]}>Sell, Buy or Repair a device</Text>
              <Text style={[Styles.secondaryText,{textAlign:'center'}]}>
                Sell, buy or repair iPhone, Tablets, iPods, and More
              </Text>
            </View>

            {/* <View style={{width:'100%', display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableOpacity
                    activeOpacity={.7}
                    style={[Styles.mainButton, {width: 120,height:40}]}
                    onPress={()=>navigation.navigate('Sell')}
                >
                   <Text style={[Styles.mainButtonText,{fontFamily:'Montserrat-Italic'}]}>let's go</Text>
              </TouchableOpacity>
              <Image source={require('../assets/images/homepic.png')} style={[Styles.cardImage, {resizeMode:'contain',width:200, height:170 ,}]}/>
            </View> */}

            {/* <Text style={[Styles.primaryText,{marginTop:25, marginBottom:0, fontSize:18}]}>Choose your service</Text> */}

            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap', width:'100%', paddingVertical:10}}>
              <TouchableOpacity
               onPress={()=>navigation.navigate('Sell')}
              style={Styles.homeBtn}>
                <Text style={[Styles.genText, {color:'#070707',textAlign:'center',paddingLeft:10, paddingTop:0}]}>SELL A DEVICE</Text>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={()=>navigation.navigate('Buy')}
              style={Styles.homeBtn}>
                <Text style={[Styles.genText, {color:'#070707',textAlign:'center',paddingLeft:10, paddingTop:0}]}>BUY A DEVICE</Text>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={()=>navigation.navigate('Repair')}
              style={Styles.homeBtn}>
                <Text style={[Styles.genText, {color:'#070707',textAlign:'center',paddingLeft:10, paddingTop:0}]}>REPAIR A DEVICE</Text>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={()=>navigation.navigate('CheckLanding')}
              style={Styles.homeBtn}>
                <Text style={[Styles.genText, {color:'#070707',textAlign:'center',paddingLeft:10, paddingTop:0}]}>TEST YOUR DEVICE</Text>
              </TouchableOpacity>
            </View>

            <View style={{width:'100%', display:'flex',flexDirection:'row',marginBottom:80, justifyContent:'center'}}>
              <Image source={require('../assets/images/alldevices.png')} style={[Styles.cardImage, {resizeMode:'contain',width:'70%', height:170 ,}]}/>
            </View>

            <Footer/>
            
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
    
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


  export default Home;