import {Text, View, Button} from 'react-native';
import React, {Component} from 'react';

const BackButton = (navigation, title, color) => {
  <Button
  title="Home"
  onPress={() => navigation.goBack()}
  />;
};
export default BackButton;
