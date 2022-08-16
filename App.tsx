/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//Screens
import Home from './screens/Home';
import Sell from './screens/Sell';
import ProductTypeInner from './screens/ProductTypeInner';
import SellDetails from './screens/SellDetails';
import Buy from './screens/Buy';
import BuyProductTypeInner from './screens/BuyProductTypeInner';
import BuyDetails from './screens/BuyDetails';
import RepairProductTypeInner from './screens/RepairProductTypeInner';
import Repair from './screens/Repair';
import RepairDetails from './screens/RepairDetails';
import Login from './screens/Login';
import Register from './screens/Register';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Confirmation from './screens/Confirmation';
import DeviceInformation from './screens/TestSreens/DeviceInformation';
import Proximity from './screens/TestSreens/Proximity';
import Gyro from './screens/TestSreens/Gyro';
import Accelerometer from './screens/TestSreens/Accelerometer';
import FaceId from './screens/TestSreens/FaceId';
import Microphone from './screens/TestSreens/Microphone';
import DeviceButton from './screens/TestSreens/DeviceButton';
import Display from './screens/TestSreens/Display';
import TouchResponse from './screens/TestSreens/TouchResponse';
import Charging from './screens/TestSreens/Charging';
import Connectivity from './screens/TestSreens/Connectivity';
import Call from './screens/TestSreens/Call';
import Camera from './screens/TestSreens/Camera';
import Headset from './screens/TestSreens/Headset';
import Speaker from './screens/TestSreens/Speaker';
import Vibration from './screens/TestSreens/Vibration';
import Cosmetic from './screens/TestSreens/Cosmetic';
import Summary from './screens/TestSreens/Summary';
import Result from './screens/TestSreens/Result';
import CheckLanding from './screens/TestSreens/CheckLanding';
import EnterCode from './screens/TestSreens/EnterCode';
import CameraPicture from './screens/TestSreens/CameraPicture';
import Orders from './screens/Orders';
import MyProfile from './screens/MyProfile';
import MyCommission from './screens/MyCommission';
import BrandAmbassador from './screens/BrandAmbassador';
import CustomerService from './screens/CustomerService';
import OrderDetails from './screens/OrderDetails';
import RepairIssue from './screens/RepairIssue';
import RepairEstimate from './screens/RepairEstimate';
import RepairDate from './screens/RepairDate';
import RepairConfirm from './screens/RepairConfirm';
import {AnalystLibTest} from './screens/AnalystLibTest';

const Section: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          // ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName="AnalystLibTest">
        <Stack.Screen name="AnalystLibTest" component={AnalystLibTest} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Sell" component={Sell} />
        <Stack.Screen name="ProductTypeInner" component={ProductTypeInner} />
        <Stack.Screen name="SellDetails" component={SellDetails} />

        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen
          name="BuyProductTypeInner"
          component={BuyProductTypeInner}
        />
        <Stack.Screen name="BuyDetails" component={BuyDetails} />

        <Stack.Screen name="Repair" component={Repair} />
        <Stack.Screen
          name="RepairProductTypeInner"
          component={RepairProductTypeInner}
        />
        <Stack.Screen name="RepairDetails" component={RepairDetails} />
        <Stack.Screen name="RepairIssue" component={RepairIssue} />
        <Stack.Screen name="RepairEstimate" component={RepairEstimate} />
        <Stack.Screen name="RepairDate" component={RepairDate} />
        <Stack.Screen name="RepairConfirm" component={RepairConfirm} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MyProfile" component={MyProfile} />

        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Cart} />
        {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
        <Stack.Screen name="Confirmation" component={Cart} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />

        {/* TESTING SCREENS */}

        <Stack.Screen name="CheckLanding" component={CheckLanding} />
        <Stack.Screen name="EnterCode" component={EnterCode} />

        <Stack.Screen name="DeviceInformation" component={DeviceInformation} />
        <Stack.Screen name="Proximity" component={Proximity} />
        <Stack.Screen name="Gyro" component={Gyro} />
        <Stack.Screen name="Accelerometer" component={Accelerometer} />
        <Stack.Screen name="FaceId" component={FaceId} />
        <Stack.Screen name="Microphone" component={Microphone} />
        <Stack.Screen name="DeviceButton" component={DeviceButton} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="TouchResponse" component={TouchResponse} />
        <Stack.Screen name="Charging" component={Charging} />
        <Stack.Screen name="Connectivity" component={Connectivity} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="CameraPicture" component={CameraPicture} />

        <Stack.Screen name="Headset" component={Headset} />
        <Stack.Screen name="Speaker" component={Speaker} />
        <Stack.Screen name="Vibration" component={Vibration} />
        <Stack.Screen name="Cosmetic" component={Cosmetic} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="Result" component={Result} />

        <Stack.Screen name="MyCommission" component={MyCommission} />
        <Stack.Screen name="BrandAmbassador" component={BrandAmbassador} />
        <Stack.Screen name="CustomerService" component={CustomerService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bodyTheme: {
    backgroundColor: '#070707',
    height: '100%',
    paddingHorizontal: 15,
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

export default App;
