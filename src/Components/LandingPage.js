import tw from "twrnc";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
export default function LandingPage() {
  const ingredientes = ["lemon", "cucumber"];
  const [recetasUI, setrecetasUI] = useState([]);
  const [refresh, setRefresh] = useState(0);
  let contadorIngredientes = 1;
  /*   if (!permission) {
    // Camera permissions are still loading
    return <View />;
  } */
  const handleQuery = () => {
    let recetas = [];
    const citiesRef = db.collection("Recetas");
    const query = citiesRef.where(
      "ingredientes",
      "array-contains-any",
      ingredientes
    );
    query.get().then((snap) => {
      snap.forEach((doc) => {
        let ingreso = {
          nombre: doc.data().nombre,
          descripcion: doc.data().descripcion,
          ingredientes: doc.data().ingredientes,
        };
        /*       console.log(doc.id);*/
        recetas.push(ingreso);
      });
    });
    setrecetasUI(recetas);
    console.log(recetasUI);
  };

  const verRecetas = () => {
    handleQuery();
  };

  /*  useEffect(() => {
  console.log("Actualizo el componente")
  handleQuery()
 }, [recetasUI]) */

  return (
    <>
      <View>
        <View>
          {recetasUI.map((item, id) => (
            <View
              style={tw`max-w-md py-4 px-8 bg-blue-100 shadow-lg rounded-lg my-50`}
            >
              <View class={tw`flex justify-center md:justify-end mt-16`}>
                <Image
                  style={tw`w-20 h-20 object-cover rounded-full border-2 border-indigo-500`}
                  source={{
                    uri: `https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066`,
                  }}
                />
              </View>
              <View>
                <Text style={tw`mt-4 text-gray-800 text-3xl font-bold`}>
                  {item.nombre}
                </Text>
                <Text style={tw`mt-4 mb-2 text-gray-600 font-semibold `}>
                  Descripción de la receta:{" "}
                </Text>
                <Text style={tw`mt-3 text-gray-600`}>{item.descripcion}</Text>
              </View>
              <View style={tw`flex justify-end mt-4`}>
                {item.ingredientes.map((ing, id) =>(
                  <Text style={tw`text-xl font-medium text-indigo-500`}>
                    {(contadorIngredientes++) + ". " + ing}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View>
          <Pressable
            style={tw`w-30 h-10 bg-slate-900 text-black rounded-full self-center pt-2 mb-4`}
            onPress={() => verRecetas()}
          >
            <Text style={tw` text-lg self-center text-white `}>
              Ver Recetas
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
