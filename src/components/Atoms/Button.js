import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/Colors/Colors';
import CapitalizeText from './CapitalizeText';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <CapitalizeText text="Login" />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: '100%',
    backgroundColor: Colors.colorPurple,
    borderRadius: 10,
    height: 40,
  },
});
