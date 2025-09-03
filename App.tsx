import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// komponen adalah fungsi yang mengembalikan atau mereturn JSX
const App = () => {
  return (
    //JSX
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <View style={styles.redBox}>
        <Text>Basic React Native</Text>
      </View>
      <View style={styles.greenBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  title: {
    backgroundColor: 'cyan',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  container: {
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 5,
    padding: 15,
    margin: 15,
  },
  redBox: {
    backgroundColor: 'red',
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    width: 390,
    height: 100,
    margin: 10,
  },
  greenBox: {
    backgroundColor: 'green',
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    width: 390,
    height: 100,
    margin: 10,
  },
  blueBox: {
    backgroundColor: 'blue',
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    width: 390,
    height: 100,
    margin: 10,
  },
});
