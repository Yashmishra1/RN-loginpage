import {Text, View, Image, StyleSheet, TextInput, alert,Pressable,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {Component} from 'react';

const Forgetpassword = () => {
  const login = () => {
    Alert.alert('Changed Password Succesfully');
  };
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.icon}>
          <Image source={require('../assets/images/lock.png')} />
        </View>
        <View>
          <Text style={styles.text1}>Forgot Password</Text>
        </View>
        <View>
          <Text style={styles.Textbox}>
            Please enter your email address you will receive a password reset
            link to create a new password via email
          </Text>
        </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.backText}>
          <TextInput
            style={styles.placeEmail}
            placeholder="Enter Your email address"></TextInput>
            <Image
                style={styles.img}
                source={require('../assets/images/email.png')}
              />
        </View>
        
      </View>
      <View style={styles.bottom}>
        <LinearGradient 
          start={{x: 0, y: 0}}
          style={styles.box1}
          end={{x: 1, y: 0}}
          colors={['#f15b3a', '#ffa015']}>
          <Pressable onPress={login}>
            <Text style={styles.signText}>Reset Password</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingHorizontal: 35,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:"space-evenly"
  },
  Top: {
    flex: 1,
    justifyContent: 'space-between',
  },
  icon: {
    alignItems: 'center',
    justifyContent:"space-around"
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 22,
    color: '#333333',
    justifyContent:"space-evenly"
  },
  Textbox: {
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 20,
    width: 294,
    height: 65,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"space-evenly",
  },
  backText: {
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    borderColor: '#e6e6e6',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 22,
    height: 44,
    width:327,
  },
  placeEmail: {
    color: '#9B9B9B',
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'space-between',
    width: 187,
  },
  bottom:
  {
    flex:1,
    justifyContent:"space-between",
    flexDirection:"row",
  },
  box1:
  {
    width:311,
    height:44,
    borderRadius:22,
    alignItems:"center",
    justifyContent:"center",
  },
  signText:
  {
  fontSize: 16,
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign:"center",
},
img: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: 21,
  height: 13.8,
},
});
export default Forgetpassword;
