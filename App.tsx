import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSignIn = () => {
    console.log({
      nama,
      username,
      email,
      address,
      phone,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        placeholder="Masukan nama lengkap anda"
        label="Nama"
        onChangeText={setNama}
      />
      <TextInput
        placeholder="Masukkan username anda"
        label="Username"
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Masukkan email anda"
        label="Email"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Masukkan alamat anda"
        label="Address"
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Masukkan nomor telepon anda"
        label="Phone Number"
        value={phone}
        onChangeText={text => {
          // hanya angka yang boleh dimasukkan
          const numericText = text.replace(/[^0-9]/g, '');
          setPhone(numericText);
        }}
        keyboardType="numeric"
      />

      <Button label="Register" onPress={onSignIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
