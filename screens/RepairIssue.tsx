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

const RepairIssue =() =>{

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
              <Text style={[Styles.primaryText,{fontSize:19, textAlign:'center'}]}>What's wrong with your smartphone</Text>
            </View>
            <View  style={{marginBottom:200}}>
                
              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Screen Damage</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Battery Drains Fast</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Charging Issues</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Rear Camera Issue</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Front Camera Issue</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Rear Camera Lens Damage</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Glass Damage</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
              </TouchableOpacity>

              <TouchableOpacity  style={Styles.damageBtn} 
                onPress={()=>navigation.navigate('RepairDetails')}>
                <Text style={[Styles.genText,{fontSize:16, paddingTop:0}]}>Water/Liquid Damage</Text>
                <FontAwesome name="angle-right" size={30} color="#070707" />
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



  export default RepairIssue;