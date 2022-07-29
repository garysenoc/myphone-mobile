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

const Repair =() =>{

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
              <Text style={[Styles.primaryText,{fontSize:19, textAlign:'center'}]}>Select your device to get started</Text>
              <Text style={[Styles.primaryText, {fontSize:19,textAlign:'center'}]}>
                Repair Your Device
              </Text>
            </View>
            <View style={Styles.productCardList}>
              
              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/iphone11pro.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>iPhone</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/samsungphone.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>samsung</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/applewatch.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>smart watch</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/airpodspic.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>airpods</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>


              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/ipadpic.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>ipad</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/macbook-air-201.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>Macbook</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/consolepic.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>console</Text>
                    </View>
                    
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={Styles.productType} onPress={()=>navigation.navigate('RepairProductTypeInner')}
                >
                <View 
                  style={Styles.productCard}>
                    <View style={Styles.productCardContent}>
                      <Image source={require('../assets/images/iphonexr.png')} style={[Styles.productCardImage]}/>
                      <Text style={Styles.productTitle}>Featured Products</Text>
                    </View>
                    
                </View>
                
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



  export default Repair;