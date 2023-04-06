/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('../../assets/logo.png')}
      style={{width: 250, height: 100, alignSelf: 'center'}}
    />
  );
};

export default Logo;
