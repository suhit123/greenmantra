import { StyleSheet, View} from 'react-native';
import React from 'react';
import Item from './components/Item';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AdminProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    }}>
      <Item icon={require('../assets/icons/User.png')} text={'Admin Settings'} onPress={()=>{
        navigation.navigate('AdminSettings' as never);
      }}/>
      <Item icon={require('../assets/icons/Group.png')} text={'Manage Users'} onPress={()=>{
        navigation.navigate('ManageUsers' as never);
      }}/>
      <Item icon={require('../assets/icons/Sign_out.png')} text={'Logout'} onPress={
        () => {
          const handleLogout = async () => {
            await AsyncStorage.removeItem('role');
            await AsyncStorage.removeItem('token');
            navigation.navigate('Login' as never);
          };
          handleLogout();
        }
      }/>
    </View>
  );
};
export default AdminProfile;
