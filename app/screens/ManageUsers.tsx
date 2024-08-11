import {StyleSheet, View} from 'react-native';
import React from 'react';
import Item from './components/Item';
import ConstButton from './components/CustomButton';
import {useNavigation} from '@react-navigation/native';
const ManageUsers = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      }}>
      <Item
        icon={require('../assets/icons/addUser.png')}
        text={'Add User'}
        onPress={() => {
          navigation.navigate('AddUser' as never);
        }}
      />
      <Item
        icon={require('../assets/icons/manageUser.png')}
        text={'Manage User'}
        onPress={() => {
          navigation.navigate('ManageUser' as never);
        }}
      />
      <Item
        icon={require('../assets/icons/removeUser.png')}
        text={'Update User'}
        onPress={() => {
          navigation.navigate('UpdateAndDeleteUser' as never);
        }}
      />
    </View>
  );
};
export default ManageUsers;
