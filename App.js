import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components4/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <AssetExample />
    <Pressable style={styles.botaoverde} onPress={() => botao2()}>
        <Text style={styles.buttonText}>CONNECT TO CONSOLE</Text>
    </Pressable>
    <Pressable style={styles.botaocinza} onPress={() => botao()}>
        <Text style={styles.buttonText}>I ONLY SEE 6 CHARACTERS</Text>
    </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0f0e0e',
    padding: 8,
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
