import auth from '@react-native-firebase/auth';
import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
    TouchableOpacity,
    BackHandler,
    ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const create_user = (email, pass) => {
    
    return (dispatch) => {
        auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
                dispatch({ type: "SETDATA", email: email, pass: pass})
                Alert.alert("Attention!", "Sign up successfully", [{ text: "Ok", onPress: () => console.log("Alert close")  }])
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert("Attention!", "User already exist", [{ text: "Ok", onPress: () => console.log("Alert close") }])
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert("Attention!", "Please enter valid email address", [{ text: "Ok", onPress: () => console.log("Alert close") }])
                }
                if (error.code === 'auth/network-request-failed') {
                    Alert.alert("Attention!", "Please check your internet connection", [{ text: "Ok", onPress: () => console.log("Alert close") }])
                }

                console.error(error);
            });
    }

}
const sign_in=(email,pass,data)=>{
    return (dispatch) => {
        auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                dispatch({ type: "SIGNDATA", email: email, pass: pass, data:data})
                console.log('Sign in successfully');
                {data.navigation.navigate("Menu")};
                Alert.alert("Attention!","Log in successfully",
                [{text:"Ok",onPress:()=>console.log("Alert closed")}])
                
            })
            .catch(error => {

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert("Attention!", "please enter valid email", [{ text: "Ok", onPress: () => console.log("Alert close") }])
                }
                if (error.code === 'auth/wrong-password') {
                    console.log('That password is invalid!');
                    Alert.alert("Attention!", "Please enter valid password", [{ text: "Ok", onPress: () => console.log("Alert close") }])
                }

                console.error(error);
            });
    }
}
export {
    create_user,
    sign_in
}