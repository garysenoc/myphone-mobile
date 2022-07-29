import React, { ReactElement, useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import UserIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation,useNavigationState } from '@react-navigation/native';

type Nav = {
  navigate: (value: string) => void;
}

const InnerHeader = () => {

    const navigation = useNavigation<Nav>()
    

    const [backScreen, setBackScreen] = useState('');
    const routes = useNavigationState(state => state.routes)
    const currentRoute = routes[routes.length -1].name

    useEffect(() => {

        switch (currentRoute) {
            case 'Sell':
                setBackScreen('Home');
                break;
            case 'ProductTypeInner':
                setBackScreen('Sell');
                break;
            case 'SellDetails':
                setBackScreen('ProductTypeInner');
                break;
            case 'Buy':
                setBackScreen('Home');
                break;
            case 'BuyProductTypeInner':
                setBackScreen('Buy');
                break;
            case 'BuyDetails':
                setBackScreen('BuyProductTypeInner');
                break;
            case 'Repair':
                setBackScreen('Home');
                break;
            case 'RepairProductTypeInner':
                setBackScreen('Repair');
                break;
            case 'RepairDetails':
                setBackScreen('RepairProductTypeInner');
                break;
            case 'Login':
                    setBackScreen('Home');
                    break;
            case 'Register':
                    setBackScreen('Login');
                    break;
            case 'Cart':
                    setBackScreen('Home');
                    break;
            case 'Checkout':
                    setBackScreen('Cart');
                    break;
            case 'Confirmation':
                    setBackScreen('Checkout');
                    break;
                    
                
            default:
                setBackScreen('Home');
                break;
        }
    }, [])


    return (
        <View style={s.header}>
            <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate(backScreen)}
                >
                <Octicons name="chevron-left" size={28} color="#070707" style={{width:50}} />
            </TouchableOpacity>
            <View style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity
                    activeOpacity={.7}
                >
                    <AntDesign name='search1' size={23} color="#070707" />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={{marginLeft:15}}
                    onPress={()=>navigation.navigate('Cart')}
                >
                    <Icon name="bag" size={23} color="#070707" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{marginLeft:15}}
                    activeOpacity={.7}
                    onPress={()=>navigation.navigate('Login')}
                >
                    <UserIcon name="account-circle-outline" size={30} color="#070707" />
                </TouchableOpacity>
            </View>
            
            
           
        </View>
    )
}

const s = StyleSheet.create({
    header: {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:25,
      paddingHorizontal:10,

    },
    logo:{
        height:80,
        width:90
    }
  });

  export default InnerHeader;