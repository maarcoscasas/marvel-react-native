import { useEffect } from "react";
import { Text, View } from "react-native";
import { Route } from "@react-navigation/native";

function CharacterScreen(props) {
  const { route, navigation } = props;

  console.log("me traigo", route.params.item);

  useEffect(() => {
    // fetchPersonajes();
  }, []);

  return (
    <View>
      <Text>Ampliacion del caracter</Text>
      {/* <Text>{item.name}</Text> */}
    </View>
  );
}

export default CharacterScreen;
