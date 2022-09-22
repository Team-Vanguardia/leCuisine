import { View, Text, ScrollView, Button, Image } from 'react-native';
import tw from 'twrnc';

export const Recipee = () => {

    return (
        <ScrollView style={tw`max-w-md py-4 px-8 bg-blue-100 shadow-lg rounded-lg my-50`}>
            <View class={tw`flex justify-center md:justify-end mt-16`}>
                <Image style={tw`w-20 h-20 object-cover rounded-full border-2 border-indigo-500`} source={{ uri: `https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066` }} />
            </View>
            <View>
                <Text style={tw`mt-4 text-gray-800 text-3xl font-bold`}>Sopa Instantánea</Text>
                <Text style={tw`mt-4 mb-2 text-gray-600 font-semibold `}>Descripción de la receta: </Text>
                <Text style={tw`mt-3 text-gray-600`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</Text>
            </View>
            <View style={tw`flex justify-end mt-4`}>
                <Text style={tw`text-xl font-medium text-indigo-500`}>Ver más detalles</Text>
            </View>
        </ScrollView>
    )
}
