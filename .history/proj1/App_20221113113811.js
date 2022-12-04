import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import  QRScanner  from 'expo-QR-scanner';

export default function App() {
  console.log("App is working!");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not Scanned Yet')

  const askForCameraPermission = () => {
    (async () => {
      const {status} = await QRScanner.requestPermissionAsync();
    })
  }

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
