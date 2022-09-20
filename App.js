import LandingPage from "./src/Components/LandingPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from "./src/Components/Login";
const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Home" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}