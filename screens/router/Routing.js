import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../account/Login";
import Confirm from "../account/Confirm";
import BackArrow from "../../assets/global/component/BackArrow";
import Reset from "../account/Reset";
import Success from "../account/Success";
import Drawering from "./Drawering";

export default function Routing() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawering" component={Drawering} />
        <Stack.Screen name="Confirm" component={Confirm} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="BackArrow" component={BackArrow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
