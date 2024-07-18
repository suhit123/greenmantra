import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Text} from 'react-native-paper';

const Calculator = () => {
  const [expression, setExpression] = useState('0');
  const [history, setHistory] = useState<string[]>([]);
  // Function to handle button presses (numbers and operators)
  const handleButtonPress = (value: any) => {
    if (value === 'C') {
      // Clear the expression
      setExpression('0');
    } else if (value === '=') {
      // Evaluate the expression
      try {
        const evalResult = eval(expression);
        setExpression(evalResult.toString());
        if (history.length >= 5) {
          setHistory([...history.slice(1), `${expression} = ${evalResult}`]);
        } else {
          setHistory([...history, `${expression} = ${evalResult}`]);
        }
      } catch (error) {
        setExpression('Error');
      }
    } else {
      // Append the value to the expression
        if (expression === '0' || expression === 'Error') {
            setExpression(value);
        } else {
            setExpression(expression + value);
        }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
      <View style={{flex: 1, position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>
          <View
            style={{
              zIndex: 1,
              flexDirection: 'column'
              ,marginRight:5
            }}>
            {history.map((item, index) => (
              <View style={{
                marginVertical: 6,
                backgroundColor: 'white',
              }}>
                <Text key={index} style={{fontSize: 20, color: 'gray',textAlign:'right'}}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.display}>{expression}</Text>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.block}
            onPress={() => handleButtonPress('C')}>
            <Text style={styles.label}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            onPress={() => handleButtonPress('(')}>
            <Text style={styles.label}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            onPress={() => handleButtonPress(')')}>
            <Text style={styles.label}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block2}
            onPress={() => handleButtonPress('/')}>
            <Image
              source={require('../assets/icons/division.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {[7, 8, 9].map(num => (
            <TouchableOpacity
              key={num}
              style={styles.block}
              onPress={() => handleButtonPress(num.toString())}>
              <Text style={styles.label}>{num}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.block2}
            onPress={() => handleButtonPress('*')}>
            <Image
              source={require('../assets/icons/multiply.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map(num => (
            <TouchableOpacity
              key={num}
              style={styles.block}
              onPress={() => handleButtonPress(num.toString())}>
              <Text style={styles.label}>{num}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.block2}
            onPress={() => handleButtonPress('-')}>
            <Image
              source={require('../assets/icons/minus.png')}
              style={{
                tintColor: 'white',
                width: 15,
                height: 3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {[1, 2, 3].map(num => (
            <TouchableOpacity
              key={num}
              style={styles.block}
              onPress={() => handleButtonPress(num.toString())}>
              <Text style={styles.label}>{num}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.block2}
            onPress={() => handleButtonPress('+')}>
            <Image
              source={require('../assets/icons/addition.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.block, {flex: 3}]}
            onPress={() => handleButtonPress('0')}>
            <Text style={styles.label}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            onPress={() => handleButtonPress('.')}>
            <Image
              source={require('../assets/icons/dot.png')}
              style={{
                tintColor: 'gray',
                width: 7,
                height: 7,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block2}
            onPress={() => handleButtonPress('=')}>
            <Image
              source={require('../assets/icons/isequalto.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  block: {
    padding: 15,
    backgroundColor: '#edebeb',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  block2: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  display: {
    fontSize: 30,
    fontWeight: 'semibold',
    color: 'black',
    textAlign: 'right',
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 10,
  },
  icon: {
    tintColor: 'white',
    width: 15,
    height: 15,
  },
});

export default Calculator;
