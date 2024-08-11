import React, { useState } from 'react';
import {Text} from 'react-native-paper';
import CustomTextInput from './components/TextInputCustom';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomSelectOption from './components/CustomSelectOption';
import ConstButton from './components/CustomButton';
import SellActivity from './ActivityComponents/Sell';
import AddStock from './ActivityComponents/AddStock';
import AmountRecieved from './ActivityComponents/AmounRecieved';
import AddAction from './ActivityComponents/AddAction';
const adminactivities = [
  {title: 'Sell', icon: 'Sell'},
  {title:'Add Action', icon: 'Add Action'},
  {title: 'Add Stock', icon: 'Add Stock'},
  {title: 'Amount Recieved', icon: 'Amount Recieved'},
];
const Activity = () => {
  const [currentActivity, setCurrentActivity] = useState({
    title: 'Add Stock',
    icon: 'Add Stock',
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{
      backgroundColor: 'white',
    }}>
    <View style={styles.container}>
      <CustomTextInput
        value={Date().toString()}
        placeholder="Enter your name"
        label="Date"
        onChange={text => {}}
        multiline={false}
        editable={false}
      />
      <CustomSelectOption items={adminactivities} label={'Activity'} value={currentActivity} setSelect={setCurrentActivity} />
      {
        currentActivity.title === 'Sell' && <SellActivity />
      }
      {
        currentActivity.title === 'Add Stock' && <AddStock />
      }
      {
        currentActivity.title === 'Add Action' && <AddAction />
      }
      {
        currentActivity.title === 'Amount Recieved' && <AmountRecieved />
      }
    </View>
    
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    gap: 10,
  },
});

export default Activity;
