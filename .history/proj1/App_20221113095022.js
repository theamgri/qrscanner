import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("App is working!");

  return (
    <View style={styles.container}>
      <Text>DRAFT FOR QR SCANNER</Text>
      <Text>Scan QR Here</Text>
      <button  
      title="Press me"
      color="#f194ff"
      onPress={() => Alert.alert('Button with adjusted color pressed')}>

      </button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
