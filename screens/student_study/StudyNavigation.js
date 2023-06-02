import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import share from "../../assets/global/share";
import Icon from "react-native-vector-icons/MaterialIcons";
import LOGO from "../../assets/image/logo_header.png";

export default function StudyNavigation({ navigation }) {
  return (
    <View>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationRouting")}
          >
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
      <View style={[share.content, styles.study__nav]}>
        <SafeAreaView style={[styles.study__nav_content]}>
          <TouchableOpacity
            style={[styles.nav__btn, share.color__of_box]}
            onPress={() => navigation.navigate("Attendance")}
          >
            <View style={styles.nav__icon}>
              <Icon
                name="event-available"
                size={70}
                color={share.color.white}
              />
            </View>
            <Text style={styles.nav__title}>thông tin điểm danh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.nav__btn, share.color__of_box]}
            onPress={() => navigation.navigate("Review")}
          >
            <View style={styles.nav__icon}>
              <Icon name="rate-review" size={70} color={share.color.white} />
            </View>
            <Text style={styles.nav__title}>đánh giá định kì</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  study__nav_content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 100,
  },
  nav__btn: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  nav__icon: {
    backgroundColor: share.color.mainColor,
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  nav__title: {
    fontSize: 15,
    textTransform: "uppercase",
    marginTop: 30,
    textAlign: "center",
    fontWeight: 600,
  },
});
