import { Text } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
const ConstButton = ({ title, onPress,backgroundColor='black' }:{
    title:string,
    onPress:()=>void,
    backgroundColor?:string
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,backgroundColor==='black'?{
    }:{
        backgroundColor:backgroundColor,
        borderWidth:1,
        borderColor:'black'
    }]}>
      <Text style={[styles.title,
      backgroundColor==='black'?{ 
      }:{
          color:'black'
      }
      ]}>{title}</Text>
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