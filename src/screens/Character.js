import { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import { Route } from "@react-navigation/native";
import { Image } from "@rneui/base";
import { Button } from "@rneui/base";
import { List } from "react-native-paper";
import { useState } from "react";
import React from "react";
import { Card } from "react-native-paper";

function CharacterScreen(props) {
  const { route, navigation } = props;
  const item = route.params.item;
  const navegarDetalleEvento = (dataEventos) => {
    navigation.navigate("Evento", { dataEventos });
  };

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.fullWidth}>
            <Text style={styles.paragraph}>{item.name}"</Text>
            <Card.Cover source={{ uri: `${item.thumbnail.path}` + "." + `${item.thumbnail.extension}` }} />

            <View style={styles.wrapper}>
              <Text style={styles.text}>Cantidad de comics: {item.comics.available}</Text>
              <Text style={styles.text}>Cantidad de series: {item.series.available}</Text>
              <Text style={styles.text}>Cantidad de historias: {item.stories.available}</Text>
              <Text style={styles.text}>Cantidad de eventos: {item.events.available}</Text>
            </View>
          </Card>
        </View>

        <View style={styles.wrapper}>
          <List.Section>
            <List.Accordion title="Eventos" left={(props) => <List.Icon {...props} icon="calendar" />} onPress={handlePress}>
              {item.events.items.map((dataEventos, key) => (
                <List.Item title={dataEventos.name} onPress={() => navegarDetalleEvento(dataEventos)} key={key.toString()} />
              ))}
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
  fullWidth: {
    width: "100%",
  },
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
    width: "100%",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  text: {
    fontSize: 14,
    textAlign: "left",
    padding: 5,
  },
  wrapper: {
    padding: 20,
    width: "100%",
  },
});

export default CharacterScreen;
