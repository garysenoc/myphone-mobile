import React, { ReactElement } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Styles } from '../styles/Styles';

import {useNavigation,useNavigationState } from '@react-navigation/native';



type Nav = {
  navigate: (value: string) => void;
}

const Footer = () =>{

    const routes = useNavigationState(state => state.routes)
    const currentRoute = routes[routes.length -1].name

    const navigation = useNavigation<Nav>()

    return (
        <View style={{display:'flex',paddingBottom:20,marginTop:50,borderTopColor:'#959595',borderTopWidth:1,paddingTop:20, justifyContent:'center',alignItems:'center',flexDirection:'column', width:'100%'}}>

              <Image source={require('../assets/images/footerlogo.png')} style={[ {width:80,height:100, resizeMode: 'contain'}]}/>
              
              
              <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
                      activeOpacity={.7}
                      style={{marginHorizontal:5, paddingVertical:10}}
                  >
                    <Text style={[Styles.mainButtonText, {color:'#070707'}]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Sell')}
                      activeOpacity={.7}
                      style={{marginHorizontal:5, paddingVertical:10}}
                  >
                    <Text style={[Styles.mainButtonText, {color:'#070707'}]}>Sell Smart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Buy')}
                      activeOpacity={.7}
                      style={{marginHorizontal:5, paddingVertical:10}}
                  >
                    <Text style={[Styles.mainButtonText, {color:'#070707'}]}>Buy Smart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Repair')}
                      activeOpacity={.7}
                      style={{marginHorizontal:5, paddingVertical:10}}
                  >
                    <Text style={[Styles.mainButtonText, {color:'#070707'}]}>Repair Smart</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate('CheckLanding')}
                      activeOpacity={.7}
                      style={{marginHorizontal:5, paddingVertical:10}}
                  >
                    <Text style={[Styles.mainButtonText, {color:'#070707'}]}>Test Device</Text>
                </TouchableOpacity>


              <View style={{display:'flex', flexDirection:'row', paddingVertical:20}}>
                <TouchableOpacity
                      activeOpacity={.7}
                      style={{marginHorizontal:10}}
                  >
                    <FontAwesome name="facebook-square" size={33} color="#070707" />
                </TouchableOpacity>
                <TouchableOpacity
                      activeOpacity={.7}
                      style={{marginHorizontal:10}}
                  >
                    <FontAwesome name="instagram" size={33} color="#070707" />
                  </TouchableOpacity>
              </View>
              
                
            </View>
        // <View style={Styles.footer}>
        //     <TouchableOpacity
        //             activeOpacity={.7}
        //             style={Styles.footerButton}
        //             onPress={()=>navigation.navigate('Home')}
        //         >
        //             <Icon name="home" size={20} style={currentRoute == 'Home' ? Styles.FooterButtonActive :  Styles.FooterButtonNotActive} />
        //             <Text style={[Styles.footerButtonText,currentRoute == 'Home' ? Styles.FooterButtonTextActive :  Styles.FooterButtonTextNotActive ]}>Home</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity
        //             activeOpacity={.7}
        //             style={Styles.footerButton}
        //             onPress={()=>navigation.navigate('Sell')}
        //         >
        //             <MaterialIcons name="add-business" size={20} style={currentRoute == 'Sell' || currentRoute == 'ProductTypeInner' || currentRoute == 'SellDetails'  ? Styles.FooterButtonActive :  Styles.FooterButtonNotActive} />
        //             <Text style={[Styles.footerButtonText,currentRoute == 'Sell'  || currentRoute == 'SellDetails' ? Styles.FooterButtonTextActive :  Styles.FooterButtonTextNotActive]}>Sell Smart</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity
        //             activeOpacity={.7}
        //             style={Styles.footerButton}
        //             onPress={()=>navigation.navigate('Buy')}
        //         >
        //             <MaterialCommunityIcons name="cart-arrow-down" size={20} style={currentRoute == 'Buy' || currentRoute == 'BuyProductTypeInner' || currentRoute == 'BuyDetails' ? Styles.FooterButtonActive :  Styles.FooterButtonNotActive} />
        //             <Text style={[Styles.footerButtonText, currentRoute == 'Buy' ? Styles.FooterButtonTextActive :  Styles.FooterButtonTextNotActive]}>Buy Smart</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity
        //             activeOpacity={.7}
        //             style={Styles.footerButton}
        //             onPress={()=>navigation.navigate('Repair')}
        //         >
        //             <MaterialCommunityIcons name="auto-fix" size={20} style={currentRoute == 'Repair' || currentRoute == 'RepairProductTypeInner' || currentRoute == 'RepairDetails' ? Styles.FooterButtonActive :  Styles.FooterButtonNotActive} />
        //             <Text style={[Styles.footerButtonText, currentRoute == 'Repair' || currentRoute == 'RepairProductTypeInner' || currentRoute == 'RepairDetails'? Styles.FooterButtonTextActive :  Styles.FooterButtonTextNotActive]}>Repear Smart</Text>
        //     </TouchableOpacity>

        // </View>
    )
}

export default Footer

