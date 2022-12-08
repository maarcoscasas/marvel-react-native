import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import CharacterScreen from "./src/screens/Character";
import EventoScreen from "./src/screens/Evento";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Marvel app",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
        <Stack.Screen name="Evento" component={EventoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
