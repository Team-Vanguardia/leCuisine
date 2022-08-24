import tw from "twrnc";
import { View, Text, StatusBar, Pressable, Button } from "react-native";
import { ImageBackground } from "react-native";
import fondo from "./src/Imagenes/fondo1.jpg";
import RecoverPassword from "./src/Components/RecoverPassword";
import LoginPage from "./src/Components/Login";
import CreateAccount from "./src/Components/CreateAccount";
import LandingPage from "./src/Components/LandingPage";
import { TextInput } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import LogIn from "./src/Components/Login";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<CreateAccount/> } />
        <Route path="/RecoverPassword" element={<RecoverPassword/> } />
        <Route path="/LandingPage" element={<LandingPage/>} />
      </Routes>
    </NativeRouter>
  );
}
