import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';
import React, {Component, useState} from 'react';
const DATA = [
  {
    id: 'a',
    title: 'First Name',
  },
  {
    id: 'b',
    title: 'Second Name',
  },
  {
    id: 'c',
    title: 'Password',
  },
  {
    id: 'd',
    title: 'Confirm Password',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const New = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.text1}>Create Account</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1:
  {
    fontSize:37,
    color:"black",
    textAlign:"center",
  },
  item: {
    backgroundColor: 'dodgerblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color:"black",
    fontWeight:"bold",
    fontSize: 32,
  },
});
export default New;
