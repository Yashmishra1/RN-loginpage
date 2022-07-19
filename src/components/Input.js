import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder, secureTextEntry,keyboardType,placeholderTextColor}) => {
  return (
    <View style={Styles.box}>
      <TextInput
        style={Styles.email}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    borderColor: '#e6e6e6',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 22,
    height: 44,
  },
  email: {
    fontSize: 15,
    width: 200,
  },
});
export default Input;
