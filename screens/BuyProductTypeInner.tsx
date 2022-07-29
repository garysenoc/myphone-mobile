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

const BuyProductTypeInner =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };

      const Image1  = require("../assets/images/iphone13gold.png");
      const Image2  = require("../assets/images/iphone13pro.png");
      const Image3  = require("../assets/images/iphone13.png");
      const Image4  = require("../assets/images/iphone13mini.png");
      const Image5  = require("../assets/images/iphone12promax.png");
      const Image6  = require("../assets/images/iphone12pro.png");
  
      const Image7  = require("../assets/images/iphone12.png");
      const Image8  = require("../assets/images/iphone12mini.png");
      const Image9  = require("../assets/images/iphone11promax.png");
      const Image10  = require("../assets/images/iphone11pro.png");
      const Image11  = require("../assets/images/iphone11.png");
      const Image12  = require("../assets/images/iphonexsmax.png");
  
      const Image13  = require("../assets/images/iphonexs.png");
      const Image14  = require("../assets/images/iphonexr.png");
      const Image15  = require("../assets/images/iphonex.png");
      const Image16  = require("../assets/images/iphone8plus.png");
      const Image17  = require("../assets/images/iphone8.png");
      const Image18  = require("../assets/images/iphonese2020.png");
  
      const Image19  = require("../assets/images/iphone7plus.png");
      const Image20  = require("../assets/images/iphone7.png");
      const Image21  = require("../assets/images/iphone6splus.png");
      const Image22  = require("../assets/images/iphone6.png");
      const Image23  = require("../assets/images/iphone6plus.png");
      const Image24  = require("../assets/images/iphone6.png");




    const products = [
      {'image':Image1,'name':'iPhone 13 Pro Max'},
      {'image':Image2,'name':'iPhone 13 Pro'},
      {'image':Image3,'name':'iPhone 13'},
      {'image':Image4,'name':'iPhone 13 Mini'},
      {'image':Image5,'name':'iPhone 12 Pro Max'},
      {'image':Image6,'name':'iPhone 12 Pro'},

      {'image':Image7,'name':'iPhone 12'},
      {'image':Image8,'name':'iPhone 12 Mini'},
      {'image':Image9,'name':'iPhone 11 Pro Max'},
      {'image':Image10,'name':'iPhone 11 Pro'},
      {'image':Image11,'name':'iPhone 11'},
      {'image':Image12,'name':'iPhone XS Max'},

      {'image':Image13,'name':'iPhone XS'},
      {'image':Image14,'name':'iPhone XR'},
      {'image':Image15,'name':'iPhone X'},
      {'image':Image16,'name':'iPhone 8 Plus'},
      {'image':Image17,'name':'iPhone 8'},
      {'image':Image18,'name':'iPhone SE 2020'},

      {'image':Image19,'name':'iPhone 7 Plus'},
      {'image':Image20,'name':'iPhone 7'},
      {'image':Image21,'name':'iPhone 6s Plus'},
      {'image':Image23,'name':'iPhone 6 Plus'},
      {'image':Image24,'name':'iPhone 6'},
      
    ];

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            <View style={{height: 10, backgroundColor:'#D42828', width:'100%',marginBottom:25}}>
            </View>
            <View style={Styles.productCardList}>
              
              {
                products.map((product,index)=>(
                <TouchableOpacity key={index} style={{width:'23%',}} onPress={()=>navigation.navigate('BuyDetails')}>
                  <View style={[Styles.productCardIndividual, {marginBottom:0}]}>
                      <View style={[Styles.productCardContent, {height:130}]}>
                        <Image source={product.image} style={[Styles.productCardIndividualImage]}/>
                      </View>
                  </View>
                  <Text style={[Styles.productTitle, {fontSize:12,textAlign:'center',fontFamily:'MontserratAlternates-Regular',marginVertical:0}]}>{product.name}</Text>
                </TouchableOpacity>
                ))
              }

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



  export default BuyProductTypeInner;