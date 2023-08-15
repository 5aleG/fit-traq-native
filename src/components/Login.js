import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../redux/Slices/authSlice';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import fitTrackrAPI from '../axios/FitTrackrAPI';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await fitTrackrAPI.post('/auth/token/', formData);
      if (response.status === 200) {
        const data = response.data;
        console.log('Received data:', data);

        dispatch(updateUserData({ username: formData.username }));
        console.log('Dispatched username:', formData.username);

      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.helloText}>Hey there,</Text>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#7B6F72" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={formData.username}
            onChangeText={(value) => handleInputChange('username', value)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#7B6F72" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={handleShowPassword}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#7B6F72" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>Don't have an account yet? Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 2,
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
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f8f8',
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    padding: 20,
    marginBottom: 15,
    height: 60,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#ada4a5',
  },
  forgotPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#ada4a5',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#e17641',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  registerText: {
    color: '#333',
  },
});

export default Login;
