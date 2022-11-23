import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/themed";
import Item from "../componentes/Item";
import { FlatList } from "react-native";
import { apiMarvel } from "../data/apiMarvel";

function HomeScreen(props) {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${apiMarvel}`);
    const data = await response.json();
    const dataMarvel = data.data.results;
    setPersonajes(data);
    console.log("mi data es", dataMarvel, data);
  };

  const items = [{ name: "hola" }, { name: "hola2" }, { name: "hola3" }];
  const { navigation } = props;
  const renderItem = ({ item, key }) => {
    return <Item item={item} navigation={navigation} />;
  };

  const keyExtractor = (item) => {
    return item.name;
  };

  // pegada de la api
  // me guardo en use state lo que recibi
  // paso el state en una flatlist (datos, key y render item)

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to the official Marvel App</Text>

      <View style={styles.listWrapper}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  listWrapper: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderColor: "black",
    borderStyle: "dotted",
  },
});

export default HomeScreen;
