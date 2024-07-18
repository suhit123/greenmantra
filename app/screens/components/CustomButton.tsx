import { Text } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
const ConstButton = ({ title, onPress }:{
    title:string,
    onPress:()=>void
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'black',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    title:{
        color:'white',
        fontSize:16
    }
});
export default ConstButton;