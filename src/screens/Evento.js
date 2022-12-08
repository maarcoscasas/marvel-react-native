import { Text, View } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { parametrosComunes } from "../data/apiMarvel";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chip } from "@rneui/themed";

function EventoScreen(props) {
  const { route } = props;
  const evento = route.params.dataEventos;

  const [dataEventos, setDataEventos] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    getDataEventos();
  }, []);

  const getDataEventos = async () => {
    const response = await fetch(`${evento.resourceURI}?${parametrosComunes}`);
    const data = await response.json();
    const dataEvento = data.data.results;
    setDataEventos(dataEvento);
    formatDate(dataEvento[0].start, dataEvento[0].end);
  };

  const formatDate = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    start = {
      date: startDate.toLocaleDateString(),
    };
    end = {
      date: endDate.toLocaleDateString(),
    };
    setDate([{ dateStart: start, dateEnd: end }]);
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        {dataEventos.map((dataEventos, key) => (
          <View style={{ ...styles.container, ...styles.fullWidth }} key={key.toString()}>
            <Card style={styles.fullWidth}>
              <Card.Cover source={{ uri: `${dataEventos.thumbnail.path}` + "." + `${dataEventos.thumbnail.extension}` }} />
              <Text style={styles.paragraph}>{dataEventos.title}"</Text>

              {date.map((formatedDate, key) => (
                <View style={styles.wrapperRow} key={key.toString()}>
                  <Chip title={`desde ${formatedDate.dateStart.date}`} />
                  <Chip title={`hasta ${formatedDate.dateEnd.date}`} />
                </View>
              ))}

              <View style={styles.wrapperCol}>
                <Chip type="outline" title={`${dataEventos.characters.available} personajes`} />
                <Text style={styles.text}>{dataEventos.description}</Text>
              </View>
            </Card>
          </View>
        ))}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
  fullWidth: {
    width: "100%",
  },
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
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
    padding: 10,
  },
  wrapperRow: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapperCol: {
    paddingHorizontal: 10,
    flexDirection: "column",
  },
});

export default EventoScreen;
