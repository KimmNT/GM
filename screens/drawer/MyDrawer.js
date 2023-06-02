import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

//IMPORT COMPONENTS
import HomePage from "../HomePage";
import Login from "../account/Login";
import StudentIndex from "../student/StudentIndex";
import SheduleIndex from "../student_shedule/SheduleIndex";
import CustomDrawerContent from "./CustomDrawerContent";
import StudentRouting from "../router/StudentRouting";
import HealthRouting from "../router/HealthRouting";
import StudyRouting from "../router/StudyRouting";
import NotificationRouting from "../router/NotificationRouting";

const Drawer = createDrawerNavigator();

//sẽ đảm nhận như một router truyền props giữa các component
export default function MyDrawer(props) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="StudentRouting" component={StudentRouting} />
      <Drawer.Screen name="HealthRouting" component={HealthRouting} />
      <Drawer.Screen name="StudyRouting" component={StudyRouting} />
      <Drawer.Screen name="SheduleIndex" component={SheduleIndex} />
      <Drawer.Screen
        name="NotificationRouting"
        component={NotificationRouting}
      />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
