import { View, Text, StyleSheet } from "react-native";
import React from "react";

//STYLE
import shared from "../share";

//ICON
import Icon from "react-native-vector-icons/MaterialIcons";

export default function BackArrow() {
  return (
    <View style={styles.btn__back_white}>
      <Icon name="arrow-back" size={30} color={shared.color.mainColor} />
    </View>
  );
}
const styles = StyleSheet.create({
  btn__back_white: {
    // width: "10%",
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: shared.color.white,
  },
});
