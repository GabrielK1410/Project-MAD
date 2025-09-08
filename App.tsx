import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata Saya</Text>

      <Image source={require('./assets/her.jpg')} style={styles.image} />
      <Text style={styles.name}>Gabriel Nehemia Kaunang</Text>
      <Text style={styles.info}>Kelas: B</Text>
      <Text style={styles.info}>Jurusan: Informatika</Text>
      <Text style={styles.info}>Hobi: Coding, Musik</Text>
      <Text style={styles.info}>Cita-cita: Software Engineer</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#555',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#444',
    marginBottom: 5,
  },
});
