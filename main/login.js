import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Item, Input, Label, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux';
import {sign_in} from '../store/action/index';
import auth from '@react-native-firebase/auth';


class Login extends React.Component{
  constructor(){
    super()
    this.state={
      email:null,
      password:null
        
    }  
  }
  componentDidMount() {
    SplashScreen.hide();

    auth().onAuthStateChanged((user) => {
      if (user) {
        
        console.log("user signed in")
        this.props.navigation.navigate("Menu")
        
      } else {
        console.log("user signed out")
        this.props.navigation.navigate("Login")
      }
    });

  }
  exit=()=>{
    Alert.alert("Attention!","Do you want to exit?",
    [{text:"Yes",onPress:()=>BackHandler.exitApp()},{text:"No"}])
  }
  values=()=>{
    Alert.alert("Attention!","Please fill all fields",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])
  }
 
    
  
  render(){
    
    return(
      
      <View style={styles.body}>
        <StatusBar backgroundColor="black"/>
        <View style={styles.body2}>
          <View>
            <Text style={{fontSize:25,textAlign:"center",fontFamily:"times new roman",marginTop:10}}>Login Page</Text>
          <Item floatingLabel style={{marginTop:10,width:260,alignSelf:"center"}}>
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={(e)=>this.setState({email:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:15,width:260,alignSelf:"center"}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} value={this.state.password} onChangeText={(e)=>this.setState({password:e})}/>
            </Item>
            <Button danger style={{alignSelf:"center",height:35,marginTop:20,width:100 }}><Text style={{margin:25}}onPress={this.state.email&&this.state.password?()=>this.props.sign_in(this.state.email,this.state.password,this.props):()=>this.values()}> Sign in </Text></Button>
            <Text style={{alignSelf:"center",marginTop:20}}>_________________or_________________</Text>
            <Button  danger style={{alignSelf:"center",height:35,marginTop:30,width:200 }} onPress={()=>this.props.navigation.navigate("Account")}><Text style={{margin:25}}> Create a new account</Text></Button>
          </View> 
        </View>

        <View style={{marginTop:550}}>
          <TouchableOpacity onPress={this.exit} style={styles.button3} activeOpacity={0.9}>
            <Text style={styles.start}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>{Alert.alert("About","This app is for blood donor and blood request.",[{text:"Close",onPress:()=>console.log("alert closed")}])}} activeOpacity={0.9}>
            <Text style={styles.start}>!</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    )
  }
  
  
}

const styles = StyleSheet.create({
  
  body: {
    flex:1,
    backgroundColor:"red",
  },
  start:{
    color:"black",
    fontFamily:'times new roman',
    fontSize:18
  },
  body2:{
    
    
    borderWidth:2,
    width:300,
    height:350,
    marginLeft:30,
    marginTop:-140,
    borderColor:"white",
    borderRadius:30,
    backgroundColor:"white",
    position:"absolute",
    top:200,
    
    
  },
  button3:{
    backgroundColor:"white",
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    position: 'absolute',
    bottom:15,
    right:15  
  },
  button2:{
    backgroundColor:"white",
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    position: 'absolute',
    bottom:15,
    left:15
  }
  
});
// const mapstateToProps=(state)=>({
//   users:state.name
// })
const mapDispatchToProps=(dispatch)=>({
  sign_in:(email,pass,data) => dispatch(sign_in(email,pass,data))
})
export default connect(null,mapDispatchToProps) (Login);