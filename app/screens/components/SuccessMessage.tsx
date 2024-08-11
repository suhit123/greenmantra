import {Image, Modal, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const SuccessMessage = ({
  message,
  showModal,
  setShowModal,
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}>

      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          padding: 20,
            borderRadius: 10,   
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 100,
            marginTop: 250,

        }}>
        <Image source={require('../../assets/icons/successMessage.jpg')} style={{width: 100, height: 100, alignSelf:'center'}} />
        <Text style={{
            fontSize: 18,
            fontWeight: 'semibold',
            textAlign:'center',
        }}>{message}</Text>
        <TouchableOpacity style={{
            width:'100%',
            borderColor:'black',
            borderWidth:1,
            borderRadius:5,
            padding:10,
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
        }} onPress={()=>{
            setShowModal(!showModal);
        }}><Text>Okay</Text></TouchableOpacity>
      </View>
    </Modal>
  );
};
export default SuccessMessage;
