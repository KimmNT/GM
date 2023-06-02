import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudyNav from "../student_study/StudyNavigation";
import Attendance from "../student_study/Attendance";
import AttendanceDetail from "../student_study/AttendaceDetail";
import Review from "../student_study/Review";
import ReviewDetail from "../student_study/ReviewDetail";
import IOT from "../student_study/IOT";
import ReviewForm from "../student_study/ReviewForm";
import StudyImage from "../student_study/StudyImage";
import NotificationRouting from "../router/NotificationRouting";

const Stack = createNativeStackNavigator();

export default function StudyRouting() {
  return (
    <Stack.Navigator
      initialRouteName="StudentNav"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="StudentNav" component={StudyNav} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="AttendanceDetail" component={AttendanceDetail} />
      <Stack.Screen name="IOT" component={IOT} />
      <Stack.Screen name="StudyImage" component={StudyImage} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
      <Stack.Screen name="ReviewForm" component={ReviewForm} />
      <Stack.Screen
        name="NotificationRouting"
        component={NotificationRouting}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
