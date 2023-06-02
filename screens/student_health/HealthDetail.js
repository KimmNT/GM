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
import healthData from "../../databases/studentMed.json";
//STYLE
import share from "../../assets/global/share";
//ICON
import Icon from "react-native-vector-icons/MaterialIcons";
import BackArrowWhite from "../../assets/global/component/BackArrowWhite";

export default function HealthDetail({ route, navigation }) {
  const { healthItem } = route.params;
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
      {/* CONTENT */}
      <SafeAreaView>
        <View style={[styles.health__name_tag, share.color__of_box]}>
          <Text style={styles.name__tag_name}>{healthItem.studentName}</Text>
          <View style={styles.name__tag_number}>
            <Text style={styles.name__tag_nickname}>
              #{healthItem.studentNickName}
            </Text>
            <Text style={styles.name__tag_code}>
              {healthItem.studentMedNumber}
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={share.content}>
            <View style={styles.health__detail}>
              {/* LIST */}
              <View style={[share.student__detail, share.color__of_box]}>
                {/* ITEM */}
                <View style={share.student__detail_item}>
                  <Text style={share.col_left}>Khoá học</Text>
                  <Text style={share.col_right}>{healthItem.course}</Text>
                </View>
                {/* ITEM */}
                <View style={share.student__detail_item}>
                  <Text style={share.col_left}>Lớp học</Text>
                  <Text style={share.col_right}>{healthItem.class}</Text>
                </View>
                {/* ITEM */}
                <View style={share.student__detail_item}>
                  <Text style={share.col_left}>Giới tính</Text>
                  <Text style={share.col_right}>
                    {healthItem.studentGender}
                  </Text>
                </View>
              </View>
              {/* INSURANCE */}
              <View style={styles.insurance}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>thông tin bảo hiểm tai nạn</Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item, share.color__of_box]}>
                  <Text style={share.col_left}>Trạng thái</Text>
                  <Text style={share.col_right}>{healthItem.insurance}</Text>
                </View>
              </View>
              {/* RENDER CHECKING DETAIL */}
              <View>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>
                    chi tiết các lần kiểm tra sức khoẻ
                  </Text>
                </View>
                {healthItem.checkingHealth.map((checkItem) => (
                  <View
                    style={styles.health__checking_list}
                    key={checkItem.checkID}
                  >
                    {/* ITEM */}
                    <View style={[styles.checking__item, share.color__of_box]}>
                      {/* DAY */}
                      <Text style={styles.checking__date}>
                        {checkItem.checkDay}
                      </Text>
                      {/* ITEM */}
                      <View style={share.student__detail_item}>
                        <Text style={share.col_left}>Chiều cao (cm)</Text>
                        <Text style={share.col_right}>
                          {checkItem.checkHeight}
                        </Text>
                      </View>
                      {/* ITEM */}
                      <View style={share.student__detail_item}>
                        <Text style={share.col_left}>Cân nặng (kg)</Text>
                        <Text style={share.col_right}>
                          {checkItem.checkWeight}
                        </Text>
                      </View>
                      {/* NAVIGATE TO CHECKING DETAIL */}
                      <TouchableOpacity
                        style={share.login__btn_box}
                        onPress={() =>
                          navigation.navigate("CheckingDetail", { checkItem })
                        }
                      >
                        <View style={share.login__btn}>
                          <Text style={share.login__btn_text}>
                            xem chi tiết
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
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
  health__name_tag: {
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
  health__checking_list: {
    gap: 20,
  },
  health__detail: {
    gap: 30,
    marginBottom: 300,
  },
  checking__item: {
    paddingVertical: 30,
    marginBottom: 40,
  },
  checking__date: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: 700,
  },
});
