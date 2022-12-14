import tw from "twrnc";
import { View, Text, StatusBar, Pressable, Button, ImageBackground, TextInput } from "react-native";
import fondo from "../Imagenes/fondo1.jpg";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { auth, signin, signup } from "../../firebase";

export default function LogIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  }, [])

  function handleSingUp() {
    signup(email, password)

  }

  const handleLogin = () => {
    signin(email, password)
  }

  return (
    <View style={tw`justify-center items-center`}>
      <ImageBackground source={fondo} style={tw`w-100 h-190 `}>
        <View
          style={tw` self-auto items-center -p-5  justify-center mt-60 ml-25 w-1/2 rounded-3xl bg-gray-900  h-3/10`}
        >
          <Text style={tw`text-white text-xl   `}>𝓛𝓸𝓰𝓲𝓷</Text>
          <Text style={tw`text-white text-xl  justify-start `}>𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮</Text>
          <TextInput style={tw` bg-white rounded-lg w-8/10 h-1/9 text-center`} placeholder=" 𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮" value={email} onChangeText={text => setEmail(text)} />
          <View style={tw`mt-0.9`}></View>
          <Text style={tw`text-white text-xl  justify-start `}>𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭</Text>
          <TextInput style={tw` bg-white rounded-lg w-8/10 h-1/9 text-center`} placeholder=" 𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭" value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
          <View style={tw`mt-5 ml-20  justify-center items-center  `}>
            <Button style={tw` bg-blue-100 text-red-600 `} onPress={handleLogin} title="𝓢𝓲𝓰𝓷 𝓲𝓷 " />
          </View>
          <View style={tw`-mt-9 mr-20  justify-center items-center  `}>
          <Button style={tw` bg-blue-100 text-red-600 `} onPress={handleSingUp} title="𝓢𝓲𝓰𝓷 𝓾𝓹 " />
        </View>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`mt-55  text-gray-300 text-4xl `}> 𝓛𝓮 𝓒𝓸𝓾𝓲𝓼𝓲𝓷𝓮</Text>
        </View>
      </ImageBackground >
    </View >
  );
}