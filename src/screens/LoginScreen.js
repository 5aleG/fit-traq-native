import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../components/Login';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Login navigation={navigation} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  helloText: {
    fontWeight: 'normal',
    color: '#333',
    marginTop: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 50,
  },
});

export default LoginScreen;