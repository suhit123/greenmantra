import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import TableComponent from './components/Table';
import {LineChart} from 'react-native-chart-kit';
const Reports = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDate(date);
    hideDatePicker();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}>
            Day Overview
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => showDatePicker()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'lightgray',
            borderWidth: 1,
            padding: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require('../assets/icons/calender.png')}
            style={{width: 20, height: 20}}
          />
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
            }}>
            {date.toDateString()}
          </Text>
          <Image
            source={require('../assets/icons/downArrow.png')}
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
              borderLeftWidth: 1,
            }}
          />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 16,
              color: 'black',
            }}>
            Report
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '52%',
                padding: 2,
              }}>
              <View
                style={{
                  backgroundColor: '#2EA077',
                  borderRadius: 5,
                  padding: 10,
                  paddingVertical: 15,
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginRight: 10,
                  }}>
                  <Image
                    source={require('../assets/icons/cardRec.png')}
                    style={{width: 30, height: 30, alignSelf: 'center'}}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                    }}>
                    Receivable
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}>
                    $ 40000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'white',
                  marginTop: 5,
                  paddingVertical: 5,
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    textAlign: 'center',
                  }}>
                  View detailed amount report
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '47%',
              }}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'white',
                  paddingVertical: 7,
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../assets/icons/card-receive.png')}
                    style={{width: 20, height: 20, alignSelf: 'center'}}
                  />
                </View>
                <View>
                  <Text>Amount Receivable</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      color: 'black',
                    }}>
                    $ 38000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'white',
                  marginTop: 6,
                  paddingVertical: 7,
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../assets/icons/card-send.png')}
                    style={{width: 20, height: 20, alignSelf: 'center'}}
                  />
                </View>
                <View>
                  <Text>Amount Receivable</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      color: 'darkred',
                    }}>
                    $ 10000
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                shadowColor: 'black',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                marginTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/icons/package_car.png')}
                    style={{width: 20, height: 20, alignSelf: 'center'}}
                  />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 13,
                      color: 'black',
                      marginTop: 2,
                    }}>
                    Stock Sold
                  </Text>
                </View>
                <Image
                  source={require('../assets/icons/info.png')}
                  style={{width: 20, height: 20, alignSelf: 'center'}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                    borderRightColor: 'lightgray',
                    borderRightWidth: 1,
                  }}>
                  <View
                    style={{
                      marginBottom: 8,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                      }}>
                      Big
                    </Text>
                    <View
                      style={{
                        width: 10,
                        height: 2,
                        backgroundColor: 'black',
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                    }}>
                    65000 Covers
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                    }}>
                    33 Bags/pkts
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <View
                    style={{
                      marginBottom: 8,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                      }}>
                      Small
                    </Text>
                    <View
                      style={{
                        width: 20,
                        height: 2,
                        backgroundColor: 'black',
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                    }}>
                    65000 Covers
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                    }}>
                    33 Bags/pkts
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                shadowColor: 'black',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                marginTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/icons/box.png')}
                    style={{width: 17, height: 15, alignSelf: 'center'}}
                  />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 13,
                      color: 'black',
                      marginTop: 2,
                    }}>
                    Stock Inhand
                  </Text>
                </View>
                <Image
                  source={require('../assets/icons/info.png')}
                  style={{width: 20, height: 20, alignSelf: 'center'}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                    borderRightColor: 'lightgray',
                    borderRightWidth: 1,
                  }}>
                  <View
                    style={{
                      marginBottom: 8,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                      }}>
                      Big
                    </Text>
                    <View
                      style={{
                        width: 10,
                        height: 2,
                        backgroundColor: 'black',
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                    }}>
                    65000 Covers
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                    }}>
                    33 Bags/pkts
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <View
                    style={{
                      marginBottom: 8,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                      }}>
                      Small
                    </Text>
                    <View
                      style={{
                        width: 20,
                        height: 2,
                        backgroundColor: 'black',
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                    }}>
                    65000 Covers
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                    }}>
                    33 Bags/pkts
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/*Line chart */}
        {/* <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View> */}
        <TableComponent />
      </ScrollView>
    </View>
  );
};
export default Reports;
