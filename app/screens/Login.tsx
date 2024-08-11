import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomTextInput from './components/TextInputCustom';
import React, {useEffect, useState} from 'react';
import ConstButton from './components/CustomButton';
import axios from 'axios';
import {API_ROOT} from '../constants/ApiConstants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ErrorMessage from './components/ErrorMessage';
import { checkAuth } from '../../App';
// import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = async () => {
    await axios.post(`${API_ROOT}/users/login`, {
      name: username,
      password: password,
    }).then((response) => {
      const data = response?.data;
      const storeToken = async (token: string) => {
        try {
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('role', JSON.stringify(data?.role));
          navigation.navigate('HomeTab' as never);
        } catch (e) {
          console.log(e);
        }
      };
      storeToken(data?.token);
    }).catch((error) => {
      console.log(error?.response?.data);
      setErrorMessage(error?.response?.data?.message);
      setShowModal(true);
    });
  };
  // useEffect(() => {
  //   checkAuth().then((res:any) => {
  //     setIsLogin(res);
  //   });
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      checkAuth().then((res:any) => {
        setIsLogin(res);
      });
    }, []),
  );
  if(isLogin===null){
    return <Text>loading</Text>;
  }
  if(isLogin){
    navigation.navigate('HomeTab' as never);
    return <></>;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          padding: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'semibold',
        }}>
        GREENMANTRA
      </Text>
      <Text
        style={{
          width: '70%',
          fontSize: 30,
          paddingHorizontal: 20,
          color: 'gray',
        }}>
        Hello there! Welcome back
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: '#000',
          marginHorizontal: 20,
          marginTop: 10,
          width: '10%',
        }}></View>
      <View
        style={{
          padding: 20,
          gap: 10,
        }}>
        <CustomTextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={text => {
            setUsername(text);
          }}
          multiline={false}
        />
        <CustomTextInput
          label="Password"
          placeholder="**********"
          value={password}
          onChange={text => {
            setPassword(text);
          }}
          multiline={false}
          type='password'
        />
        <ConstButton
          title="Login"
          onPress={handleLogin}
        />
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 15,
              marginTop: 10,
            }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>
      <ErrorMessage
        message={errorMessage}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default Login;
