
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import auth from '@react-native-firebase/auth';


const FirebaseCrearCuenta = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = async () => {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        console.log('Cuenta creada exitosamente');
        navigation.navigate('FirebaseLogin');
      } catch (error) {
        console.error("Error al crear cuenta: ", error.message);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text h3 style={styles.title}>Crear Cuenta</Text>
        
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
  
        <Button title="Registrar" buttonStyle={styles.button} onPress={handleSignUp} />
      </View>
    );
  };
  
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { textAlign: 'center', marginBottom: 20 },
    button: { backgroundColor: '#2089dc', marginTop: 20 },
});


  export default FirebaseCrearCuenta;
  