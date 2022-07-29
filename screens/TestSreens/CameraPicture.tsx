import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../../styles/Styles';
import Footer from '../../components/Footer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Octicons from 'react-native-vector-icons/Octicons';
import Modal from "react-native-modal";



type Nav = {
  navigate: (value: string) => void;
}

const CameraPicture =() =>{

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
          justifyContent:'space-between',
          paddingTop:25,
          paddingHorizontal:20,
          position: 'absolute',
          top:0,
          left:0,
        }}>

            <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Headset')}
                    style={{display:'flex', alignItems:'center', flexDirection:'row'}}
                >
                <Octicons name="chevron-left" size={28} color="#070707" style={{width:15}} />
                <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>back</Text>
                
            </TouchableOpacity>
            <Text style={[Styles.detailTitle,{textTransform:'none',fontSize:16}]}>Camera Test</Text>
            <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Home')}
                    style={{display:'flex', alignItems:'center', flexDirection:'row'}}
                >
                <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>Cancel</Text>
                
            </TouchableOpacity>
           
        </View>
        

        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        
        <View style={{width:'100%',display:'flex', height:'100%',flexDirection:'column',justifyContent:'space-between', position: 'relative',}}>

          <View style={{width:'100%',paddingVertical:10, paddingHorizontal:0}}>
              

              <View style={[Styles.testIconBox]}>
              
                <Image source={require('../../assets/images/test/test16.png')} style={[Styles.testImage,{width:'100%', borderRadius:20}]} />


                <Text style={[Styles.testTextCenter,{marginBottom:0,paddingBottom:30, paddingTop:30}]}>
                  Does the Photo look ok?
                </Text>

                <View style={{width:'100%', display:'flex',paddingBottom:0,justifyContent:'center', flexDirection:'row', flexWrap:'wrap'}}>

                      <TouchableOpacity
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{marginHorizontal:5}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase', marginHorizontal:5}]}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{marginHorizontal:5}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase'}]}>No</Text>
                      </TouchableOpacity>

                </View>
              </View>
              


            </View>

              <View style={{paddingHorizontal:12,display:'flex',  paddingVertical:5, alignItems:'center', justifyContent:'center', width:'100%'}}>
              <View style={{width:'100%', display:'flex',paddingBottom:30,justifyContent:'center', flexDirection:'row', flexWrap:'wrap'}}>
                      
                      <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Camera')}
                        style={[Styles.testFooterBtn,{marginHorizontal:5}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase'}]}>Retry</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>setSkip(true)}
                        style={[Styles.testFooterBtn,{marginHorizontal:5}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase', marginHorizontal:5}]}>Skip</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Vibration')}
                        style={[Styles.testFooterBtn,{marginHorizontal:5}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase'}]}>Next</Text>
                      </TouchableOpacity>

                </View>
                <TextInput
                      placeholder="Anything you'd like to mention about this test about your device
                      or results? Let us know in the comment section below"
                      placeholderTextColor="#A7A7A9" 
                      multiline = {true}
                      numberOfLines = {4}
                      style={[Styles.regularField,{textAlignVertical:'top', fontSize:14, marginBottom:50}]}
                />
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
                    onPress={()=>navigation.navigate('Vibration')}
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



  export default CameraPicture;