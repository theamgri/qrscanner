
import React, {useState, useEffect} from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  console.log("App is working!");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Please scan something...')

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

//returning the view
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>QR SCANNER</Text>
      <View style={styles.barcodebox}>
      
      <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 550, width: 500 }} />
          
      </View>
     
      
      <Text style={styles.maintext}>{text}</Text>
      
      
      {scanned && <Button style={styles.buttonn}title={'SCAN AGAIN'} onPress={() => setScanned(false)} color='#497274' />}
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
  title: {
    fontSize: 30,
    paddingBottom:50,
    fontWeight: 'bold'
  },
  
  barcodebox: {
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30, 
    backgroundColor: 'tomato'
  },
  buttonn: {
    padding: 5
  },
  maintext: {
    fontSize: 21,
    padding: 30,
    padding: 30,,
    backgroundColor: '#EFF5F5',
    borderRadius: 5
  }
});
