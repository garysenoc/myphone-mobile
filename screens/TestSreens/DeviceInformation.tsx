import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../../styles/Styles';
import Footer from '../../components/Footer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Octicons from 'react-native-vector-icons/Octicons';
import Modal from "react-native-modal";



type Nav = {
  navigate: (value: string) => void;
}

const DeviceInformation =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };
    
    const [skip, setSkip] = useState(false);


  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        
        <View style={[Styles.main,{paddingTop:70,paddingBottom:50, backgroundColor:'#fff'}]}>
            
        <View style={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          paddingTop:25,
          paddingHorizontal:20,
          position: 'absolute',
          top:0,
          left:0,
        }}>

            <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('EnterCode')}
                    style={{display:'flex', alignItems:'center', flexDirection:'row'}}
                >
                <Octicons name="chevron-left" size={28} color="#070707" style={{width:15}} />
                <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>back</Text>
                
            </TouchableOpacity>
            {/* <Text style={[Styles.detailTitle,{textTransform:'none',fontSize:16}]}>Camera Test</Text>
            <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Home')}
                    style={{display:'flex', alignItems:'center', flexDirection:'row'}}
                >
                <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>Cancel</Text>
                
            </TouchableOpacity> */}
        </View>

        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        
        <View style={{width:'100%',display:'flex', height:'100%',flexDirection:'column',justifyContent:'space-between', position: 'relative',}}>

          <View style={{width:'100%',paddingVertical:30, paddingHorizontal:10}}>

              <View style={Styles.testIconBox}>

                <Image source={require('../../assets/images/test/test3.png')} style={[Styles.testImage,{width:'80%'}]} />
                <View style={{backgroundColor:'#E5E4E4',paddingVertical:15,marginBottom:20, paddingHorizontal:15,width:'100%', borderRadius:10}}>
                  <Text style={[Styles.detailTitle,{textTransform:'none',paddingBottom:0, fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>
                    Device Information:
                  </Text>
                  <Text style={[Styles.detailTitle,{textTransform:'none',paddingBottom:0,  fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>
                    Manufacturer: <Text style={[Styles.detailTitle,{color:'#2676C0', fontSize:14, textTransform:'none'}]}>apple</Text>
                  </Text>
                  <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>
                    Product: <Text style={[Styles.detailTitle,{color:'#2676C0', fontSize:14, textTransform:'none'}]}>iPhone 11 Pro</Text>
                  </Text>
                </View>
                
                <TouchableOpacity style={[Styles.checkButton,{width:'40%'}]} onPress={()=>navigation.navigate('Proximity')}>
                   <Text style={Styles.mainButtonText}>proceed</Text>
                </TouchableOpacity>

              </View>
              


            </View>

          </View>

          

          </ScrollView>
      </View>
              

      
    </SafeAreaView>
  )
}



  export default DeviceInformation;