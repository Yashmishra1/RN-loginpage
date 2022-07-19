import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../auth/LoginPage';
import Forget from '../navigation/ForgotPassword';
import InBtn from '../navigation/SignIn';
import New from '../navigation/SignUp';
import Tid from '../navigation/TouchId';
import Fid from '../navigation/FaceId';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="Change" component={Forget}/>
        <Stack.Screen name="Sign" component={InBtn}/>
        <Stack.Screen name="Create" component={New}/>
        <Stack.Screen name="Touch" component={Tid}/>
        <Stack.Screen name='Face' component={Fid}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;
