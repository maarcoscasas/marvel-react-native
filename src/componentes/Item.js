import { StyleSheet, View, Text } from "react-native";
import * as React from "react";
import { Avatar, Card, Title } from "react-native-paper";
import { Button } from "@rneui/base";

function Item(props) {
  const { navigation, item } = props;

  const navegarACharacter = (item) => {
    navigation.navigate("Character", { item });
  };

  console.log(item);
  // console.log(item.thumbnail.path + "." + item.thumbnail.extension);
  // console.log(`${item.thumbnail.path}` + "." + `${item.thumbnail.extension}`);

  return (
    <View style={styles.item}>
      <Card style={{ width: "80%" }}>
        <Card.Title title={item.name} />
        <Card.Content>
          {/* <Title>{item.name}</Title> */}
          <Text>{item.description}</Text>
        </Card.Content>

        <Card.Cover source={{ uri: `${item.thumbnail.path}` + "." + `${item.thumbnail.extension}` }} />
        <Card.Actions>
          <Button type="solid" title="See more" onPress={() => navegarACharacter(item)} />
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});

export default Item;
