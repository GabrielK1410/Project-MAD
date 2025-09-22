import React from 'react';
import { TextInput as Input, Text, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, label, keyboardType, ...rest }) => {
  // Fungsi untuk memfilter angka saja jika keyboardType = "phone-pad"
  const handleChangeText = (text: string) => {
    let value = text;
    if (keyboardType === 'phone-pad') {
      value = text.replace(/[^0-9]/g, ''); // ❗ Hanya angka
    }
    // Jika parent juga mengirim onChangeText, teruskan hasilnya
    if (rest.onChangeText) {
      rest.onChangeText(value);
    }
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        keyboardType={keyboardType}
        {...rest}
        onChangeText={handleChangeText} // Gunakan handler di sini
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
    marginBottom: 25,
    fontSize: 14,
    color: 'black',
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});
