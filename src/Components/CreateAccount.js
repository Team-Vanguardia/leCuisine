import tw from "twrnc";
import { View, Text, StatusBar, Pressable, Button, TextComponent } from "react-native";
import { ImageBackground, SafeAreaView, ScrollView } from "react-native";
import fondo from "../Imagenes/fondo1.jpg";
import { TextInput } from "react-native";
export default function CreateAccount() {
    return (
        <View style={tw`justify-center items-center`}>
            <ImageBackground source={fondo} style={tw`w-full h-full `}>
                <ScrollView contentContainerStyle={tw` self-auto items-center  justify-center mt-30 mb-30  ml-15 w-2/3 rounded-3xl bg-gray-900  `}>
                    <Text style={tw`text-3xl text-white`}>
                       correo
                       usuario
                       contrasena
                    </Text>
                </ScrollView>
                <View style={tw`bg-gray-200 w-full w-2/3 rounded-3xl ml-15`}>
                <Text style={tw`text-3xl text-white`}>
                        ESPACIO DESTINADO 
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}