import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
  label: string;
  color?: string;
  colorText?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color = 'orange',
  colorText = 'black',
  onPress,
}) => {
  return (
    // Gabungkan style statis dan dinamis dalam array
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.7}
      onPress={onPress}>
      {/* Lakukan hal yang sama untuk text */}
      <Text style={[styles.buttonText, { color: colorText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// StyleSheet sekarang hanya berisi objek style statis
const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});