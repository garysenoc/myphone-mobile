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
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from "react-native-modal-datetime-picker";




type Nav = {
  navigate: (value: string) => void;
}



const RepairDate =() =>{

  const countries = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('time');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:any) => {
 
    let theTime = date.getHours();
    let hours = ((theTime + 11) % 12 + 1);
    var suffix = theTime >= 12 ? "PM":"AM";
    let finalTime = hours + " : "+ date.getMinutes() + " " +suffix;
    setSelectedTime(finalTime);
    // console.warn("A date has been picked: ", time);
    hideDatePicker();
  };


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
              <Text style={[Styles.primaryText,{fontSize:19, textAlign:'center'}]}>When do you want to come in?</Text>
            </View>
            <View  style={{marginBottom:200}}>
            <Text style={[Styles.primaryText,{fontSize:16, textAlign:'left'}]}>Choose a day</Text>

            <Text style={[Styles.primaryText,{fontSize:14, textAlign:'left', color:'#D42828'}]}>Tomorrow</Text>

            <View style={{display:'flex', flexDirection:'row'}}>
              <TouchableOpacity  style={{paddingVertical:5, borderWidth:1, borderColor:'#D42828', width:'13%', borderRadius:10}} 
                 >
                    <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>Thu</Text>
                    <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>5/11</Text>
              </TouchableOpacity>

              <TouchableOpacity  style={{paddingVertical:5, borderWidth:.6,marginLeft:5, borderColor:'#070707', width:'13%', borderRadius:10}} 
                >
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>Fri</Text>
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>5/12</Text>
              </TouchableOpacity>

              <TouchableOpacity  style={{paddingVertical:5, borderWidth:.6,marginLeft:5, borderColor:'#070707', width:'13%', borderRadius:10}} 
                >
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>Sat</Text>
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>5/13</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{paddingVertical:5, borderWidth:0,marginLeft:5,  width:'10%', borderRadius:10}} 
                >
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0,color:'#B1B6BF', textAlign:'center'}]}>Sun</Text>
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0,color:'#B1B6BF', textAlign:'center'}]}>5/4</Text>
              </TouchableOpacity>

              <TouchableOpacity  style={{paddingVertical:5, borderWidth:.6,marginLeft:5, borderColor:'#070707', width:'13%', borderRadius:10}} 
                  >
                    <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>Mon</Text>
                    <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>5/15</Text>
              </TouchableOpacity>

              <TouchableOpacity  style={{paddingVertical:5, borderWidth:.6,marginLeft:5, borderColor:'#070707', width:'13%', borderRadius:10}} 
                >
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>Tue</Text>
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>5/10</Text>
              </TouchableOpacity>

              <TouchableOpacity  style={{paddingVertical:5, borderWidth:.6,marginLeft:5, borderColor:'#070707', width:'13%', borderRadius:10}} 
                >
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>Wed</Text>
                  <Text style={[Styles.genText,{fontSize:10, paddingTop:0, textAlign:'center'}]}>5/17</Text>
              </TouchableOpacity>

            </View>

            <View style={{marginTop:30}}>
              <Text style={[Styles.genText,{fontSize:14, paddingTop:0,width:'100%', textAlign:'right'}]}>choose a time on thu 5/11</Text>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between' , alignItems:'center'}}>
                <View style={{width:'45%', backgroundColor:'#fff',marginTop:20, display:'flex',flexDirection:'row', alignItems:'center',borderColor:'#070707', borderWidth:.7, borderRadius:5, padding:8}}>
                  <MaterialIcons name="today" size={20} color="#070707" />
                    <SelectDropdown
                      buttonStyle={{backgroundColor:'#ffff',height:30,width:'90%', borderRadius:5}}
                      buttonTextStyle={{textAlign:'left', fontSize:14,}}
                      dropdownStyle={{borderRadius:10}}
                      data={countries}
                      defaultButtonText='days'
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                      }}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                      }}
                    />
                    <FontAwesome name="angle-down" size={20} color="#070707" style={{marginLeft:-20}} />
                      
                </View>
                
                   
                    
                <TouchableOpacity onPress={showDatePicker } style={{width:'50%', backgroundColor:'#fff',marginTop:20, display:'flex',flexDirection:'row', alignItems:'center',borderColor:'#070707',paddingVertical:11.5, borderWidth:.7, borderRadius:5, padding:8}}>
                  
                  
                  <Ionicons name="time-outline" size={20} color="#070707" />
                    
                  <Text style={[Styles.genText,{fontSize:14, paddingTop:0,width:'70%', textAlign:'center'}]}>{selectedTime}</Text>
                    
                  <FontAwesome name="angle-down" size={20} color="#070707"  />
                    
                
              </TouchableOpacity>
              
              </View>

              <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                <TouchableOpacity
                      activeOpacity={.7}
                      onPress={()=>navigation.navigate('RepairConfirm')}
                      style={[Styles.mainButton,{width:170, marginTop:100,marginBottom:50, paddingVertical:15} ]}
                    >
                      <Text style={Styles.mainButtonText}>Continue</Text>
                  </TouchableOpacity>
              </View>

            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              date={new Date()}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              
          
            />


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



  export default RepairDate;