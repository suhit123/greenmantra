/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DashboardNavigator from './app/navigaton/dashboard';
import Login from './app/screens/Login';
import AuthNavigator from './app/navigaton/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const checkAuth = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLogin, setIsLogin] =useState(false);
  useEffect(() => {
    checkAuth().then((res) => {
      setIsLogin(res);
    }); 
  }, []);
  return (
    
    <SafeAreaView style={{
      backgroundColor:'white',
      flex:1
    }}>
      <AuthNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
