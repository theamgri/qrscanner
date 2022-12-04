import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';

export default function App() {
  console.log("App is working!");

  return (
    <View style={styles.container}>
      <Text>DRAFT FOR QR SCANNER</Text>
      
      <Button  
      title="Scan QR Here"
      color="#f194ff"
      onPress={() => Alert.alert('Button is working')}>

      </Button>
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
