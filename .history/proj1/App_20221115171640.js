import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  console.log("App is working!");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not Scanned Yet')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }
//req camera permission

useEffect(() => {
  askForCameraPermission();
}, []);

const handleBarCodeScanned = ({type, data}) => {
  setScanned(true);
  setText(data);
  console.log('type=' + type + 'data=' + data )

}

//check permission
if(hasPermission === null) {
  return(
    <View style={styles.container}>
    <Text>Request to Open Camera</Text>
    </View>
  )
}
if(hasPermission === false) {
return(
  <View style={styles.container}>
  <Text style= {{ margin: 10 }}>No Access to Camera</Text>
  <Button  
      title={"Allow Camera"}
      color="#5837D0"
      onPress={() => askForCameraPermission()} />
  </View>
)
}
  return (
    <View style={styles.container}>
      <Text>DRAFT FOR QR SCANNER</Text>
      
     
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
