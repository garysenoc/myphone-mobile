import React,{useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles, colors } from '../styles/Styles';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import InnerHeader from '../components/InnerHeader';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from '../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';





type Nav = {
  navigate: (value: string) => void;
}

const MyProfile =() =>{

  const [resourcePath, setResourcePath] = useState('');

  

  const navigation = useNavigation<Nav>()

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ?'#fff' : '#070707',
      };

  const [carrier, setCarrier] = useState('');
  const [condition, setCondition] = useState('');
  const [storage, setStorage] = useState('');


    const Image1  = require("../assets/images/iphone13gold.png");
    const Image2  = require("../assets/images/iphone13pro.png");
    const Image3  = require("../assets/images/iphone13.png");
    const Image4  = require("../assets/images/iphone13mini.png");


    const products = [
      {'image':Image1,'name':'iPhone 13 Pro Max'},
      {'image':Image2,'name':'iPhone 13 Pro'},
      {'image':Image3,'name':'iPhone 13'},
      {'image':Image4,'name':'iPhone 13 Mini'},
      

    ];

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <Header/>
        <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={[ Styles.bodyTheme]}>
        <View style={Styles.main}>
            
            <View>
              <Text style={[Styles.primaryText,{fontSize:18, marginTop:15}]}>My Profile</Text>
              <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:20}]}>
                View and Edit Your Personal Information Below
              </Text>
              <View style={{display:'flex',paddingVertical:10,marginBottom:20, flexDirection:'row', width:'100%',}}>
                <TouchableOpacity >
                  <Image source={require('../assets/images/user.jpg')} style={[ {width:50,height:50,marginRight:20, borderRadius:100, resizeMode: 'contain'}]}/>
                </TouchableOpacity>
                
                <View>
                  <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:5}]}>
                      Account Email Adress:
                  </Text>
                  <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, }]}>
                    hinashamhosam20@gmail.com
                  </Text>
                  <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Register')}
                    style={[{width:'100%', paddingVertical:0, display:'flex', flexDirection:'row'} ]}
                  >
                    <Text style={{color:'#2D81B8',fontSize:12}}>Update Password</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            
            <View>
              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>First Name</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your first name'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='Hinasham Hosam Alkhlout'
                        editable={false}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:5}]}>Phone Number</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your contact number'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='09435435342'
                        editable={false}
                    />
              </View>

             

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0}]}>Email</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your email'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='hinashamhosam20@gmail.com'
                        editable={false}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0}]}>Street Address</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your street address'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='Remal Street'
                        editable={false}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0}]}>Birthday</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your birthday'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='16/11/1992'
                        editable={false}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0}]}>Gender</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your gender'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='Male'
                        editable={false}
                    />
              </View>

              <Text style={[Styles.detailTitle,{fontSize:16, paddingVertical:0}]}>State/City</Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your state/city'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='Palestine/Gaza'
                        editable={false}
                    />
              </View>

             

            <View style={{display:'flex', width:'100%', alignItems:'flex-end'}}>
              <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Register')}
                    style={[Styles.mainButton,{width:140, marginTop:20, paddingVertical:10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'} ]}
                  >
                    <FontAwesome name="edit" size={18} color="#fff" />
                    <Text style={[Styles.mainButtonText,{marginLeft:5}]}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <Text style={[Styles.primaryText,{fontSize:18, marginTop:15, marginBottom:20}]}>Payment Type:</Text>

            <View style={{display:'flex', justifyContent:'center', width:'100%', alignItems:'center'}}>
              <View style={{display:'flex',padding:20,marginBottom:10, borderRadius:10,backgroundColor:'#EAEAEA', flexDirection:'column', width:'90%',}}>
                <Image source={require('../assets/images/visalogo.png')} style={[ {width:100,height:70, resizeMode: 'contain'}]}/>
                <View>
                  <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:5}]}>
                  hinashamhosam20@gmail.com
                  </Text>

                  <View style={{display:'flex', flexDirection:'row', width:'100%',justifyContent:'flex-end', alignItems:'flex-end'}}>
                    <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>navigation.navigate('Register')}
                      style={[{paddingVertical:0, display:'flex',marginTop:15, flexDirection:'row'} ]}
                    >
                      <FontAwesome name="edit" size={18} color="#070707" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={.7}
                      style={[{paddingVertical:0, display:'flex',marginTop:15,marginLeft:10, flexDirection:'row'} ]}
                    >
                      <MaterialIcons name="delete-outline" size={20} color="#070707" />
                    </TouchableOpacity>
                  </View>
                  
                </View>
              </View>
            </View>
            <View style={{width:'100%'}}>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Login')}
                    style={[{ paddingVertical:0, display:'flex', flexDirection:'row'} ]}
                  >
                    <Text style={{color:'#2D81B8',fontSize:12, marginLeft:20}}>+ Add A New Payment</Text>
                </TouchableOpacity>
              </View>
              

            <Text style={[Styles.primaryText,{fontSize:18, marginTop:40, marginBottom:20}]}>My Address</Text>
            <Text style={[Styles.detailTitle,{fontSize:16,paddingVertical:0, marginBottom:30}]}>
                Add and manage the addresses you use regularly.
            </Text>
            <Text style={[Styles.detailTitle,{fontSize:18,paddingVertical:0, marginBottom:5}]}>
                Manage Your Address:
            </Text>
              <View style={Styles.detailList}>
                  <TextInput
                        // onChangeText={onChangeText}
                        placeholder='Enter your gender'
                        placeholderTextColor="#9697A0" 
                        multiline = {true}
                        numberOfLines = {1}
                        style={[Styles.regularField,{color:'grey'}]}

                        value='hisham remal street Palestine 99903'
                        editable={false}
                    />
              </View>

              <View style={{display:'flex',paddingVertical:5, marginBottom:250, flexDirection:'row', width:'100%',justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Login')}
                    style={[{ paddingVertical:0, display:'flex', flexDirection:'row'} ]}
                  >
                    <Text style={{color:'#2D81B8',fontSize:12,}}>+ Add A New Payment</Text>
                </TouchableOpacity>
                <View style={{display:'flex', flexDirection:'row',}}>
                  <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>navigation.navigate('Register')}
                      style={[{paddingVertical:0, display:'flex',flexDirection:'row'} ]}
                    >
                      <FontAwesome name="edit" size={18} color="#070707" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={.7}
                      style={[{paddingVertical:0, display:'flex',marginLeft:10, flexDirection:'row'} ]}
                    >
                      <MaterialIcons name="delete-outline" size={20} color="#070707" />
                    </TouchableOpacity>
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



  export default MyProfile;