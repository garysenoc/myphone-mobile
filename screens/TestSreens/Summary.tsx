import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../../styles/Styles';
import Footer from '../../components/Footer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Octicons from 'react-native-vector-icons/Octicons';
import Modal from "react-native-modal";



type Nav = {
  navigate: (value: string) => void;
}

const Summary =() =>{

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
            <Text style={[Styles.detailTitle,{textTransform:'none',fontSize:16}]}>Summary</Text>
           
        </View>
        

        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        
        <View style={{width:'100%',display:'flex', height:'100%',flexDirection:'column',justifyContent:'space-between', position: 'relative',}}>

          <View style={{width:'100%',paddingVertical:30, paddingHorizontal:10}}>
              <Text style={[Styles.testTextCenter]}>
                Top on any test your wish to run again 
                
              </Text>
            
            <TouchableOpacity  onPress={()=>navigation.navigate('Proximity')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon1.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Proximity
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Gyro')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon2.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Gyro
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('FaceId')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon3.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Face ID
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Microphone')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon4.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Mic
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('DeviceButton')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon5.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    MuteKey
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>



            <TouchableOpacity  onPress={()=>navigation.navigate('DeviceButton')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon6.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    PowerKey
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('DeviceButton')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon7.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    HomeKey
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('DeviceButton')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon8.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    VolumeUpKey
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('DeviceButton')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon9.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    VolumeDownKey
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Display')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon10.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Pixel
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Display')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon11.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Screen
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Charging')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon12.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Charging
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Connectivity')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon13.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    GPS
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Connectivity')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon14.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Wifi
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>



            <TouchableOpacity  onPress={()=>navigation.navigate('Connectivity')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon15.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Sim
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Call')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon16.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Call
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Camera')} style={[Styles.summaryBtn, {backgroundColor:'#FBE9E9', borderColor:'#F26970'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon17.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    CameraRear
                  </Text>
                  <Entypo name='warning' color='#F26970' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Camera')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon18.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    CameraFront
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>


            <TouchableOpacity  onPress={()=>navigation.navigate('Headset')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon19.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    HeadSet
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Speaker')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon20.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Speaker
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('Vibration')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon21.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    Vibration
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate('cosmetic')} style={[Styles.summaryBtn, {backgroundColor:'#E9F2FA', borderColor:'#2676C0'}]}>
              <View style={[Styles.testTextAlign,{alignItems:'center'}]}>
                  <Image source={require('../../assets/images/test/icon22.png')} style={[Styles.testImage,{width:25, height:25, resizeMode:'contain'}]} />
                  <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>
                    CustomQuestions
                  </Text>
                  <Feather name='check-circle' color='#75AC64' size={23} />
              </View>
            </TouchableOpacity>














           

            <View style={{width:'100%',display:'flex',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Proximity')} style={[Styles.mainButton,{width:'90%',maxWidth:'100%', backgroundColor:'#2676C0', marginTop:20,borderWidth:0, paddingVertical:10, borderRadius:10} ]}>
                    <Text style={[Styles.mainButtonText,{fontSize:16}]}>Retry failed and skipped tests</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Result')} style={[Styles.mainButton,{width:'38%',maxWidth:'100%', backgroundColor:'#2676C0', marginTop:20,borderWidth:0, paddingVertical:10, borderRadius:10} ]}>
                    <Text style={[Styles.mainButtonText,{fontSize:16}]}>Continue</Text>
              </TouchableOpacity>
            </View>
            
              


            </View>

          </View>

          

          </ScrollView>
      </View>
              
      
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



  export default Summary;