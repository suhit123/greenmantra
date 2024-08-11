import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reports from '../screens/Reports';
import Activity from '../screens/Activity';
import Calculator from '../screens/Calculator';
import AdminProfile from '../screens/AdminProfile';
import AdminNavigator from './AdminNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function DashboardNavigator() {
  const [loading, setLoading] = React.useState(true);
  const [isAdmin, setIsAdmin] = React.useState(null);
  const checkAdmin = async () => {
    const role = await AsyncStorage.getItem('role');
    console.log(role);
    console.log(role?.includes('admin'));
    if (role?.includes('admin')) {
      return true;
    } else {
      return false;
    }
  };
  React.useEffect(() => {
    checkAdmin().then((res: any) => {
      setIsAdmin(res);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if(isAdmin!==null &&  isAdmin===false){
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            paddingBottom: 10,
            height: 60,
          },
        }}
        initialRouteName="Activity">
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icons/add.png')}
                style={{width: 16, height: 18}}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: 'black',
            },
          }}
        />
       
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icons/calculator.png')}
                style={{width: 18, height: 15}}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: 'black',
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 10,
          height: 60,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={{width: 16, height: 18}}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/reports.png')}
              style={{width: 15, height: 19}}
            />
          ),
          tabBarIconStyle: {},
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/add.png')}
              style={{width: 16, height: 18}}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AdminNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/profile.png')}
              style={{width: 16, height: 18}}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/calculator.png')}
              style={{width: 18, height: 15}}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
}
