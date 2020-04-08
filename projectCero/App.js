import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtHeader}>^PROj CERO</Text>
        <Text style={styles.txtBody}>Here's a second line of text...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: 32,
    color: "#c00",
    marginBottom: 12
  },
  txtBody: {
    fontSize: 21,
    color: "#888"
  }
});
