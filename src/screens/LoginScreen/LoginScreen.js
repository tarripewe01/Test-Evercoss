import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Button from '../../components/Atoms/Button';
import Logo from '../../components/Atoms/Logo';
import Sizebox from '../../components/Atoms/Sizebox';
import Form from '../../components/Molecules/Form';
import {Colors} from '../../utils/Colors/Colors';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Sizebox height={20} />
      <Logo />
      <Form />
      <Sizebox height={15} />
      <Button onPress={() => navigation.replace('Home')} />
      <Sizebox height={20} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.colorBlack,
    flex: 1,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
