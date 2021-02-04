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
import database from '@react-native-firebase/database';



class Bloodrequest extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      Blood:"",
      city:"",
      phone:"",
      name:"",
      age:"",
      file:"",
      activity:true
    }
  }

  componentDidMount(){

    database().ref('/Blood Bank/Donor Details').on('child_added', datas => {
    // console.log('User data: ', datas.val());
    let obj={
      Blood:datas.val().Blood,
      city:datas.val().city,
      phone:datas.val().phone,
      name:datas.val().name,
      age:datas.val().age,
      file:datas.val().file
    }
    this.setState({
      data:[...this.state.data,obj],
      activity:false
    })
    });

  }
   
  
  render(){
    return(
      <View style={styles.body}>
        <ScrollView style={{marginBottom:10}}>
        {this.state.activity?<ActivityIndicator style={{marginTop:10}} size="large" color="#fff" />:null}
        {this.state.data.map((v,i)=>{
          return <View key={i} style={styles.body2}>
          <View style={{width:300,alignSelf:"center",marginTop:15,height:75,borderBottomWidth:2}}>
          <Text style={styles.start}>Blood Group: {v.Blood}</Text>
          <Text style={styles.start}>City: {v.city}</Text>
          <Text style={styles.start}>Phone number: {v.phone}</Text>
          </View>
          <View style={styles.body3}>
            <Button color="#ff5c5c" title={"More details"} onPress={()=>this.props.navigation.navigate('Details',{Blood:v.Blood,
            city:v.city,phone:v.phone,name:v.name,age:v.age,file:v.file})}/>
          </View>
        </View>
        })}
        



        </ScrollView>
        
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
      color:"black",
      fontFamily:'times new roman',
      fontSize:18,
      alignSelf:"center"
    },
    body2:{
      borderWidth:2,
      width:340,
      height:148,
      alignSelf:"center",
      marginTop:10,
      borderRadius:20,
      backgroundColor:"white",
      borderColor:"white"
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

export default Bloodrequest;