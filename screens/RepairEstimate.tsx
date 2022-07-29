import React from 'react'
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

const RepairEstimate =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };


  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            <View style={{marginTop:25, marginBottom:20}}>
              <Text style={[Styles.primaryText,{fontSize:19, textAlign:'center'}]}>What's wrong with your smartphone?</Text>
            </View>
            <View  style={{marginBottom:200}}>
                
              <TouchableOpacity  style={[Styles.damageBtn,{paddingVertical:10}]} 
                onPress={()=>navigation.navigate('RepairDate')}>
                <View style={{width:'80%'}}>
                  <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Carry-In</Text>
                  <Text style={[Styles.genText,{fontSize:14, paddingTop:0}]}>Phone repairs in4 hours less. Free diagnostics.</Text>
                </View>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={[Styles.damageBtn,{paddingVertical:10}]} 
                onPress={()=>navigation.navigate('RepairDate')}>
                <View style={{width:'80%'}}>
                  <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>We Come to You</Text>
                  <Text style={[Styles.genText,{fontSize:14, paddingTop:0}]}>Phone repairs in 2 hours or less. Deposit required.</Text>
                </View>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={[Styles.damageBtn,{paddingVertical:10}]} 
                onPress={()=>navigation.navigate('RepairDate')}>
                <View style={{width:'80%'}}>
                  <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Mail-in Repair</Text>
                  <Text style={[Styles.genText,{fontSize:14, paddingTop:0}]}>Free shipping both ways and repairs are completed in less than a week</Text>
                </View>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <View style={{backgroundColor:'#F1F1F1',marginTop:20, width:'100%', display:'flex',flexWrap:'wrap', flexDirection:'row', justifyContent:'space-around', borderRadius:20, padding:20}}>
                <View style={{display:'flex', justifyContent:'center',marginBottom:40, alignItems:'center', width:'47%'}}>
                  <Image source={require("../assets/images/warranty.png")} style={{width:50, height:50,marginBottom:10,resizeMode:'contain'}} />
                  <Text style={[Styles.primaryText,{fontSize:12, paddingTop:0, color:'#D42828'}]}>lifetime warranty</Text>
                </View>
                <View style={{display:'flex', justifyContent:'center',marginBottom:40, alignItems:'center', width:'47%'}}>
                  <Image source={require("../assets/images/time-check.png")} style={{width:50, height:50,marginBottom:10,resizeMode:'contain'}} />
                  <Text style={[Styles.primaryText,{fontSize:12, paddingTop:0, color:'#D42828'}]}>same day repair</Text>
                </View>
                <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'47%'}}>
                  <Image source={require("../assets/images/badge.png")} style={{width:50, height:50,marginBottom:10,resizeMode:'contain'}} />
                  <Text style={[Styles.primaryText,{fontSize:12, paddingTop:0, color:'#D42828'}]}>expert technicians</Text>
                </View>
                <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'47%'}}>
                  <Image source={require("../assets/images/starts.png")} style={{width:50, height:50,marginBottom:10, resizeMode:'contain'}} />
                  <Text style={[Styles.primaryText,{fontSize:12, paddingTop:0, color:'#D42828'}]}>1m+ devices fixed</Text>
                </View>
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



  export default RepairEstimate;