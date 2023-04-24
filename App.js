import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  function botao(){
    alert("Parabéns, você fez login!")
  }
  function botao2(){
    alert("Parabéns, você entrou para ajeitar seu console!")
  }

  return (
    <View style={styles.container}>
      <AssetExample />
      <Text style={styles.paragraph}>
      Manage your console and connect with friends all in one place     
      </Text>
      <Pressable style={styles.botaoverde} onPress={() => botao2()}>
        <Text style={styles.buttonText}>SING IN</Text>
      </Pressable>
       <Pressable style={styles.botaocinza} onPress={() => botao()}>
        <Text style={styles.buttonText}>SET UP CONSOLE</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#0f0e0e",
    padding: 8,
  },
  paragraph: {
    color: 'white',
    margin: 80,
    fontSize: 13,
    fontWeight: '',
    textAlign: 'center',
  },
  botaoverde: {
    backgroundColor: '#68946a',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
  },
  botaocinza:{
    margin:10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#717571',
    borderRadius: 30,
    textAlign:'center',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
