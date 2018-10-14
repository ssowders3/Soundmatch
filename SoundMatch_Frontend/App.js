import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{height: 200, backgroundColor: 'steelblue'}} />
        <ScrollView style={{height: 200, backgroundColor: 'skyblue'}} />
        <ScrollView style={{height: 200, backgroundColor: 'powderblue'}} />
        <ScrollView style={{height: 200, backgroundColor: 'white'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});
