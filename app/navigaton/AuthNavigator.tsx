import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import DashboardNavigator from './dashboard';
import {NavigationContainer} from '@react-navigation/native';

const authNavigator = createStackNavigator();
export default function AuthNavigator() {
    
  return (
    <NavigationContainer>
      <authNavigator.Navigator initialRouteName="Login">
        <authNavigator.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <authNavigator.Screen
          name="HomeTab"
          component={DashboardNavigator}
          options={{headerShown: false}}
        />
      </authNavigator.Navigator>
    </NavigationContainer>
  );
}
