import { View, Text } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentIndex from "../student/StudentIndex";
import StudentDetail from "../student/StudentDetail";
import NotificationRouting from "../router/NotificationRouting";

const Stack = createNativeStackNavigator();

export default function StudentRouting() {
  return (
    <Stack.Navigator
      initialRouteName="StudentList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="StudentList" component={StudentIndex} />
      <Stack.Screen name="StudentDetail" component={StudentDetail} />
      <Stack.Screen
        name="NotificationRouting"
        component={NotificationRouting}
      />
    </Stack.Navigator>
  );
}
