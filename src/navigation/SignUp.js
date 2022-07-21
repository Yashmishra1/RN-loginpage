import React from 'react';
import {Text, View, StyleSheet,Pressable} from 'react-native';
import Input from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Register Now</Text>
      <View style={styles.Top}>
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
      </View>
      <View style={styles.middle}>
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
      <View 
              style={styles.bottomBtn}>
              <Text style={styles.text1}>
               Already have an account?{' '}
              </Text>
              <Pressable>
                <Text
                  style={{
                    color: '#ffa015',
                    fontSize: 16,
                  }}>
                  Sign up
                </Text>
                </Pressable>
            </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    paddingHorizontal: 35,
    padding: '10%',
  },
  Top:
  {
    justifyContent:"space-evenly",
  },
  middle:
  {
    flex:1,
    justifyContent:"space-around"
  },
  topText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box1: {
    justifyContent: 'space-around',
    alignItems: 'center',
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
    flex:1,
    color:"grey",
    justifyContent:"space-around",
    textAlign: 'center',
  },
  text1:
  {
    fontSize:14,
    color:"black",
  },
  bottomBtn:
  {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
  }
});
export default SignUp;
