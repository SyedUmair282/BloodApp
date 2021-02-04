/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Item, Input, Label, Button } from 'native-base';
import Navigate from './main/navigation';
import { Provider } from 'react-redux';
import store from './store';
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';

function App(){

 
  return(
    <Provider store={store}>
      <Navigate/>
    </Provider>
  );
  
  
}

export default App;
