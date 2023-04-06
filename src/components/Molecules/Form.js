import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors/Colors';

const Form = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.text}>Email</Text>
      <TextInput placeholder="Enter your email address" />
      <Text style={styles.text}>Password</Text>
      <TextInput placeholder="Enter Your password" />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    backgroundColor: Colors.colorWhite,
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  text: {color: Colors.colorBlack},
});
