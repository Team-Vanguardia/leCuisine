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
import { useRef, useState } from "react";
import { Camera, MobileModel } from "react-native-pytorch-core";

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
  const [topClass, setTopClass] = React.useState(
    "Press capture button to classify what's in the camera view!"
  );

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
      <ImageBackground source={fondo} style={tw`w-100 h-190 `}>
        <View
          style={tw` self-auto items-center -p-5  justify-center mt-60 ml-25 w-1/2 rounded-3xl bg-gray-900  h-3/10`}
        >
          <Text style={tw`text-white text-xl  py-5 `}>
            Esta es la pagina principal
          </Text>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`mt-55  text-gray-300 text-4xl `}> 𝓛𝓮 𝓒𝓸𝓾𝓲𝓼𝓲𝓷𝓮</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.label}>Classification: {classObj}</Text>
        <Camera style={styles.camera} onFrame={handleImage} />
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
