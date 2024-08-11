import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomTextInput from '../components/TextInputCustom';
import ConstButton from '../components/CustomButton';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ErrorMessage from '../components/ErrorMessage';
import ConfirmMessage from '../components/ConfirmMessage';
import axios from 'axios';
import {API_ROOT} from '../../constants/ApiConstants';
import SuccessMessage from '../components/SuccessMessage';
const privilages = [
  'Add Bags',
  'Remove Bags',
  'Add Users',
  'Remove Users',
  'Manage Users',
  'View Reports',
  'View Dashboard',
  'View Settings',
];
const UpdateUser = ({route}: any) => {
  const user = route.params.user;
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkedPrivilages, setCheckedPrivilages] = useState<string[]>(
    user.privilages || [],
  );
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmission = () => {
    if (name === '' || email === '') {
      setError('Please fill all the fields');
      setShowErrorModal(true);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setShowErrorModal(true);
      return;
    }
    setShowConfirmModal(true);
  };
  const handleConfirm = () => {
    setLoading(true);
    const UpdateUser = async () => {
      await axios
        .put(`${API_ROOT}/users/update/${user._id}`, {
          name: name,
          email: email,
          password: password,
          privilages: checkedPrivilages,
        })
        .then(response => {
          setLoading(false);
          setShowConfirmModal(false);
          setName(response.data.user.name);
          setEmail(response.data.user.email);
          setPassword('');
          setConfirmPassword('');
          setCheckedPrivilages(response.data.user.privilages);
          setShowSuccessModal(true);
        })
        .catch(error => {
          setLoading(false);
          setShowConfirmModal(false);
          setError(error?.response?.data?.message);
          setShowErrorModal(true);
        });
    };
    UpdateUser();
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: '#fff',
          paddingTop: 20,
        }}>
        <View
          style={{
            gap: 5,
          }}>
          <CustomTextInput
            label="Name"
            placeholder="Enter user name"
            multiline={false}
            value={name}
            onChange={text => {
              setName(text);
            }}
          />
          <CustomTextInput
            label="Email"
            placeholder="Enter user email"
            multiline={false}
            value={email}
            onChange={text => {
              setEmail(text);
            }}
            keyboard="email-address"
          />
          <CustomTextInput
            label="Password"
            placeholder="**********"
            multiline={false}
            value={password}
            onChange={text => {
              setPassword(text);
            }}
            type="password"
          />
          <CustomTextInput
            label="Confirm Password"
            placeholder="**********"
            multiline={false}
            value={confirmPassword}
            onChange={text => {
              setConfirmPassword(text);
            }}
            type="password"
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                marginBottom: 10,
                marginTop: 20,
              }}>
              Privilages
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
                gap: 5,
                flexWrap: 'wrap',
              }}>
              {checkedPrivilages.map((item, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      backgroundColor: 'lightgray',
                      color: 'black',
                      padding: 5,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                    }}>
                    {item}
                  </Text>
                );
              })}
            </View>
            <View>
              {privilages.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      if (checkedPrivilages.includes(item)) {
                        setCheckedPrivilages(
                          checkedPrivilages.filter(i => i !== item),
                        );
                      } else {
                        setCheckedPrivilages([...checkedPrivilages, item]);
                      }
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 5,
                        gap: 10,
                      }}>
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          backgroundColor: checkedPrivilages.includes(item)
                            ? '#000'
                            : '#fff',
                          borderColor: '#000',
                          borderWidth: 1,
                        }}>
                        {checkedPrivilages.includes(item) && (
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 13,
                              textAlign: 'center',
                            }}>
                            ✓
                          </Text>
                        )}
                      </View>
                      <Text style={{}}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <ConstButton title="Update User" onPress={handleSubmission} />
        </View>
        <ErrorMessage
          message={error}
          showModal={showErrorModal}
          setShowModal={setShowErrorModal}
        />
        <ConfirmMessage
          message="Are you sure you want to add this user?"
          showModal={showConfirmModal}
          onConfirm={handleConfirm}
          onCancel={() => {
            setShowConfirmModal(false);
          }}
          setShowModal={setShowConfirmModal}
          loading={loading}
        />
        <SuccessMessage
          message="User added successfully"
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      </View>
    </ScrollView>
  );
};
export default UpdateUser;
