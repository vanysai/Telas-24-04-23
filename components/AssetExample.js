import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/draculaura.png')} />
    <Text style={styles.paragraph}>
        Welcome back, vanysai!
      </Text>
      <Text style={styles.paragraph2}>
        jaifreiresantos@outlook.com
        </Text>
      <Text style={styles.paragraph3}>
        Sign in with a different account
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: '',
    textAlign: 'center',
  },

  paragraph2: {
    textAlign: 'center',
    color: 'white',
  },

  paragraph3: {
    margin: 3,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  logo: {
    margin: 20,
    height: 200,
    width: 200,
  }
});
