import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function App() {
  console.log("App is working!");

  return (
    <View style={styles.container}>
      <Text>DRAFT FOR QR SCANNER</Text>
      
      <Button  
      title="Scan QR Here"
      color="#5837D0"
      onPress={() => Alert.alert('Button is working')}>

      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
