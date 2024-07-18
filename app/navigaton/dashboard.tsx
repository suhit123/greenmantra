import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reports from '../screens/Reports';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function DashboardNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: 'white', 
            paddingBottom: 10,
            height: 60,
        },
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/icons/home.png')} style={{ width: 16, height: 18 }} />
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    color:'black'
                },
            }}
        />
         <Tab.Screen name="Reports" component={Reports}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/icons/reports.png')} style={{ width: 15,height:19 }} />
                ),
                tabBarIconStyle: {
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    color:'black'
                },
            }}
        />
         <Tab.Screen name="Activity" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/icons/add.png')} style={{ width: 16, height: 18 }} />
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    color:'black'
                },
            }}
        />
         <Tab.Screen name="Profile" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/icons/profile.png')} style={{ width: 16, height: 18 }} />
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    color:'black'
                },
            }}
        />
        <Tab.Screen name="Calculator" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/icons/calculator.png')} style={{ width: 18, height: 15 }} />
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    color:'black'
                },
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}