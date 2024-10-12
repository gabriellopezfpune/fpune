import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button, Input, Text } from '@rneui/themed';

const FirebaseLogin = ({ navigation }) => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } catch (error) {
      console.error("Error al iniciar sesión: ", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Iniciar Sesión</Text>
      
      <Input
        placeholder="Correo Electrónico"
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      
      <Input
        placeholder="Contraseña"
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Iniciar Sesión" buttonStyle={styles.button} onPress={handleLogin} />

      <Button title="Crear Cuenta" type="clear" onPress={() => navigation.navigate('FirebaseCrearCuenta')} />
      <Button title="Recuperar Contraseña" type="clear" onPress={() => navigation.navigate('FirebaseRecuperarCuenta')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#2089dc', marginTop: 20 },
});

export default FirebaseLogin;