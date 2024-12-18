import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationProp } from '../../types/navigationTypes';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const { theme } = useTheme();

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#F3F4F6' : '#1F2937' }]}>
      {/* <Image source={require('../../assets/images/logo.png')} style={styles.logo} /> */}
      <Text style={[styles.title, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>Create Account</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme === 'light' ? '#FFFFFF' : '#374151', color: theme === 'light' ? '#111827' : '#F9FAFB' }]}
        placeholder="Email"
        placeholderTextColor={theme === 'light' ? '#6B7280' : '#9CA3AF'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme === 'light' ? '#FFFFFF' : '#374151', color: theme === 'light' ? '#111827' : '#F9FAFB' }]}
        placeholder="Password"
        placeholderTextColor={theme === 'light' ? '#6B7280' : '#9CA3AF'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.linkText, { color: theme === 'light' ? '#4B5563' : '#D1D5DB' }]}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  linkText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
});

export default RegisterScreen;

