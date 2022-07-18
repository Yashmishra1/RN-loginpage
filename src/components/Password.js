import { Text, View,Button } from 'react-native'
import React, { Component } from 'react'

const Password = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Password')}
      />
    </View>
  );
}
export default Password;