import { View } from "react-native";
import { Text } from "react-native-paper";
import CustomSelectOption from "../components/CustomSelectOption";
import ConstButton from "../components/CustomButton";
import CustomTextInput from "../components/TextInputCustom";
import { useEffect, useState } from "react";
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
const AddStock = () => {
    const [smallCoverBags, setSmallCoverBags] = useState({
        title: '',
        icon: '',
    });
    const [smallCoverPkts, setSmallCoverPkts] = useState('');
    const [smallCoverCount, setSmallCoverCount] = useState('');
    const [bigCover, setBigCover] = useState({
        title: '',
        icon: '',
    });
    const [bigCoverPkts, setBigCoverPkts] = useState('');
    const [bigCoverCount, setBigCoverCount] = useState('');
    useEffect(() => {
        const bags=parseInt(smallCoverBags.title);
        const s = bags * 10;
        setSmallCoverPkts(s.toString());
        const count=s*100;
        setSmallCoverCount(count.toString());
        console.log(smallCoverBags);
    }, [smallCoverBags]);
    useEffect(() => {
        const bags=parseInt(bigCover.title);
        const s = bags * 10;
        setBigCoverPkts(s.toString());
        const count=s*100;
        setBigCoverCount(count.toString());
        console.log(bigCover);
    }, [bigCover]);
    return(<>
     <View style={{
        flex:1,
        height:'100%',
     }}>
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
                <Text>Small Cover Bags</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomSelectOption items={qtyItems} label={'Qty'} setSelect={setSmallCoverBags} value={smallCoverBags}  />
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
                <Text>Small Cover pkts</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomTextInput
                value={smallCoverPkts}
                placeholder="Qty"
                label="Qty"
                onChange={text => console.log(text)}
                multiline={false}
                showLabel={false}
                editable={false}
              />
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
                <Text>Small Covers Count</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomTextInput
                value={smallCoverCount}
                placeholder="Qty"
                label="Qty"
                onChange={text => console.log(text)}
                multiline={false}
                showLabel={false}
                editable={false}
              />
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
                setSelect={setBigCover} value={bigCover}
              />
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
                <Text>Big Cover pkts</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomTextInput
                value={bigCoverPkts}
                placeholder="Qty"
                label="Qty"
                onChange={text => console.log(text)}
                multiline={false}
                showLabel={false}
                editable={false}
              />
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
                <Text>Big Covers Count</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <CustomTextInput
                value={bigCoverCount}
                placeholder="Qty"
                label="Qty"
                onChange={text => console.log(text)}
                multiline={false}
                showLabel={false}
                editable={false}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{
        marginTop: 130,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ConstButton
        title="Submit"
        onPress={() => console.log('Button pressed')}
      />
      </View></>)
};
export default AddStock;