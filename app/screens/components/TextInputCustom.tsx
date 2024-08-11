import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  lines = 1,
  editable = true,
  showLabel = true,
  keyboard = 'default',
  type = 'text',
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  multiline: boolean;
  lines?: number;
  editable?: boolean;
  showLabel?: boolean;
  keyboard?: string;
  type?: string;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      {showLabel && <Text style={styles.label}>{label}</Text>}
      {type === 'password' && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIconContainer}
        >
          <Image
            source={
              showPassword
                ? require('../../assets/icons/eyeOn.png')
                : require('../../assets/icons/eyeOff.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.input, type === 'password' && styles.passwordInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        multiline={multiline}
        numberOfLines={lines}
        editable={editable}
        keyboardType={keyboard}
        secureTextEntry={type === 'password' && !showPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: 'black',
    fontWeight: '600', // Changed from 'semibold' to '600'
  },
  input: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  passwordInput: {
    paddingRight: 40, // Adding padding to the right to avoid overlap with eye icon
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 30,
    zIndex: 10, // Increased zIndex
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});

export default CustomTextInput;
