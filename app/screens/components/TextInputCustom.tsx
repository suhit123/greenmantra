import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const CustomTextInput = ({label,placeholder,value,onChange,multiline=false,lines=1}:{
    label:string,
    placeholder:string,
    value:string,
    onChange:(text:string)=>void
    multiline:boolean
    lines?:number
}) => {
    return(
        <View >
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChange}
                disableFullscreenUI={true}
                multiline={multiline}
                numberOfLines={lines}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    label:{
        marginBottom:5,
        fontSize:14,
        color:'black',
        fontWeight:'semibold'
    },
    input:{
        borderColor:'lightgray',
        borderWidth:1,
        borderRadius:5,
        padding:5,
        paddingHorizontal:10,
        fontSize:14
    }
});

export default CustomTextInput;