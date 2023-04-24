import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/xbox.png')} />
      <Text style={styles.paragraph}>
        Welcome to the game pass!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 30,
    color: 'white',
    fontWeight: '',
    textAlign: 'center',
  },
  logo: {
  alignItems: 'center', 
  justifyContent: 'flex-start',
  margin: 30,    
  height: 50,
  width: 50,
  }
});
