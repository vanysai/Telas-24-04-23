import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Enter the code on your TV      
      </Text>
      <Image style={styles.logo} source={require('../assets4/tela4.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: '',
    justifyContent: '',
    padding: 24,
  },
  paragraph: {
    color: 'white',
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: '',
    textAlign: 'left',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
  }
});
