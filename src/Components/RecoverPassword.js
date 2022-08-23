import tw from "twrnc";
import { View, Text, StatusBar, Pressable, Button } from "react-native";
import { ImageBackground } from "react-native";
import fondo from "../Imagenes/fondo1.jpg";
import { TextInput } from "react-native";

export default function RecoverPassword() {
  return (
    <View style={tw`justify-center items-center`}>
      <ImageBackground source={fondo} style={tw`w-100 h-190 `}>
        <View style={tw` self-auto items-center  justify-center mt-60 ml-17 w-4/6 rounded-3xl bg-gray-900  h-3.9/10`}>
          <Text style={tw`text-white text-lg  -mt-5 p-3 `}>Recuperacion de contraseña</Text>
          <Text style={tw`text-white text-lg  justify-start mb-2`}>Nueva Contreña</Text>

          <TextInput style={tw` bg-white rounded-lg w-7/10 h-1/9 mb-3 text-center `}  placeholder=" Contraseña"  secureTextEntry={true}/>
          <Text style={tw`text-white text-lg  justify-start mb-2`}>Confirma contraseña</Text>
          <TextInput style={tw` bg-white rounded-lg w-7/10 h-1/9 mb-3 text-center `}  placeholder="Confirrma Contraseña" secureTextEntry={true}/>

          <View style={tw`pb-2`}></View>
          <Button style={tw` bg-blue-100  `} title="Recuperar contraseña"/> 
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`mt-40  text-gray-300 text-4xl `}> 𝓛𝓮 𝓒𝓸𝓾𝓲𝓼𝓲𝓷𝓮</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
