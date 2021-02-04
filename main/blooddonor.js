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
  Button,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Item, Input, Label} from 'native-base';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';



class Blooddonor extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      age:"",
      city:"",
      phone:"",
      blood:"",
      image:"",
      type:"",
      file:""
    }
  }
   
  open_picker=()=>{
   
    let options3={
       
      storageOptions: {
        skipBackup: true,
        path: 'images',
        
      },
    }
    ImagePicker.launchImageLibrary(options3, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //const source = { uri: response.uri };
    
        // You can also display the image using data:
        //const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        console.log("data===>",response.uri)
        this.setState({
          image:response.uri,
          type:response.type
        })
        this.submit();
        
      }
    });
  }
  submit=async()=>{
    
    const upload=this.state.image;
    let file=upload.substring(upload.lastIndexOf('/')+1);
    var task=storage().ref(file).putFile(upload)
    try{
      await task
      console.log("uploaded image")
      const url = await storage().ref(file).getDownloadURL();
      console.log("Url:==>",url)
      this.setState({
        file:url
      })
      
    }
    catch(e){
      console.log(e)
    }
    
    
    
  }

  set_data=()=>{
    if(this.state.name&&this.state.phone&&this.state.age&&this.state.city&&this.state.type&&this.state.file&&this.state.blood){
    let obj={
      name:this.state.name,
      age:this.state.age,
      city:this.state.city,
      phone:this.state.phone,
      Blood:this.state.blood,
      file:this.state.file
    }
    database().ref('Blood Bank').child('Donor Details').push(obj)
    console.log("Object data is:====>",obj)
    this.setState({
      name:null,
      age:null,
      city:null,
      phone:null,
      blood:null,
      image:null,
      type:null,
      file:null
    })
    Alert.alert("Attention!","Thanks for your donation",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])
    }
    else{
      this.values()
    }
  }
 
  values=()=>{
    Alert.alert("Attention!","Please fill all fields",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])
  }


  render(){
    return(
        <View style={styles.body}>
            <View style={styles.body2}>
            
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Name</Label>
              <Input value={this.state.name} onChangeText={(e)=>this.setState({name:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Age</Label>
              <Input value={this.state.age} keyboardType="phone-pad" maxLength={2} onChangeText={(e)=>this.setState({age:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>City</Label>
              <Input value={this.state.city} onChangeText={(e)=>this.setState({city:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Phone no</Label>
              <Input value={this.state.phone} keyboardType="phone-pad" maxLength={11} onChangeText={(e)=>this.setState({phone:e})} />
            </Item>
            <View style={{borderBottomWidth:1,borderBottomColor:"lightgray",width:260,alignSelf:"center"}}>
              <Picker
              
                selectedValue={this.state.blood}
                style={{height: 50, width: 275,marginTop:15,alignSelf:"center"}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({blood: itemValue})}>
                <Picker.Item  label="Select your blood group" value="0" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
              </Picker>
            </View>
            <View style={{marginTop:20,width:200,alignSelf:"center"}}>
            <Text style={{alignSelf:"center",fontSize:15}}>{this.state.type}</Text>
            <Button color="#ff5c5c" onPress={this.open_picker} title={"Choose your image"}  />
            <Text style={{textAlign:"center"}}>width:150px and height:250px</Text>
            </View>
            </View>
            
            <TouchableOpacity onPress={()=>this.set_data()} style={styles.button3} activeOpacity={0.9}>
            <Text style={styles.start}>Donate</Text>
            </TouchableOpacity>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  
    body: {
      flex:1,
      backgroundColor:"red",
    },
    start:{
      color:"red",
      fontFamily:'times new roman',
      fontSize:18
    },
    body2:{
      
      
      borderWidth:2,
      width:300,
      height:450,
      alignSelf:"center",
      marginTop:25,
      borderRadius:20,
      backgroundColor:"white",
      borderColor:"white"
      
      
      
    },
    button3:{
      backgroundColor:"white",
      width:100,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      alignSelf:"center",
      marginTop:25 
    }
    
    
  });

export default Blooddonor;