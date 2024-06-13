import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const buttonCustom = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5FA604',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
     width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default buttonCustom;
