import tw from "twrnc";
import { View, Text, StatusBar, Pressable, Button } from "react-native";
import { ImageBackground } from "react-native";
import fondo from "../Imagenes/fondo1.jpg";
import { TextInput } from "react-native";

export default function RecoverPassword() {
  return (
    <View style={tw`justify-center items-center`}>
      <ImageBackground source={fondo} style={tw`w-100 h-190 `}>
        <View
          style={tw` self-auto items-center -p-5  justify-center mt-60 ml-25 w-1/2 rounded-3xl bg-gray-900  h-3/10`}
        >
          <Text style={tw`text-white text-xl  py-5 `}>Recuperacion de contraseña</Text>
          <Text style={tw`text-white text-xl  justify-start `}>Correo electrónico</Text>
          <TextInput
            style={tw` bg-white rounded-lg w-8/10 h-1/9`}
            value=""
            placeholder="Correo"
          />
          <View style={tw`mt-0.9`}></View>
          <Button
              style={tw` bg-blue-100 text-red-600 `}
              title="Recuperar contraseña"
            ></Button>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`mt-55  text-gray-300 text-4xl `}> 𝓛𝓮 𝓒𝓸𝓾𝓲𝓼𝓲𝓷𝓮</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
