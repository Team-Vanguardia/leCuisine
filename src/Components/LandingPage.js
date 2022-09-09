import tw from "twrnc";
import {
  View,
  Text,
  StatusBar,
  Pressable,
  Button,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import fondo from "../Imagenes/fondo1.jpg";
import {StyleSheet} from 'react-native'
import { useRef, useState } from "react";
import {Camera} from "react-native-pytorch-core";

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
  const [classObj, setClassObj] = useState("");

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
    <View style={tw`justify-center items-center`}>
      <View style={styles.container}>
        <Camera style={styles.camera}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    padding: 20,
    alignItems: "center",
  },
  label: {
    marginBottom: 10,
  },
  camera: {
    flexGrow: 1,
    width: "100%",
  },
});
