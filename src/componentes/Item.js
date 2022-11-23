import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/themed";

function Item(props) {
  const { navigation, item } = props;

  console.log(navigation);

  const navegarACharacter = () => {
    navigation.navigate("Character");
  };

  console.log(item);

  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Button type="solid" title="See more" onPress={navegarACharacter} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Item;
