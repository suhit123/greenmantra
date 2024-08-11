import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {API_ROOT} from '../../constants/ApiConstants';
import ErrorMessage from '../components/ErrorMessage';
import {Text} from 'react-native-paper';
import ConstButton from '../components/CustomButton';
import { useFocusEffect } from '@react-navigation/native';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    await axios
      .get(`${API_ROOT}/users/notadmin`)
      .then(response => {
        setUsers(response?.data?.users);
      })
      .catch(error => {
        console.log(error);
      });
    setLoading(false);
  };
  useFocusEffect(
    useCallback(() => {
      fetchUsers();
    }, []),
  );
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            fetchUsers();
          }}
        />
      }
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View>
        <View>
          {users.map((user: any) => {
            return (
              <View
                key={user._id}
                style={{
                  padding: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  backgroundColor: 'white',
                  marginVertical: 10,
                  borderRadius: 5,
                  width: '98%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    gap: 5,
                  }}>
                  <View
                    style={{
                      width: '49%',
                      gap: 5,
                    }}>
                    <Text  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 5,
                  }}>Name</Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        padding: 5,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 5,
                      }}>
                      {user.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '49%',
                      gap: 5,
                    }}>
                    <Text  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 5,
                  }}>Email</Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        padding: 5,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 5,
                      }}>
                      {user.email}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 5,
                    marginBottom: 10,
                  }}>
                  Privilages
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 5,
                    marginBottom: 10
                  }}>
                  {user.privilages.map((privilage: any) => {
                    return (
                      <Text
                        style={{
                          backgroundColor: 'black',
                          color: 'white',
                          padding: 5,
                          borderRadius: 5,
                        }}
                        key={privilage}>
                        {privilage}
                      </Text>
                    );
                  })}
                </View>
                <ConstButton title='View Stats' onPress={() => {}} backgroundColor='white'/>
              </View>
            );
          })}
        </View>
        <ErrorMessage
          message={error}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </View>
    </ScrollView>
  );
};
export default ManageUser;
