import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
//Componentes que se van sumando a mi pantalla principal
import BasicComponents from './src/components/BasicComponents';
import TextComponents from './src/components/TextComponents';
import TextInputComponents from './src/components/TextInputComponents';
import ListNotasComponents from './src/components/ListNotasComponents';
import Home from './src/react-native-elements/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBasic from './src/react-native-elements/AvatarBasic';
import BadgeBasic from './src/react-native-elements/BadgeBasic';
import CardBasic from './src/react-native-elements/CardBasic';
import TabBasic from './src/react-native-elements/TabBasic';
import PropsEjemplo from './src/navegacion/PropsEjemplo';
import AxiosEjemplo from './src/navegacion/AxiosEjemplo';
import AsyncStorageEjemplo from './src/navegacion/AsyncStorageEjemplo';
import FirebaseLeer from './src/firebase-crud/FirebaseLeer';
import FirebaseGuardar from './src/firebase-crud/FirebaseGuardar';
import FirebaseBorrar from './src/firebase-crud/FirebaseBorrar';
import FirebaseEditar from './src/firebase-crud/FirebaseEditar';
import FirebaseLogin from './src/firebase-login/FirebaseLogin';
import FirebaseRecuperarCuenta from './src/firebase-login/FirebaseRecuperarCuenta';
import FirebaseCrearCuenta from './src/firebase-login/FirebaseCrearCuenta';



const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    //<ScrollView>
      // {/* <BasicComponents></BasicComponents>*/}
      // {/* <TextComponents></TextComponents>*/}
      // {/* <TextInputComponents></TextInputComponents>*/}
      // {/*<ListNotasComponents></ListNotasComponents>*/}
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notas" component={ListNotasComponents} />
            <Stack.Screen name="Avatar" component={AvatarBasic} />
            <Stack.Screen name="Badge" component={BadgeBasic} />
            <Stack.Screen name="Card" component={CardBasic} />
            <Stack.Screen name="Tab" component={TabBasic} />
            <Stack.Screen name="Props" component={PropsEjemplo} />
            <Stack.Screen name="Axios" component={AxiosEjemplo} />
            <Stack.Screen name="Async" component={AsyncStorageEjemplo} />
            <Stack.Screen name="FirebaseLeer" component={FirebaseLeer} />
            <Stack.Screen name="FirebaseGuardar" component={FirebaseGuardar} />
            <Stack.Screen name="FirebaseBorrar" component={FirebaseBorrar}/>
            <Stack.Screen name="FirebaseEditar" component={FirebaseEditar}/>
            <Stack.Screen name="FirebaseLogin" component={FirebaseLogin}/>
            <Stack.Screen name="FirebaseRecuperarCuenta" component={FirebaseRecuperarCuenta}/>
            <Stack.Screen name="FirebaseCrearCuenta" component={FirebaseCrearCuenta}/>
          </Stack.Navigator>
       </NavigationContainer>
   // </ScrollView>

  );
}
const styles = StyleSheet.create({
});

export default App;

