import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

//ICON
import Icon from "react-native-vector-icons/MaterialIcons";

//STYLE
import share from "../../assets/global/share";

export default function CustomDrawerContent(props) {
  //set cho câu CHÀO BUỔI + (SÁNG,TRƯA,CHIỀU,TỐI)
  const [hour, setHour] = useState("");

  useEffect(() => {
    setHour(sayHi());
  }, []);
  //take hour and add string depend on hour
  sayHi = () => {
    let day = new Date();
    let hour = day.getHours();
    // console.log(hour);
    if (hour >= 4 && hour < 12) {
      return "Sáng";
    } else if (hour >= 12 && hour < 15) {
      return "Trưa";
    } else if (hour >= 15 && hour < 18) {
      return "Chiều";
    } else if (hour >= 18 && hour < 24) return "Tối";
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawer__content}>
        {/* HEADER */}
        <View style={styles.drawer__header}>
          <Text style={styles.greeting}>Chào buổi {hour} !</Text>
        </View>
        {/* DRAWER LIST */}
        <View style={styles.drawer__list}>
          {/* DRAWER ITEM */}
          <View style={styles.drawer__item}>
            <DrawerItem
              label={({ color }) => (
                <Text style={styles.item__text}>Trang chủ</Text>
              )}
              onPress={() => props.navigation.navigate("Home")}
              icon={(color, size, focused) => (
                <Icon style={styles.item__icon} name="home" />
              )}
            />
          </View>
          {/* DRAWER ITEM */}
          <View style={styles.drawer__item}>
            <DrawerItem
              label={({ color }) => (
                <Text style={styles.item__text}>Học viên</Text>
              )}
              onPress={() => props.navigation.navigate("StudentRouting")}
              icon={(color, size, focused) => (
                <Icon style={styles.item__icon} name="person-outline" />
              )}
            />
          </View>
          {/* DRAWER ITEM */}
          <View style={styles.drawer__item}>
            <DrawerItem
              label={({ color }) => (
                <Text style={styles.item__text}>Sức khoẻ</Text>
              )}
              onPress={() => props.navigation.navigate("HealthRouting")}
              icon={(color, size, focused) => (
                <Icon style={styles.item__icon} name="favorite-outline" />
              )}
            />
          </View>
          {/* DRAWER ITEM */}
          <View style={styles.drawer__item}>
            <DrawerItem
              label={({ color }) => (
                <Text style={styles.item__text}>Học tập</Text>
              )}
              onPress={() => props.navigation.navigate("StudyRouting")}
              icon={(color, size, focused) => (
                <Icon style={styles.item__icon} name="book" />
              )}
            />
          </View>
          {/* DRAWER ITEM */}
          <View style={styles.drawer__item}>
            <DrawerItem
              label={({ color }) => (
                <Text style={styles.item__text}>Lịch học</Text>
              )}
              // onPress={() => props.navigation.navigate("SheduleIndex")}
              onPress={() =>
                Alert.alert(
                  "Chức năng này hiện đang trong quá trình phát triển!"
                )
              }
              icon={(color, size, focused) => (
                <Icon style={styles.item__icon} name="event" />
              )}
            />
          </View>
        </View>
        {/* LOG OUT */}
        <View>
          <View style={styles.logout}>
            <DrawerItem
              label={({ color }) => (
                <Text style={[styles.item__text, styles.item__logout]}>
                  ĐĂNG XUẤT
                </Text>
              )}
              onPress={() => props.navigation.popToTop()}
              icon={(color, size, focused) => (
                <Icon
                  style={[styles.item__icon, styles.item__logout]}
                  name="logout"
                />
              )}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawer__content: {
    width: "100%",
    height: 700,
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 50,
    // gap: 50,
  },
  drawer__header: {},
  greeting: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: 700,
  },
  drawer__list: {
    gap: 30,
  },
  drawer__item: {},
  item__text: {
    fontSize: 15,
    fontWeight: 500,
  },
  item__icon: {
    fontSize: 25,
  },
  logout: {
    backgroundColor: share.color.red,
    borderRadius: 5,
  },
  item__logout: {
    color: "#FFF",
  },
});
