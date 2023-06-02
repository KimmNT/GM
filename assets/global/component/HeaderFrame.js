import { StyleSheet, Text, View } from "react-native";
import React from "react";
import share from "../share";

export default function HeaderFrame() {
  return (
    <View style={share.container}>
      {/* HEADER */}
      <View style={share.header}>
        <View style={[share.header__content]}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={share.header__icon}>
              <Icon name="clear-all" size={30} color={share.color.mainColor} />
            </View>
          </TouchableOpacity>
          <View style={share.logo__image}>
            <Image style={share.image} source={LOGO} />
          </View>
          <TouchableOpacity onPress={() => console.log("Noti Opened!")}>
            <View style={share.header__icon}>
              <Icon
                name="notifications"
                size={30}
                color={share.color.mainColor}
              />
              <View style={share.noti__status}></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
