import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Input from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';

const New = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Register Now</Text>
      <Input
        placeholder="Full name"
        isIcon={require('../assets/images/ic_user.png')}
      />
      <Input
        placeholder="Email address"
        keyboardType={'email-address'}
        isIcon={require('../assets/images/email.png')}
      />
      <Input
        placeholder="Phone number"
        keyboardType={'phone-pad'}
        isIcon={require('../assets/images/ic_call.png')}
      />
      <Input
        placeholder="Date of birth"
        keyboardType={'phone-pad'}
        isIcon={require('../assets/images/ic_calendar.png')}
      />
      <Input
        placeholder="Password"
        isIcon={require('../assets/images/ic_eye.png')}
      />
      <Input
        placeholder="confirm Password"
        isIcon={require('../assets/images/ic_eye.png')}
      />
       <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          style={styles.box1}
          end={{x: 1, y: 0}}
          colors={['#f15b3a', '#ffa015']}>
          <Text style={styles.signText}>Sign Up</Text>
        </LinearGradient>
      </View>

      <Text style={styles.bottomtext}>
        By continuing Sign up you agree to the Terms & Conditions
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    paddingHorizontal: 35,
    padding: '10%',
    justifyContent: 'space-evenly',
  },
  topText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    width: 311,
    height: 44,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 22,
  },
  signText: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomtext: {
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});
export default New;
