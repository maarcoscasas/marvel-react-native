import { useEffect, useState } from "react";
import { Text, View, ScrollView, FlatList, StyleSheet, ActivityIndicator, TextInput } from "react-native";
import { Button, Image, Icon } from "@rneui/themed";
import { people } from "../data/data";

const ejercicioImg = require("../iconos/exercise.png");
const foodImg = require("../iconos/food.png");
const waterImg = require("../iconos/water.png");

const keyExtractor = (item) => item.id.toString();

const styles = StyleSheet.create({
  image: { width: 70, height: 70 },
  row: { flexDirection: "row", alignItems: "center" },
  input: { backgroundColor: "white", width: "70%", height: 35, alignSelf: "center", borderWidth: 1 },
});

function CharacterScreen(props) {
  const { navigation, route } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [texto, setTexto] = useState("");
  const [personas, setPersonas] = useState(people);
  //const { numero, fn } = route.params;
  //console.log("numero", numero);

  useEffect(() => {
    //fetchPersonajes();
  }, []);

  const fetchPersonajes = async () => {
    setIsLoading(true);
    const personajes = await fetch("urlDeMarvel");
    setIsLoading(false);
  };

  const navegarAHome = () => {
    navigation.navigate("Home", {});
  };

  const cuandoCambiaTexto = (txt) => {
    //console.log("txt", txt);
    setTexto(txt);
  };

  const renderItem = ({ item, index }) => (
    <View>
      <Image source={{ uri: item.foto }} containerStyle={styles.image} PlaceholderContent={<ActivityIndicator size={30} color="red" />} />
      <Text>{item.nombre}</Text>
      <Text>{item.mail}</Text>
      <View style={styles.row}>
        <Image source={ejercicioImg} containerStyle={styles.image} />
        <Image source={foodImg} containerStyle={styles.image} />
        <Image source={waterImg} containerStyle={styles.image} />
      </View>
    </View>
  );

  const getPersonasFiltradas = () => {
    let personasFiltradas = [...personas];
    if (texto !== "") {
      personasFiltradas = personasFiltradas.filter((p, index) => p.nombre.includes(texto));
    }
    return personasFiltradas;
  };

  const personasFiltradas = getPersonasFiltradas();
  return (
    <View>
      {isLoading == true && <ActivityIndicator size={30} color="red" />}
      <Text>Character</Text>
      <TextInput style={styles.input} value={texto} onChangeText={cuandoCambiaTexto} />
      <Button title="navegar a home" onPress={navegarAHome} />
      <FlatList data={personasFiltradas} keyExtractor={keyExtractor} renderItem={renderItem} />

      {/* people.map((item, key)=>(<View key={item.id.toString()}></View>)) */}
    </View>
  );
}

export default CharacterScreen;
