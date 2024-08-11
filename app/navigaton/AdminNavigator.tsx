import { createStackNavigator } from '@react-navigation/stack';
import AdminProfile from '../screens/AdminProfile';
import AdminSettings from '../screens/AdminSettings';
import { NavigationContainer } from '@react-navigation/native';
import ManageUsers from '../screens/ManageUsers';
import AddUser from '../screens/ManageUsers/AddUser';
import ManageUser from '../screens/ManageUsers/ManageUser';
import RemoveUser from '../screens/ManageUsers/RemoveUser';
import UpdateUser from '../screens/ManageUsers/UpdateUser';
const adminNavigator= createStackNavigator();
const tempOption1:any={
  headerTitleStyle:{
    color: 'black',
    fontSize  : 18,
    fontWeight: 'semibold',
  },
  headerStyle:{
    height: 50,
    shadowColor:'#fff',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
  },
  headerTintColor: 'black',
}
export default function AdminNavigator() {
  return (
    <adminNavigator.Navigator initialRouteName='AdminProfile'>
      <adminNavigator.Screen name="AdminProfile" component={AdminProfile} options={tempOption1} />
      <adminNavigator.Screen name="AdminSettings" component={AdminSettings} options={tempOption1} />
      <adminNavigator.Screen name="ManageUsers" component={ManageUsers} options={tempOption1} />
      <adminNavigator.Screen name="AddUser" component={AddUser} options={tempOption1}/>
      <adminNavigator.Screen name="ManageUser" component={ManageUser} options={tempOption1}/>
      <adminNavigator.Screen name="UpdateUser" component={UpdateUser} options={tempOption1}/>
      <adminNavigator.Screen name="UpdateAndDeleteUser" component={RemoveUser} options={tempOption1}/>
    </adminNavigator.Navigator>
  );
}