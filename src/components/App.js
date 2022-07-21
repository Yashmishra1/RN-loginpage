import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../auth/LoginPage';
import Forgetpassword from '../navigation/ForgotPassword';
import SignIn from '../navigation/SignIn';
import SignUp from '../navigation/SignUp';
import Tid from '../navigation/TouchId';
import Fid from '../navigation/FaceId';
import HomeButton from './HomeButton';
const Stack = createNativeStackNavigator();

const App = navigation => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: '#FFA500'},
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={Forgetpassword}
          options={({navigation}) => ({
            headerLeft: () => (
              <HomeButton title={'hello'} onPress={() => navigation.goBack()} />
            ),
            title: 'Forgot Password',
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={({navigation}) => ({
            headerLeft: () => (
              <HomeButton title={'jiji'} onPress={() => navigation.goBack()} />
            ),
            title: 'Sign In Page',
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={({navigation}) => ({
          //   headerLeft: () => (
          //     <HomeButton onPress={() => navigation.goBack()} />
          //   ),
          //   title: 'Sign Up',
          //   animation: 'fade_from_bottom',
          // })}
        />
        <Stack.Screen
          name="Touch"
          component={Tid}
          options={({navigation}) => ({
            headerLeft: () => (
              <HomeButton onPress={() => navigation.goBack()} />
            ),
            title: 'Touch ID',
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="Face"
          component={Fid}
          options={({navigation}) => ({
            headerLeft: () => (
              <HomeButton onPress={() => navigation.goBack()} />
            ),
            title: 'Face ID',
            animation: 'fade_from_bottom',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
