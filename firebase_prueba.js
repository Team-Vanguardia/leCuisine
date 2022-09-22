import firebase from "firebase";
import { View } from 'react-native'
//const { getFirestore, Timestamp, FieldValue } = require("firebase/firestore");
import { StyleSheet, TouchableOpacity, Text, Button } from "react-native";

export default function firedb() {
    const firebaseConfig = {
    apiKey: "AIzaSyCU63i12tPzhlSLOpiMnuhPNYN62v39S-4",
    authDomain: "lecuisine-59d15.firebaseapp.com",
    projectId: "lecuisine-59d15",
    storageBucket: "lecuisine-59d15.appspot.com",
    messagingSenderId: "579775863628",
    appId: "1:579775863628:web:a9ed5ad9b8b9e754494de9",
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = app.firestore()
    return (
        <View>
          {/*<Camera style={styles.camera}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}>
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
          <Text>Image Classification: </Text>
          <Camera style={styles.camera}  onFrame={handleImage} />
      */}
          <Button
            title="Probar base de datos "
          />
        </View>
      );
}


