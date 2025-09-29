import React from 'react';
import { TextInput as Input, Text, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, label, keyboardType, onChangeText, value, ...rest }) => {
  const handleChangeText = (text) => {
    let filtered = text;

    // Jika tipe keyboard adalah phone-pad, filter hanya angka
    if (keyboardType === 'phone-pad') {
      filtered = text.replace(/[^0-9]/g, '');
    }

    // Panggil callback parent dengan nilai yang sudah difilter
    if (onChangeText) {
      onChangeText(filtered);
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
        value={value}
        onChangeText={handleChangeText}
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
