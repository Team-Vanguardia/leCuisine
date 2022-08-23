import tw from 'twrnc';
import { View, Text, StatusBar, Pressable, Button } from "react-native";
import { ImageBackground } from 'react-native';
import fondo from './src/Login/fondo1.jpg'
import { TextInput } from "react-native";
export default function App() {
  return (
    <View style={tw`justify-center items-center`}>
      <ImageBackground source={fondo} style={tw`w-100 h-190 `}>
        <View style={tw` self-auto items-center -p-5  justify-center mt-60 ml-25 w-1/2 rounded-3xl bg-gray-900  h-4/10`}>
          <Text style={tw`text-white text-xl  -mt-5 `}>𝓛𝓸𝓰𝓲𝓷</Text>
          <Text style={tw`text-white text-xl  justify-start mt-3`}>𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮</Text>
          <TextInput id="username" style={tw` bg-white rounded-lg w-8/10 h-1/9`} textAlign="center" placeholder=' 𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮' required />
          <View style={tw`mt-0.9`}></View>
          <Text style={tw`text-white text-xl  justify-start `}>𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭</Text>
          <TextInput secureTextEntry={true} id="password" style={tw` bg-white rounded-lg  w-8/10 h-1/9  `} textAlign="center" type="password" placeholder=' 𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭' required />
          <View style={tw`mt-5 justify-center items-center mb-5 `}>
            <Button title="𝓢𝓲𝓰𝓷 𝓲𝓷 " />
          </View>
          <View style={tw` justify-center items-center -mb-5 `}>
            <Text style={tw`text-white text-base `}>𝓒𝓻𝓮𝓪𝓽𝓮 𝓐𝓬𝓬𝓸𝓾𝓷𝓽</Text>
          </View>
        </View>
        <View style={tw`items-center `}>
          <Text style={tw`mt-40  text-gray-300 text-4xl  mr-5`}> 𝓛𝓮 𝓒𝓸𝓾𝓲𝓼𝓲𝓷𝓮</Text>
        </View>
      </ImageBackground>
    </View>
  );
}


































