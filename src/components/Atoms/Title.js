import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors/Colors';

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.colorPink,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
