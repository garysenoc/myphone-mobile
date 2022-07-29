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

const Result =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };
    
    const [skip, setSkip] = useState(false);


  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        
        <View style={[Styles.main,{paddingTop:70,paddingBottom:0, backgroundColor:'#fff'}]}>
            
        <View style={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          paddingTop:25,
          paddingHorizontal:20,
          position: 'absolute',
          top:0,
          left:0,
        }}>

            <Text style={[Styles.detailTitle,{textTransform:'none',fontSize:18}]}>Summary</Text>
           
        </View>
        

        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        
        <View style={{width:'100%',display:'flex', height:'100%',flexDirection:'column',justifyContent:'space-between', position: 'relative',}}>

          <View style={{width:'100%',paddingVertical:30, paddingHorizontal:10}}>

              <Image source={require('../../assets/images/redlogo.png')} style={[{ resizeMode: 'contain',
              height:150,
              width:150}]}/>
              <Text style={[Styles.detailTitle,{fontSize:22}]}>Confirm your qoute!</Text>
              <Text style={[Styles.testTextCenter,{textAlign:'left'}]}>
                The mobile app has determined that your device is worth
              </Text>
              <Text style={[Styles.testTextCenter, {color:'#2D81B8', fontSize:22,textAlign:'left', fontFamily:'Montserrat-SemiBold',}]}>
                $400.00
              </Text>
            
              <TouchableOpacity  >
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Test Name
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Test Result
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  >
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'50%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Proximity
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity >
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Gyro
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Fail
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Accelerometer
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Face ID
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Mic
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Mute Key
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                 <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Power Key
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Home Key
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Volume Up Key
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Volume Down Key
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Pixel
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Screen
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Charging
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                 <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    GPS
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Wifi
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Sim
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                 <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Call
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Camera Rear
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                 <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Camera Front
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Camera Flash
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    HeadSet
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                 <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Speaker
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Vibration
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                <View style={{width:'40%'}}>
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'grey'}]}>
                    Custom Questions
                  </Text>
                </View>
                <View style={{width:'40%'}}>
                 <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5, color:'#070707'}]}>
                    Passed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>


            <View>
                  <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Sell')}
                    style={{display:'flex', alignItems:'center'}}
                    
                  >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#2C8CD4', '#2676C0',]} 
                              style={[Styles.mainButton,{width:'100%',maxWidth:'100%',paddingHorizontal:5,borderRadius:10, borderWidth:0, marginTop:20, paddingVertical:15} ]}>
                                <Text style={Styles.mainButtonText}>Sell Your New or Used Mobile Phone!</Text>
                    </LinearGradient>
                    
                </TouchableOpacity>
            </View>

            <View style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={[Styles.mainButton,{width:'100%',backgroundColor:'#2676C0',borderRadius:10, marginTop:20,borderWidth:0, paddingVertical:10} ]}>
                    <Text style={Styles.mainButtonText}>Back Home</Text>
              </TouchableOpacity>
            </View>
            
              


            </View>

            

          </View>

          

          </ScrollView>
      </View>
              


      
      {/* SKIP MODAL */}
      <Modal isVisible={skip} animationIn='fadeIn' animationOut='fadeOut'>
        <View style={{width:'100%',  display:'flex', justifyContent:'center', alignItems:'center'}}>
          <View style={Styles.testPopupBox}>

            <Text style={Styles.testPopupText}>Are you sure you want to skip?</Text>
            <View style={{display:'flex', flexDirection:'row',}}>
              <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Call')}
                    style={[Styles.mainButton,{width:120, paddingVertical:10, backgroundColor:'#C6C6C6', borderWidth:0} ]}
                  >
                    <Text style={[Styles.mainButtonText,{color:'#595959', fontFamily:'Montserrat-SemiBold',}]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>setSkip(false)}
                    style={[Styles.mainButton,{width:120, paddingVertical:10, marginLeft:5} ]}
                  >
                    <Text style={[Styles.mainButtonText,{fontFamily:'Montserrat-SemiBold',}]}>No</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          
        </View>
        
      </Modal>
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    bodyTheme: {
      backgroundColor: '#070707',
      height:'100%',
      paddingHorizontal:0,
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



  export default Result;