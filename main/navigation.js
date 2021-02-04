import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Account from './account';
import Menu from './main';
import Blooddonor from './blooddonor';
import Bloodrequest from './bloodrequest';
import Details from './details';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';


const Stack = createStackNavigator();

function navigate(props) {
  const logout=()=>{
    auth().signOut()
    .then(() => console.log('User signed out!'));
    {props.data.navigation.navigate('Login'),Alert.alert("Attention!","Log out successfully",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])}
    
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen name="Login" component={Login} options={{ title: 'Blood App',headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            fontFamily:"times new roman",
            alignSelf:"center"
          },
          headerStyle: {
            backgroundColor: '#990000',
          } }} />


          <Stack.Screen name="Account" component={Account} options={{ title: 'Create account',headerTitleStyle: {
            
            fontSize:30,
            fontFamily:"times new roman",
            alignSelf:"center",
            fontWeight: 'bold'
            
          },
          headerStyle: {
            backgroundColor: '#ff8080',
          },
          headerLeft:null }} />

          <Stack.Screen name="Menu" component={Menu} options={{ title: 'Main menu',headerTitleStyle: {
            
            fontSize:25,
            fontFamily:"times new roman",
            fontWeight: 'bold'
            
          },
          headerStyle: {
            backgroundColor: 'red',
          },
          headerLeft:null,
          headerRight: () => (
            <Button
              onPress={logout}
              title="Logout"
              color="#ed0909"
            />
          ) }} />

          <Stack.Screen name="Blooddonor" component={Blooddonor} options={{ title: 'Registration Form',headerTitleStyle: {
            
            fontSize:25,
            fontFamily:"times new roman",
            fontWeight: 'bold',
            alignSelf:"center",
            color:"red"
            
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft:null }} />

          <Stack.Screen name="Bloodrequest" component={Bloodrequest} options={{ title: 'Available blood donations',headerTitleStyle: {
            
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold',
            color:"red"
            
          },
          headerStyle: {
            backgroundColor: 'white',
          }}} />

          <Stack.Screen name="Details" component={Details} options={{ title: 'Details of donor',headerTitleStyle: {
            
            fontSize:25,
            fontFamily:"times new roman",
            fontWeight: 'bold',
            color:"red"
            
          },
          headerStyle: {
            backgroundColor: 'white',
          }}} />
          

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapstateToProps=(state)=>({
  data:state.data
})
export default connect(mapstateToProps,null)(navigate);