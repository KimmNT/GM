import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";

import share from "../../assets/global/share";
//ICON
import Icon from "react-native-vector-icons/MaterialIcons";
import BackArrow from "../../assets/global/component/BackArrow";

const HomeScreen = ({
  navigation,
  notifications,
  onPressNotification,
  showAllNotifications,
  showReadNotifications,
  showUnreadNotifications,
  selectedFilter,
}) => {
  return (
    <View style={share.container}>
      <View style={share.content}>
        <SafeAreaView>
          {/* HEAD */}
          <TouchableOpacity
            style={styles.btn__back}
            onPress={() => navigation.goBack()}
          >
            <BackArrow />
          </TouchableOpacity>
          {/* CONTENT */}
          <View style={styles.noti__container}>
            <View style={share.account__head}>
              <Text style={share.title__account}>Thông báo</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedFilter === "all" && styles.selectedButton,
                ]}
                onPress={showAllNotifications}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedFilter === "all" && styles.selectedButtonText,
                  ]}
                >
                  Tất cả
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedFilter === "read" && styles.selectedButton,
                ]}
                onPress={showReadNotifications}
              >
                <Text style={styles.buttonText}>Đã đọc</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedFilter === "unread" && styles.selectedButton,
                ]}
                onPress={showUnreadNotifications}
              >
                <Text style={styles.buttonText}>Chưa đọc</Text>
              </TouchableOpacity>
            </View>
            {/* LIST */}
            {notifications.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.notificationContainer,
                  share.color__of_box,
                  item.pressed && styles.pressedNotification,
                ]}
                onPress={() => {
                  onPressNotification(item.id);
                  navigation.navigate("NotiDetail", {
                    content: item.content,
                    name: item.name,
                    time: item.time,
                  });
                }}
              >
                <Text style={styles.notificationName}>{item.name}</Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn__back: {
    marginTop: 50,
  },
  noti__container: {
    gap: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 30,
    gap: 10,
  },
  button: {
    width: "30%",
    padding: 5,
  },
  selectedButton: {
    // backgroundColor: share.color.mainColor,
    borderRadius: 5,
    borderColor: share.color.mainColor,
    borderWidth: 2,
  },
  buttonText: {
    color: share.color.mainColor,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pressedNotification: {
    opacity: 0.5,
  },
  notificationName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 14,
    color: "gray",
  },
});

export default HomeScreen;
