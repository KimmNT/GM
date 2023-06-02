import { View, Text } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthIndex from "../student_health/HealthIndex";
import HealthDetail from "../student_health/HealthDetail";
import CheckingDetail from "../student_health/CheckingDetail";
import NotificationRouting from "../router/NotificationRouting";

const Stack = createNativeStackNavigator();

export default function HealthRouting() {
  return (
    <Stack.Navigator
      initialRouteName="StudentList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="StudentList" component={HealthIndex} />
      <Stack.Screen name="HealthDetail" component={HealthDetail} />
      <Stack.Screen name="CheckingDetail" component={CheckingDetail} />
      <Stack.Screen
        name="NotificationRouting"
        component={NotificationRouting}
      />
    </Stack.Navigator>
  );
}
