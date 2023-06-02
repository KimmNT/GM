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
//DATA
import reviewData from "../../databases/studentReview.json";

//STYLE
import share from "../../assets/global/share";

//Icon
import Icon from "react-native-vector-icons/MaterialIcons";

//IMAGE
import LOGO from "../../assets/image/logo_header.png";
import BackArrowWhite from "../../assets/global/component/BackArrowWhite";

export default function ReviewDetail({ navigation, route }) {
  const { item } = route.params;

  return (
    <View style={share.container}>
      {/* HEADER */}
      <View style={share.header}>
        <View style={[share.header__content]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <View style={share.header__icon}>
              <Icon name="clear-all" size={30} color={share.color.mainColor} />
            </View> */}
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
        <View style={[styles.review__name_tag, share.color__of_box]}>
          <Text style={styles.name__tag_name}>{item.studentName}</Text>
          <View style={styles.name__tag_number}>
            <Text style={styles.name__tag_nickname}>
              #{item.studentNickName}
            </Text>
            <Text style={styles.name__tag_code}>Khoá học: {item.course}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={share.content}>
            <View style={styles.review__content}>
              {item.reviewList.map((review) => (
                <View
                  style={styles.health__checking_list}
                  key={review.reviewID}
                >
                  {/* ITEM */}
                  <View style={[styles.checking__item, share.color__of_box]}>
                    {/* NAME */}
                    <Text style={styles.checking__date}>
                      {review.reviewName}
                    </Text>
                    {/* ITEM */}
                    <View style={share.student__detail_item}>
                      <Text style={share.col_left}>Lớp học</Text>
                      <Text style={share.col_right}>{review.class}</Text>
                    </View>
                    {/* ITEM */}
                    <View style={share.student__detail_item}>
                      <Text style={share.col_left}>Đánh giá của HLV</Text>
                      <Text style={[share.col_right, share.highlight]}>
                        {review.reviewCoach}
                      </Text>
                    </View>
                    {/* ITEM */}
                    <View style={share.student__detail_item}>
                      <Text style={share.col_left}>Ngày tạo</Text>
                      <Text style={share.col_right}>
                        {review.reviewCreatedDay}
                      </Text>
                    </View>
                    {/* ITEM */}
                    <View style={share.student__detail_item}>
                      <Text style={share.col_left}>Ngày chỉnh sửa</Text>
                      <Text style={share.col_right}>
                        {review.reviewEditedDay}
                      </Text>
                    </View>
                    {/* NAVIGATE TO CHECKING DETAIL */}
                    <TouchableOpacity
                      style={share.login__btn_box}
                      onPress={() =>
                        navigation.navigate("ReviewForm", { review })
                      }
                    >
                      <View style={share.login__btn}>
                        <Text style={share.login__btn_text}>xem chi tiết</Text>
                      </View>
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
  review__name_tag: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 20,
    // marginBottom: 100,
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

  review__content: {
    marginBottom: 210,
  },
  health__detail: {
    gap: 30,
    marginBottom: 300,
  },
  checking__item: {
    paddingVertical: 30,
    marginBottom: 30,
    // gap: 20,
  },
  checking__date: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: 700,
  },
});
