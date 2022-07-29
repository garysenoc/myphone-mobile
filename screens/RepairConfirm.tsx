import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

import SelectDropdown from 'react-native-select-dropdown'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';



type Nav = {
  navigate: (value: string) => void;
}



const RepairConfirm =() =>{


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
              <Text style={[Styles.primaryText,{fontSize:19, textAlign:'center'}]}>Last step! How can we reach you?</Text>
            </View>
            <View  style={{marginBottom:200}}>
            

              <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap',marginBottom:20, justifyContent:'space-between'}}>
                <TextInput
                          // onChangeText={onChangeText}
                    placeholder='First name'
                    placeholderTextColor="#9697A0" 
                    multiline = {true}
                    numberOfLines = {1}
                    style={[Styles.regularField, {borderColor:'grey', borderBottomWidth:.5,marginBottom:10, borderWidth:.5, paddingHorizontal:10, paddingVertical:7, width:'49%'}]}
                  />
                  <TextInput
                          // onChangeText={onChangeText}
                    placeholder='Last name'
                    placeholderTextColor="#9697A0" 
                    multiline = {true}
                    numberOfLines = {1}
                    style={[Styles.regularField, {borderColor:'grey',borderBottomWidth:.5,marginBottom:10, borderWidth:.5, paddingHorizontal:10, paddingVertical:7, width:'49%'}]}
                  />

                    <TextInput
                          // onChangeText={onChangeText}
                    placeholder='Email'
                    placeholderTextColor="#9697A0" 
                    multiline = {true}
                    numberOfLines = {1}
                    style={[Styles.regularField, {borderColor:'grey',borderBottomWidth:.5,marginBottom:10,  borderWidth:.5, paddingHorizontal:10, paddingVertical:7, width:'100%'}]}
                  />
                  <TextInput
                          // onChangeText={onChangeText}
                    placeholder='Phone Number'
                    placeholderTextColor="#9697A0" 
                    multiline = {true}
                    numberOfLines = {1}
                    style={[Styles.regularField, {borderColor:'grey',borderBottomWidth:.5,marginBottom:10,  borderWidth:.5, paddingHorizontal:10, paddingVertical:7, width:'100%'}]}
                  />
              </View>
              
              <Text style={[Styles.primaryText,{fontSize:16, textAlign:'left'}]}>You can contact me by</Text>
           
              <View style={{ maxWidth:'100%',alignItems:'center', display:'flex', flexDirection:'row'}}>
                <BouncyCheckbox
                  size={16}
                  fillColor="#070707"
                  unfillColor="#fff"
                  iconStyle={{ borderColor: "#70707",  }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular", color:'#070707'  }}
                  textContainerStyle={{ marginLeft:5,}}
                />
                <Text style={[Styles.detailTitle,{fontSize:14,padding:0,height:20, paddingVertical:0, marginRight:20, color:'#070707'}]}>Phone Call</Text>
                

                <BouncyCheckbox
                  size={16}
                  fillColor="#070707"
                  unfillColor="#fff"
                  iconStyle={{ borderColor: "#70707",  }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular", color:'#070707',textDecorationStyle:'solid'  }}
                  textContainerStyle={{ marginLeft:5,}}
                />
                <Text style={[Styles.detailTitle,{fontSize:14,padding:0, height:20,marginRight:20,paddingVertical:0,  color:'#070707'}]}>Email</Text>

                <BouncyCheckbox
                  size={16}
                  fillColor="#070707"
                  unfillColor="#fff"
                  iconStyle={{ borderColor: "#70707",  }}
                  textStyle={{ fontFamily: "MontserratAlternates-Regular", color:'#070707'  }}
                  textContainerStyle={{ marginLeft:5,}}
                />
                <Text style={[Styles.detailTitle,{fontSize:14,padding:0,height:20,paddingVertical:0, color:'#070707'}]}>Sms/Text</Text>
               
              </View>


              <View style={{display:'flex', width:'100%',marginTop:40, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>
                  <View style={{width:'47%'}}>
                    <Text style={[Styles.primaryText,{fontSize:16,color:'#070707'}]}>Appointment Time</Text>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                      
                      <MaterialCommunityIcons name="calendar-clock-outline" size={30} color="#070707" />
                      <View>
                        <Text style={[Styles.primaryText,{fontSize:12,paddingRight:40,color:'#070707',marginBottom:0, paddingLeft:10}]}>Tue, May 11, 2022</Text>
                        <Text style={[Styles.primaryText,{fontSize:12,paddingRight:40,color:'#070707', paddingLeft:10}]}>12 pm</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('RepairDate')}>
                          <Text style={[Styles.primaryText,{fontSize:12,color:'#3B66B3', marginLeft:10}]}>Change Time</Text>
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                  </View>
                  <View style={{width:'47%'}}>
                  <Text style={[Styles.primaryText,{fontSize:16,color:'#070707'}]}>Repair Location</Text>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                      <Entypo name="location" size={30} color="#070707" />
                      <View>
                        <Text style={[Styles.primaryText,{fontSize:12,paddingRight:40, color:'#070707', paddingLeft:10}]}>
                          New York-Center City
                          1135 walnut street, #100A Philadelphia, PA, 1265
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('RepairDetails')}>
                        <Text style={[Styles.primaryText,{fontSize:12,color:'#3B66B3', marginLeft:10}]}>Change Store</Text>
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                    
                  </View>
              </View>

              <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>navigation.navigate('RepairConfirm')}
                      style={[Styles.mainButton,{width:'100%',marginTop:50,marginBottom:50, paddingVertical:15, paddingHorizontal:5} ]}
                    >
                      <Text style={[Styles.mainButtonText,{fontSize:13, paddingHorizontal:0}]}>Confirm your repair appointment</Text>
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



  export default RepairConfirm;