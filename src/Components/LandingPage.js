import { View } from "react-native";
import tw from "twrnc";
import { StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { useState } from "react";
import { Camera } from "expo-camera";
import { db } from "../../firebase";
export default function LandingPage() {

  const ingredientes = ['lemon', 'cucumber'];
  const receta = [];

/*   if (!permission) {
    // Camera permissions are still loading
    return <View />;
  } */
  const handleQuery = () => {
    receta = []
    const citiesRef =  db.collection("Recetas");
    const query = citiesRef.where('ingredientes', 'array-contains-any', ingredientes);
    query.get().then(snap => {
       snap.forEach((doc) => {
/*         console.log(doc.id);
         console.log(doc.data()); */
         receta.push(doc.data().nombre);
         receta.push(doc.data().descripcion);
         receta.push(doc.data().ingredientes);
       });
    });
    console.log(receta);
  };
  /* function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  } */

  return (
    <View style={styles.container}>
      <Button
        style={tw` bg-blue-100 text-red-600 `}
        onPress={handleQuery}
        title="Probar base de datos "
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
