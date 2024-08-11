import { StyleSheet, View} from 'react-native';
import React from 'react';
import Item from './components/Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const AdminSettings = () => {
  const navigation = useNavigation();
  return (
    <View style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    }}>
      <Item icon={require('../assets/icons/User.png')} text={'Inventory Settings'} />
      <Item icon={require('../assets/icons/Group.png')} text={'Preferences'} />

    </View>
  );
};
export default AdminSettings;
