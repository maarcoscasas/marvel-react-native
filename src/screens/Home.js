import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    const dataPersonaje = data.data.results;
    setPersonajes(dataPersonaje);
  };

  const items = personajes;
  const { navigation } = props;
  const renderItem = ({ item, key }) => {
    return <Item item={item} navigation={navigation} />;
  };

  const keyExtractor = (item) => {
    return item.name;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to the official Marvel App</Text>

      <View style={styles.listWrapper}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} style={{ width: "100%" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  listWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderColor: "black",
    borderStyle: "dotted",
  },
});

export default HomeScreen;
