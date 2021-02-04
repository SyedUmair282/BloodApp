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
  Image,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Item, Input, Label} from 'native-base';




function Details({route}){
    const {Blood,name,age,phone,file,city}=route.params;
  
    
    return(
      <View style={styles.body}>
          <View style={styles.body2}>
            <Image style={{width:150,height:250,alignSelf:"center",marginBottom:20}} source={{uri:file}}/>
            <Text style={styles.start}>Name : {name}</Text>
            <Text style={styles.start}>Age : {age}</Text>
            <Text style={styles.start}>Phone : {phone}</Text>
            <Text style={styles.start}>Blood type : {Blood}</Text>
            <Text style={styles.start}>City : {city}</Text>
          </View>
        
      </View>
    );
  
}
const styles = StyleSheet.create({
  
    body: {
      flex:1,
      backgroundColor:"red",
    },
    start:{
      color:"black",
      fontFamily:'times new roman',
      fontSize:20,
      marginBottom:15,
      marginLeft:10
    },
    body2:{
      borderWidth:2,
      width:320,
      height:498,
      alignSelf:"center",
      marginTop:30,
      borderRadius:10,
      backgroundColor:"white",
      borderColor:"white",
      justifyContent:"flex-end"
    },
    body3:{
     
      width:160,
      height:50,
      alignSelf:"center",
      marginTop:10
    },
    button3:{
      backgroundColor:"white",
      width:100,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      alignSelf:"center",
      marginTop:25,
    }
    
    
  });

export default Details;