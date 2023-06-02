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

export default function AttendaceDetail({ navigation, route }) {
  const { item } = route.params;
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
        <View style={[styles.attendance__name_tag, share.color__of_box]}>
          <Text style={styles.name__tag_name}>{item.studentName}</Text>
          <View style={styles.name__tag_number}>
            <Text style={styles.name__tag_nickname}>
              #{item.studentNickName}
            </Text>
            <Text style={styles.name__tag_code}>Khoá học: {item.course}</Text>
          </View>
        </View>
        <View style={[styles.classes, share.color__of_box]}>
          {/* ITEM */}
          <View style={styles.classes__item}>
            <Text style={styles.classess__title}>Tổng số buổi</Text>
            <Text style={styles.classess__number}>{item.registered}</Text>
          </View>
          {/* ITEM */}
          <View style={styles.classes__item}>
            <Text style={styles.classess__title}>Đã học</Text>
            <Text style={styles.classess__number}>{item.learned}</Text>
          </View>
          {/* ITEM */}
          <View style={styles.classes__item}>
            <Text style={styles.classess__title}>Còn lại</Text>
            <Text style={styles.classess__number}>{item.remaining}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={share.content}>
            <View style={styles.attendance__content}>
              {item.attendanceList.map((att) => (
                <View
                  key={att.attID}
                  style={[styles.att__item, share.color__of_box]}
                >
                  <Text style={styles.att__day}>{att.attDay}</Text>
                  {/* ITEM */}
                  <View style={[share.student__detail_item]}>
                    <Text style={share.col_left}>Thời gian</Text>
                    <Text style={share.col_right}>{att.attTime}</Text>
                  </View>
                  {/* NAVIGATE TO CHECKING DETAIL */}
                  <View style={styles.att__btn}>
                    <TouchableOpacity
                      style={[styles.btn, styles.iot__btn]}
                      onPress={() => navigation.navigate("IOT")}
                    >
                      <Text style={styles.btn__text}> thông số</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btn, styles.image__btn]}
                      onPress={() => navigation.navigate("StudyImage", { att })}
                    >
                      <Text style={styles.btn__text}>ảnh buổi tập</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  //NAME
  attendance__name_tag: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 20,
  },
  name__tag_name: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  name__tag_number: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  name__tag_nickname: {
    fontSize: 15,
    fontStyle: "italic",
  },
  name__tag_code: {
    fontSize: 17,
    fontWeight: 600,
    marginLeft: 20,
  },

  //CLASSES
  classes: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  classes__item: {
    width: "31.9%",
    backgroundColor: share.color.mainColor,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  classess__title: {
    // fontSize: 10,
    fontWeight: 600,
    color: share.color.white,
    marginBottom: 10,
  },
  classess__number: {
    fontSize: 30,
    fontWeight: 600,
    color: share.color.white,
  },

  attendance__content: {
    gap: 50,
    marginTop: 20,
    marginBottom: 400,
  },
  att__item: {},
  att__day: {
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    fontWeight: 600,
  },
  //BUTTON
  att__btn: {
    borderTopColor: "#F0F0F0",
    borderTopWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn: {
    width: "45%",
    // textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  iot__btn: {
    backgroundColor: share.color.orange,
  },
  image__btn: {
    backgroundColor: share.color.mainColor,
  },
  btn__text: {
    textTransform: "uppercase",
    fontSize: 13,
    color: share.color.white,
    fontWeight: 600,
  },
});
