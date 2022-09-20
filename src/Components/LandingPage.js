import {
  View,
} from "react-native";
import { StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import { useState } from "react";
import { CameraType } from 'expo-camera';
import {Camera, Image, MobileModel } from 'react-native-pytorch-core';
const model = require('../Components/best_model_le_cousine.ptl');
const classes = [
  "Aguacate",
  "Arroz",
  "Brocoli",
  "Cebolla",
  "Chile",
  "Frijoles",
  "Huevo",
  "Lechuga",
  "limon",
  "Manzana",
  "Papa",
  "Pepino",
  "Remolacha",
  "Tomate",
  "Uva",
  "Zanahoria",
];
export default function LandingPage() {
  const [classObj, setClassObj] = useState('');
  /* const [type, setType] = useState(CameraType.back); */
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  /* function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  } */


  async function handleImage(image) {
    const predict = await MobileModel.execute(model, {
      image,
    });


    let topclass = classes[predict.result.maxIdx];
    setClassObj(topclass);
    console.log("predict: ", topclass);
    image.release();
  }

  return (
    <View style={styles.container}>
      {/* <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
      <Text>Image Classification: </Text>
      <Camera style={styles.camera}  onFrame={handleImage} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

