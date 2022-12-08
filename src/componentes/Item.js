import { StyleSheet, View, Text } from "react-native";
import * as React from "react";
import { Avatar, Card, Title } from "react-native-paper";
import { Button } from "@rneui/base";

function Item(props) {
  const { navigation, item } = props;

  const navegarACharacter = (item) => {
    navigation.navigate("Character", { item });
  };

  return (
    <View style={styles.item}>
      <Card style={{ width: 300 }}>
        <Card.Cover source={{ uri: `${item.thumbnail.path}` + "." + `${item.thumbnail.extension}` }} />
        <Card.Title title={item.name} />
        <Card.Content>
          <Text style={styles.text}>{item.description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button size="sm" color="secondary" type="clear" title="Ver más" onPress={() => navegarACharacter(item)} />
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  text: {
    marginBottom: 10,
  },
});

export default Item;
