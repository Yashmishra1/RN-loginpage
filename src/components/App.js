import React from 'react';
import { Button,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../auth/LoginPage';
import Forgetpassword from '../navigation/ForgotPassword';
import SignIn from '../navigation/SignIn';
import SignUp from '../navigation/SignUp';
import Tid from '../navigation/TouchId';
import Fid from '../navigation/FaceId';
import BackButton from './BackButton';
const Stack = createNativeStackNavigator();

const App = navigation => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {backgroundColor: '#FFA500'},
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold'
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
            headerTitle: () => <Text style={{fontSize:20, fontWeight: 'bold'}}>Forget Password</Text>,
            headerLeft: () => <Button color="black"  title="<Home"  onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{title: 'Sign In Page', animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Sign Up', animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="Touch"
          component={Tid}
          options={{title: 'Touch Id ', animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="Face"
          component={Fid}
          options={{title: 'Face Id', animation: 'fade_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
