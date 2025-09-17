import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome Lads" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry={true}
      />

      <Button label="Sign In" />

      {/* Social Buttons */}
      <Button label="Sign in Google" color="#DB4437" colorText="#fff" />
      <Button label="Sign in Facebook" color="#4267B2" colorText="#fff" />
      <Button label="Sign in Apple" color="#000000" colorText="#fff" />
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
});
