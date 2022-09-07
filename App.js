import tw from "twrnc";
import { View, Text, StatusBar, Pressable, Button } from "react-native";
import { ImageBackground } from "react-native";
import fondo from "./src/Imagenes/fondo1.jpg";
import CreateAccount from "./src/Components/CreateAccount";
import LandingPage from "./src/Components/LandingPage";
import { TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeRouter, Route, Routes } from "react-router-native";
import LogIn from "./src/Components/Login";
const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Home" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}