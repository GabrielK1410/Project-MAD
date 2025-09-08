import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Foto */}
      <Image source={require('./assets/photo.jpg')} style={styles.image} />

      {/* Nama dan profesi */}
      <Text style={styles.name}>Gabriel Nehemia Kaunang</Text>
      <Text style={styles.profession}>Mahasiswa Informatika & Blogger</Text>

      {/* Bagian Kontak */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>CONTACT ME</Text>

        <View style={styles.contactRow}>
          <Text style={styles.icon}>📞</Text>
          <Text style={styles.contactText}>+62 812-3456-7890</Text>
        </View>

        <View style={styles.contactRow}>
          <Text style={styles.icon}>✉️</Text>
          <Text style={styles.contactText}>gabrielkaunang@email.com</Text>
        </View>

        <View style={styles.contactRow}>
          <Text style={styles.icon}>🌐</Text>
          <Text style={styles.contactText}>www.gabrielkaunang.com</Text>
        </View>

        <View style={styles.contactRow}>
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.contactText}>Manado, Sulawesi Utara</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#485e98ff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#eee',
  },
});
