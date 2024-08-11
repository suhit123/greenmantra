import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomSelectOption from '../components/CustomSelectOption';
import ConstButton from '../components/CustomButton';
import CustomTextInput from '../components/TextInputCustom';
import {useState} from 'react';
const qtyItems = [
  {title: '1', icon: '1'},
  {title: '2', icon: '2'},
  {title: '3', icon: '3'},
  {title: '4', icon: '4'},
  {title: '5', icon: '5'},
  {title: '6', icon: '6'},
  {title: '7', icon: '7'},
  {title: '8', icon: '8'},
  {title: '9', icon: '9'},
  {title: '10', icon: '10'},
  {title: '11', icon: '11'},
  {title: '12', icon: '12'},
  {title: '13', icon: '13'},
  {title: '14', icon: '14'},
  {title: '15', icon: '15'},
];
const SellActivity = () => {
  const [smallCoverQty, setSmallCoverQty] = useState({
    title: '1',
    icon: '1',
  });
  const [bigCoverQty, setBigCoverQty] = useState({
    title: '1',
    icon: '1',
  });
  const [smallCoverPrice, setSmallCoverPrice] = useState(10);
  const [bigCoverPrice, setBigCoverPrice] = useState(20);
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
                <Text>Small Cover</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomSelectOption
                items={qtyItems}
                label={'Qty'}
                value={smallCoverQty}
                setSelect={setSmallCoverQty}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'semibold',
                }}>
                Price
              </Text>
              <View
                style={{
                  padding: 11,
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  borderRadius: 5,
                }}>
                <Text>₹ {parseInt(smallCoverQty.title)*smallCoverPrice}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 3,
              }}>
              <View
                style={{
                  padding: 11,
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  borderRadius: 5,
                }}>
                <Text>Big Cover</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomSelectOption
                items={qtyItems}
                label={'Qty'}
                showlabel={false}
                value={bigCoverQty}
                setSelect={setBigCoverQty}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  padding: 11,
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  borderRadius: 5,
                }}>
                <Text>₹ {parseInt(bigCoverQty.title)*bigCoverPrice}</Text>
              </View>
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
        <ConstButton
          title="Submit"
          onPress={() => console.log('Button pressed')}
        />
      </View>
    </>
  );
};
export default SellActivity;
