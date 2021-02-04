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
  BackHandler,
  ActivityIndicator
} from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import {connect} from 'react-redux';
import {create_user} from '../store/action/index';


class Account extends React.Component{
  constructor(){
    super()
    this.state={
      email:null,
      password:null,
      
      
    }  
  }
  validate=()=>{
    if(this.state.email===null||this.state.password){
      Alert.alert("Attention!", "Please fill all fields", [{ text: "Ok", onPress: () => console.log("Alert close") }])
    }
  }
  clear=()=>{
    this.setState({
      email:null,
      password:null,
    })
  }
  
  render(){
    
    return(
      
      <View style={styles.body}>
        <StatusBar backgroundColor="black"/>
        <View style={styles.body2}>
          <View>
            <Text style={{fontSize:25,textAlign:"center",fontFamily:"times new roman",marginTop:10}}>Sign up Page</Text>
          <Item floatingLabel style={{marginTop:10,width:260,alignSelf:"center"}}>
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={(e)=>this.setState({email:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:15,width:260,alignSelf:"center"}}>
              <Label>Password</Label>
              <Input value={this.state.password} secureTextEntry={true} onChangeText={(e)=>this.setState({password:e})}  />
            </Item>
            <Button info style={{alignSelf:"center",height:35,marginTop:40,width:100 }}><Text style={{margin:25}} onPress={this.state.email&&this.state.password?()=>{this.props.create_users(this.state.email,this.state.password);this.clear()}:()=>this.validate()} > Sign up </Text></Button>
            
            
         
          </View>
            
          
        </View>
        <View style={{marginTop:550}}>
          <TouchableOpacity style={styles.button3} activeOpacity={0.9} onPress={()=>this.props.navigation.navigate("Login")}>
            <Text style={styles.start} >Go to back</Text>
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
      
      body2:{
        
        
        borderWidth:2,
        width:300,
        height:290,
        marginLeft:30,
        marginTop:-120,
        borderColor:"white",
        borderRadius:30,
        backgroundColor:"white",
        position:"absolute",
        top:200,
        
        
      },
      start:{
        color:"black",
        fontFamily:'times new roman',
        fontSize:18
      },
      button3:{
        backgroundColor:"white",
        width:200,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        position: 'absolute',
        bottom:40,
        alignSelf:"center"  
      }
  
});
// const mapstateToProps=(state)=>({
//   animating:state.data
// })
const mapDispatchToProps=(dispatch)=>({
  create_users:(email,pass) => dispatch(create_user(email,pass))
})

export default connect(null,mapDispatchToProps) (Account);