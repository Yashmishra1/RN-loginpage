import React from 'react';
import {View, TextInput, StyleSheet,Image} from 'react-native';

const Input = ({placeholder, secureTextEntry,keyboardType,isIcon}) => {
  return (
    <View style={Styles.box}>
      <TextInput
        style={Styles.email}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
         <Image
            style={Styles.img}
            source={isIcon}
            resizeMode={'stretch'}
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
    marginBottom:10,
    marginTop:10,
  },
  email: {
    fontSize: 15,
    width: 200,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 18,
    height: 18,
  },
  
});
export default Input;