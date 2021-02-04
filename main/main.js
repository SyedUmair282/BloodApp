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
import { Item, Input, Label, Button } from 'native-base';


class Menu extends React.Component{
render(){
    return(
      <View style={styles.body}>
        
        <View style={styles.body2}>
          <TouchableOpacity activeOpacity={0.4} style={{width:355,height:275,backgroundColor:"white"}} onPress={()=>this.props.navigation.navigate('Blooddonor')}><Image source={require('./donor.jpg')} style={{width:320,height:220,alignSelf:"center",marginTop:28}}/></TouchableOpacity>
        </View>
        <View style={styles.body3}>
          <TouchableOpacity activeOpacity={0.5} style={{width:360,height:280,backgroundColor:"black"}} onPress={()=>this.props.navigation.navigate('Bloodrequest')}><Image source={require('./request.png')} style={{width:203,height:203,alignSelf:"center",marginTop:28}}/></TouchableOpacity>
        </View>
        
      </View>
    );
}
  
}
const styles = StyleSheet.create({
  
  body: {
    flex:1,
    backgroundColor:"white"
  },
  body2:{
    width:360,
    height:280,
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"white"
  },
  body3:{
    width:360,
    height:290,
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"black"
  }
  

  
  
});

export default Menu;