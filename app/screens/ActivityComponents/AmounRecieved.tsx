import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import CustomSelectOption from "../components/CustomSelectOption";
import CustomTextInput from "../components/TextInputCustom";
import ConstButton from "../components/CustomButton";
import { useState } from "react";
import ConfirmMessage from "../components/ConfirmMessage";

const AmountRecieved = () => {
    const [amountRecieved, setAmountRecieved] = useState('');
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <View>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 5,
              fontSize: 16,
              color: 'black',
              fontWeight: 'semibold',
            }}>
            List
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <View
                style={{
                  flex: 3,
                }}>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'semibold',
                  }}>
                  Task description
                </Text>
                <View
                  style={{
                    padding: 11,
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    borderRadius: 5,
                  }}>
                  <Text>Amount Recieved</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                }}>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'semibold',
                  }}>
                  Amount (In Rupee)
                </Text>
               
                  <CustomTextInput
                    value={amountRecieved}
                    placeholder="Enter Amount"
                    label="Amount"
                    onChange={text => setAmountRecieved(text)}
                    keyboard="numeric"
                    multiline={false}
                    showLabel={false}
                    />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <CustomTextInput
              value={''}
              placeholder="Add notes"
              label="Notes"
              onChange={text => console.log(text)}
              multiline={true}
              lines={10}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ConfirmMessage message={'lhgukyjfthdrgxefzsda'} showModal={showModal} setShowModal={setShowModal}/>
          <ConstButton
            title="Submit"
            onPress={()=>{
                console.log('Button pressed');
                setShowModal(true);
            }}
          />
        </View>
      </>
    );
};
const styles = StyleSheet.create({});
export default AmountRecieved;