import {Button,Text} from 'react-native';
import React from 'react';
import {useLayoutEffect} from 'react';

const HomeButton = ({navigation, onPress,title}) => {
  return <Button color="black" title={title} onPress={onPress} />;
};
export default HomeButton;
