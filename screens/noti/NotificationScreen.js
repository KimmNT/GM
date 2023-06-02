import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import share from "../../assets/global/share";
import BackArrow from "../../assets/global/component/BackArrow";

export default function NotificationScreen({ route, navigation }) {
  const { content, name, time } = route.params;

  return (
    <View style={share.container}>
      <View style={share.content}>
        <SafeAreaView>
          <TouchableOpacity
            style={styles.back__btn}
            onPress={() => navigation.goBack()}
          >
            <BackArrow />
          </TouchableOpacity>
          <View style={[styles.noti__detail, share.color__of_box]}>
            <Text style={styles.noti__title}>{name}</Text>
            <Text style={styles.noti__time}>{time}</Text>
            <Text style={styles.noti__content}>{content}</Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  notificationContent: {
    fontSize: 18,
    textAlign: "center",
  },
  back__btn: {
    marginTop: 50,
  },
  noti__detail: {
    marginTop: 50,
    paddingHorizontal: 30,
    paddingVertical: 50,
    gap: 20,
  },
  noti__title: {
    fontSize: 30,
    fontWeight: 600,
  },
  noti__time: {
    fontWeight: 600,
  },
  noti__content: {
    marginTop: 50,
  },
});
