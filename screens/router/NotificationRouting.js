import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import notificationsData from "../../databases/notifications.json";
import NotiIndex from "../noti/NotiIndex";
import NotiDetail from "../noti/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function NotificationRouting() {
  const [notifications, setNotifications] = useState(
    notificationsData.notifications
  );
  const [filteredNotifications, setFilteredNotifications] =
    useState(notifications);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const markNotificationAsPressed = (notificationId) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === notificationId) {
        return { ...notification, pressed: true };
      }
      return notification;
    });

    setNotifications(updatedNotifications);
  };

  const showAllNotifications = () => {
    setFilteredNotifications(notifications);
    setSelectedFilter("all");
  };

  const showReadNotifications = () => {
    const readNotifications = notifications.filter(
      (notification) => notification.pressed
    );
    setFilteredNotifications(readNotifications);
    setSelectedFilter("read");
  };

  const showUnreadNotifications = () => {
    const unreadNotifications = notifications.filter(
      (notification) => !notification.pressed
    );
    setFilteredNotifications(unreadNotifications);
    setSelectedFilter("unread");
  };

  return (
    <Stack.Navigator
      initialRouteName="NotiIndex"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="NotiIndex">
        {(props) => (
          <NotiIndex
            {...props}
            notifications={filteredNotifications}
            onPressNotification={markNotificationAsPressed}
            showAllNotifications={showAllNotifications}
            showReadNotifications={showReadNotifications}
            showUnreadNotifications={showUnreadNotifications}
            selectedFilter={selectedFilter}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="NotiDetail"
        component={NotiDetail}
        options={{ title: "Notification Content" }}
      />
    </Stack.Navigator>
  );
}
