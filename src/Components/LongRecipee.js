import { View, Text, ScrollView, Button, Image, FlatList } from 'react-native';
import React, { useState } from "react";
import tw from 'twrnc';

export const LongRecipee = (props) => {

    const [message, setMessage] = useState("")
    const onPressLike = () => {
        setMessage("Se lo haremos saber al creador.\nGracias por apoyar nuestra comunidad :)")
    }

    return (
        <ScrollView style={tw`max-w-lg py-4 px-8 bg-red-100 shadow-lg rounded-lg my-20`}>
            <View class={tw`flex items-center mt-16`}>
                <Image style={tw`w-50 h-50 flex items-center border`} source={{ uri: `https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg` }} />
            </View>
            <View>
                <Text style={tw`mt-4 mb-2 text-gray-800 text-3xl font-bold`}>{props.nombre}</Text>
                <FlatList
                    data={[{ key: "Ingrediente 1" }, { key: "Ingrediente 2" }, { key: "Ingrediente 3" }, { key: "Ingrediente 4" }]}
                    renderItem={({ item }) => <Text style={tw`mt-2 font-semibold`}>{item.key}</Text>} />
                <Text style={tw`mt-4 mb-2 text-gray-600 font-semibold `}>Descripción de la receta: </Text>
                <Text style={tw`mt-3 text-gray-600`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</Text>
                <Text style={tw`mt-3 text-gray-600`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</Text>
                <Text style={tw`mt-3 text-gray-600`}>Si te da diarrea, te devolvemos tu dinero.</Text>
            </View>
            <View style={tw`flex justify-end mt-4`}>
                <Text onPress={onPressLike} style={tw`text-xl font-medium text-sky-700 mt-3`}>¿Te gustó esta receta?</Text>
                <Text style ={tw`text-xs mt-3`}>{message}</Text>
            </View>
        </ScrollView>
    )
}
