import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../utils/Colors/Colors';

const CapitalizeText = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default CapitalizeText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.colorWhite,
    textTransform: 'uppercase',
  },
});
