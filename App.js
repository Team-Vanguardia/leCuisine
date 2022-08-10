import tw from 'twrnc';
import { View, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={tw`bg-slate-900 justify-center items-center h-full`}>
    <Text style={tw`text-white text-xl font-bold`}></Text>
    <StatusBar style="auto" />
    <View>
      Hola como estas. Espero estes bien. 
    </View>
  </View>
  );
}