import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../../styles/Styles';
import Footer from '../../components/Footer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

const Cosmetic =() =>{

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };
    
    const [skip, setSkip] = useState(false);

  
  const [q1,setQ1] = useState('');
  const [q2,setQ2] = useState('');
  const [q3,setQ3] = useState('');
  const [q4,setQ4] = useState('');


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
                    onPress={()=>navigation.navigate('Vibration')}
                    style={{display:'flex', alignItems:'center', flexDirection:'row'}}
                >
                <Octicons name="chevron-left" size={28} color="#070707" style={{width:15}} />
                <Text style={[Styles.detailTitle,{textTransform:'none', fontSize:14,fontFamily:'MontserratAlternates-Regular',}]}>back</Text>
                
            </TouchableOpacity>
            <Text style={[Styles.detailTitle,{textTransform:'none',fontSize:16}]}>Cosmetic Test</Text>
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

          <View style={{width:'100%',paddingVertical:30, paddingHorizontal:10}}>
              {/* <Text style={[Styles.testTextCenter]}>
                Face ID Test
              </Text> */}

            <View>
              <Text style={[Styles.testTextCenter, {textAlign:'left', paddingBottom:0, marginBottom:0}]}>
                1. Does the screen have any chips cracks or deep scratches
              </Text>
              <View style={{width:'100%', display:'flex', paddingBottom:0, flexDirection:'row', flexWrap:'wrap'}}>

                      <TouchableOpacity onPress={()=>setQ1('yes')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{marginRight:15, backgroundColor:q1 == 'yes' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q1 == 'yes' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>setQ1('no')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{ backgroundColor:q1 == 'no' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q1 == 'no' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>No</Text>
                      </TouchableOpacity>

                </View>

            </View>

            <View>
              <Text style={[Styles.testTextCenter, {textAlign:'left', paddingBottom:0, marginBottom:0}]}>
                2. Does the back glass have any chips or cracks
              </Text>
              <View style={{width:'100%', display:'flex', paddingBottom:0, flexDirection:'row', flexWrap:'wrap'}}>

                      <TouchableOpacity onPress={()=>setQ2('yes')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{marginRight:15, backgroundColor:q2 == 'yes' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q2 == 'yes' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>setQ2('no')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{ backgroundColor:q2 == 'no' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q2 == 'no' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>No</Text>
                      </TouchableOpacity>

                </View>

            </View>

            <View>
              <Text style={[Styles.testTextCenter, {textAlign:'left', paddingBottom:0, marginBottom:0}]}>
                3. Is the back camera missing any lenses or have any chips or cracks
              </Text>
              <View style={{width:'100%', display:'flex', paddingBottom:0, flexDirection:'row', flexWrap:'wrap'}}>

                      <TouchableOpacity onPress={()=>setQ3('yes')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{marginRight:15, backgroundColor:q3 == 'yes' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q3 == 'yes' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>setQ3('no')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{ backgroundColor:q3 == 'no' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q3 == 'no' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>No</Text>
                      </TouchableOpacity>

                </View>

            </View>

            <View>
              <Text style={[Styles.testTextCenter, {textAlign:'left', paddingBottom:0, marginBottom:0}]}>
                4. Does the body of the device have any large dents or deep scratches
              </Text>
              <View style={{width:'100%', display:'flex', paddingBottom:0, flexDirection:'row', flexWrap:'wrap'}}>

                      <TouchableOpacity onPress={()=>setQ4('yes')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{marginRight:15, backgroundColor:q4 == 'yes' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q4 == 'yes' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>setQ4('no')}
                        activeOpacity={.7}
                        style={[Styles.testFooterBtn,{ backgroundColor:q4 == 'no' ? '#2C8CD4': '#fff', borderWidth:1, borderColor:'#2C8CD4'}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase',color:q4 == 'no' ? '#fff': '#2C8CD4', marginHorizontal:5}]}>No</Text>
                      </TouchableOpacity>

                </View>

            </View>


           
              


            </View>

            <View style={{width:'100%', display:'flex', justifyContent: 'center',alignItems:'center', marginTop:30}}>
                      <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('Summary')}
                        style={[Styles.testFooterBtn,{marginHorizontal:5, width:120, marginBottom:30}]}
                      >
                        <Text style={[Styles.mainButtonText, {textTransform:'lowercase'}]}>submit</Text>
                      </TouchableOpacity>
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
                    onPress={()=>navigation.navigate('Cosmetic')}
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



  export default Cosmetic;