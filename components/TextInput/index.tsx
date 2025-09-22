import React from 'react';
import { TextInput as Input, Text, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, label, ...rest }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888" // ✅ Warna placeholder
        {...rest}
      />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 25, // ✅ Spasi lebih besar
    fontSize: 14,
    color: 'black',
    backgroundColor: '#f9f9f9', // ✅ Memberi kontras agar jelas
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});
