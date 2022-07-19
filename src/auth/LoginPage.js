import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/Input';

const Login = ({navigation}) => {

  return (
    <View style={styles.container}>
      {/* First View  */}
      <View style={styles.top}>
        <Text style={styles.topText}>Sign In</Text>
        <View style={styles.box}>
          <Input placeholder='Email address' />
          <Image
            style={styles.img}
            source={require('../assets/images/email.png')}
          />
        </View>
        <View style={styles.box}>
          <Input placeholder={'Password'} />
            <Image
              secureTextEntry={false}
              style={styles.img1}
              source={require('../assets/images/ic_eye.png')}
            />
        </View>
        <Pressable
          style={styles.forgotbtn}
          onPress={() => navigation.navigate('Change')}>
          <Text>Forgot your password?</Text>
        </Pressable>
      </View>
      {/* First  end View */}
      {/* second View  */}
      <View style={styles.middle}>
        <LinearGradient
          start={{x: 0, y: 0}}
          style={styles.box1}
          end={{x: 1, y: 0}}
          colors={['#f15b3a', '#ffa015']}>
          <Pressable onPress={() => navigation.navigate('Sign')}>
            <Text style={styles.signText}>Sign In</Text>
          </Pressable>
        </LinearGradient>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, color: '#666666'}}>
            Don't have an account?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Create')}>
            <Text
              style={{
                color: '#ffa015',
                fontSize: 16,
              }}>
              Sign up
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={styles.line} />
          <Text
            style={{
              fontSize: 13,
              color: '#8e8e93',
            }}>
            Or sign in with
          </Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Pressable
            style={styles.Facebookbtn}
            onPress={() => Linking.openURL('https://www.facebook.com/login/')}>
            <Image
              style={{height: 14.7, width: 7.8, marginRight: 7.5}}
              source={require('../assets/images/facebook.png')}
            />
            <Text style={{color: '#ffffff', fontSize: 13}}>Facebook</Text>
          </Pressable>
          <Pressable
            style={styles.googlebtn}
            onPress={() =>
              Linking.openURL(
                'https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin',
              )
            }>
            <Image
              style={{
                height: 12.2,
                width: 12,
                marginRight: 11.8,
              }}
              source={require('../assets/images/google.png')}
            />
            <Text style={{color: '#ffffff', fontSize: 13}}>Google</Text>
          </Pressable>
        </View>
      </View>
      {/* end Second View  */}
      {/* {Last view } */}
      <View style={styles.bottom}>
        <Pressable
          style={styles.fingerbtn}
          onPress={() => navigation.navigate('Touch')}>
          <Image source={require('../assets/images/ic_fingerprint.png')} />
          <Text style={{fontSize: 13}}> Sign In Using Touch ID</Text>
        </Pressable>
        <Pressable
          style={styles.facebtn}
          onPress={() => navigation.navigate('Face')}>
          <Image source={require('../assets/images/faceid.png')} />
          <Text style={{fontSize: 13}}> Sign In Using Face ID</Text>
        </Pressable>
      </View>
    </View>

    // <end last view
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 35,
    padding: '20%',
    justifyContent: 'space-around',
  },
  topText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  top: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  middle: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
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
  passcode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#e6e6e6',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 22,
    height: 44,
  },
  box1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 311,
    height: 44,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 22,
  },
  line: {
    borderWidth: 0.5,
    borderRightWidth: 88,
    backgroundColor: '#000000',
    alignSelf: 'center',
  },
  forgotbtn: {
    fontSize: 14,
    alignItems: 'flex-end',
    right: '3%',
  },
  signText: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Facebookbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    flexDirection: 'row',
    backgroundColor: '#3a55a0',
    width: 140,
    height: 40,
  },
  forgotbtn: {
    fontSize: 14,
    alignItems: 'flex-end',
    right: '3%',
  },
  googlebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 92,
    flexDirection: 'row',
    backgroundColor: '#ea4135',
    width: 140,
    height: 40,
  },
  facebtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  fingerbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 21,
    height: 13.8,
  },
  img1: {
    width: 21,
    height: 13.8,
  },
  email: {
    fontSize: 15,
    width: 200,
  },
});
export default Login;
