import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../account/Login";
import HomePage from "../HomePage";
import MyDrawer from "../drawer/MyDrawer";
const Drawer = createDrawerNavigator();

export default function Drawering() {
  return (
    // <NavigationContainer>
    //   <MyDrawer />
    // </NavigationContainer>
    <>
      <MyDrawer />
    </>
  );
}
