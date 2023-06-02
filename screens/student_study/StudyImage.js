import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

//IMAGE
import LOGO from "../../assets/image/logo_header.png";

//JSON
import attendanceData from "../../databases/studentAttendance.json";
//STYLE
import share from "../../assets/global/share";
//ICON
import Icon from "react-native-vector-icons/MaterialIcons";
import BackArrowWhite from "../../assets/global/component/BackArrowWhite";

export default function StudyImage({ route, navigation }) {
  const { att } = route.params;
  return (
    <View style={share.container}>
      {/* HEADER */}
      <View style={share.header}>
        <View style={[share.header__content]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowWhite />
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
      <SafeAreaView>
        <ScrollView>
          <View style={share.content}>
            <View style={styles.image__content}>
              <Text style={styles.image__headline}>
                Hình ảnh lớp học ngày: {att.attDay}
              </Text>
              <View style={styles.image__list}>
                {att.attImages.map((image, index) => (
                  <Image
                    key={index}
                    style={styles.att__image}
                    source={{ uri: image.url }}
                  />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  image__content: {
    marginBottom: 100,
  },
  image__headline: {
    fontSize: 20,
    fontWeight: 600,
    width: "100%",
  },
  image__list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  att__image: {
    marginTop: 50,
    width: "45%",
    height: 100,
    resizeMode: "cover",
  },
});
