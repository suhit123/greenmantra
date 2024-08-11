import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

const Item = ({icon,text,onPress}:any) => {
    return(
        <TouchableOpacity style={[styles.flexBox,{
            padding: 10,
            width: '100%',
          }]} onPress={onPress}>
            <View style={[styles.flexBox,{
              gap: 10,
            }]}>
              <Image source={icon} width={50} height={50} style={{
                width: 20,
                height: 20,
              }} />
              <Text style={{
                fontSize: 16,
              }}>{text}</Text>
            </View>
            <Image source={require('../../assets/icons/rightArrow.png')} width={50} height={50} style={{
                width: 20,
                height: 20,
              }} />
          </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    flexBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
});

export default Item;