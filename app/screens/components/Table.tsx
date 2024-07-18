import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {DataTable, Text} from 'react-native-paper';

const TableComponent = () => {
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [items] = React.useState([
    {
      key: 1,
      activity: 'Recieved big size cover bags Qty-10(2000 covers)',
      amount: null,
      user: 'Admin',
      time: '12:00 AM',
    },
    {
      key: 2,
      activity: 'Recieved big size cover bags Qty-10(2000 covers)',
      amount: 200,
      user: 'Admin',
      time: '12:00 AM',
    },
    {
      key: 3,
      activity: 'Recieved big size cover bags Qty-10(2000 covers)',
      amount: null,
      user: 'Admin',
      time: '12:00 AM',
    },
    {
      key: 4,
      activity: 'Recieved big size cover bags Qty-10(2000 covers)',
      amount: null,
      user: 'Admin',
      time: '12:00 AM',
    },
    {
      activity: 'Recieved big size cover bags Qty-10(2000 covers)',
      amount: null,
      user: 'Admin',
      time: '12:00 AM',
    },
    {
      activity: 'Recieved big size cover bags Qty-10(2000 covers)',
      amount: null,
      user: 'Admin',
      time: '12:00 AM',
    },
  ]);

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      }}>
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 2,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              padding: 10,
              paddingVertical:15,
              borderRightColor:'white',
              borderRightWidth:1,
            }}>
            Activity
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              padding: 10,
              paddingVertical:15,
              borderRightColor:'white',
              borderRightWidth:1,
            }}>
            Amount
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              padding: 10,
              paddingVertical:15,
              borderRightColor:'white',
              borderRightWidth:1,
            }}>
            User
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              padding: 10,
              paddingVertical:15,
              borderRightColor:'white',
              borderRightWidth:1,
            }}>
            Time
          </Text>
        </View>
      </View>
      {items.map((item, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 2,
                borderRightColor:'lightgray',
                borderRightWidth:1,
                height:'100%'
              }}>
              <Text
                style={{
                  padding: 6,
                  fontSize: 13,
                }}>
                {item.activity}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightColor:'lightgray',
                borderRightWidth:1
              }}>
              <Text
                style={{
                  padding: 6,
                  fontSize: 13,
                }}>
                {item.amount}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightColor:'lightgray',
                borderRightWidth:1
              }}>
              <Text
                style={{
                  padding: 6,
                  fontSize: 13,
                }}>
                {item.user}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  padding: 6,
                  fontSize: 13,
                }}>
                {item.time}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default TableComponent;
