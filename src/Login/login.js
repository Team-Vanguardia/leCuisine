//import fondo from './src/Login/fondo1.jpg'
import tw from 'twrnc';
import { View, Text, StatusBar, Pressable, Button } from "react-native";
import { ImageBackground } from 'react-native';
import fondo from './src/Login/fondo1.jpg'
import { TextInput } from "react-native";
export default function LogIn() {
    return(

        <View style={tw`justify-center items-center`}>
    /** 
        <ImageBackground source={fondo} style={tw`w-100 h-190 `}>
        */
          <View style={tw` self-auto items-center -p-5  justify-center mt-60 ml-25 w-1/2 rounded-3xl bg-gray-900  h-3/10`}>
            <Text style={tw`text-white text-xl  py-5 `}>𝓛𝓸𝓰𝓲𝓷</Text>
            <Text style={tw`text-white text-xl  justify-start `}>𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮</Text>
            <TextInput style={tw` bg-white rounded-lg w-8/10 h-1/9`} value='' placeholder=' 𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮' />
            <View style={tw`mt-0.9`}></View>
            <Text style={tw`text-white text-xl  justify-start `}>𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭</Text>
            <TextInput style={tw` bg-white rounded-lg w-8/10 h-1/9`} value='' placeholder=' 𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭' />
            <View style={tw`mt-5 justify-center items-center mb-5 `}>
            <Button style={tw` bg-blue-100 text-red-600 `} title="𝓢𝓲𝓰𝓷 𝓲𝓷 "></Button>
            </View>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`mt-55  text-gray-300 text-4xl `}> 𝓛𝓮 𝓒𝓸𝓾𝓲𝓼𝓲𝓷𝓮</Text>
          </View>
          /**         </ImageBackground>
           */

      </View>



    )}