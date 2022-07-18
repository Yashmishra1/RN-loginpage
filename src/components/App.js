import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './LoginPage';
import Forget from './ForgotPass';
import InBtn from './SignIn';
import New from './SignUp';
import Tid from './Touch';
import Fid from './Face';
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
