import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

function botao2(){
    alert("Parabéns, você entrou na sua conta!")
  }
  return (
    <View style={styles.container}>
        <View style={styles.NavbarC}>
          <Text style={styles.navbarText}>Cancel</Text>
        </View>
        <AssetExample/>
        <Pressable style={styles.botaoverde} onPress={() => botao2()}>
          <Text style={styles.buttonText}>LET'S GO</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0f0e0e',
    padding: 10,
  },
  botaoverde: {
    backgroundColor: '#13541a',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
    marginTop: 150,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  NavbarC: {
    position: "absolute",
    fontSize: 24,
    top: 35,
    height: 40,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  navbarText: {
    color: 'blue',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'normal',
  },
  
});
