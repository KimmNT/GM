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

export default function ReviewForm({ route, navigation }) {
  const { review } = route.params;

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Convert height to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const bmiResult = calculateBMI(review.reviewHeight, review.reviewWeight);

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
        <ScrollView>
          <View style={share.content}>
            <View style={styles.form__content}>
              <Text style={styles.form__name}>{review.reviewName}</Text>
              {/* BODY STATS */}
              <View style={[share.stats]}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>chỉ số cơ thể</Text>
                </View>
                <View style={[share.stat__group, share.color__of_box]}>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="fitness-center"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Cân nặng</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>{review.reviewWeight}</Text>
                      <Text style={share.unit}>kg</Text>
                    </View>
                  </View>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="height"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Chiều cao</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>{review.reviewHeight}</Text>
                      <Text style={share.unit}>cm</Text>
                    </View>
                  </View>
                  {/* BMI */}
                  <View style={styles.bmi}>
                    <View style={styles.bmi__result}>
                      <Text style={styles.result}>BMI: {bmiResult}</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* SKILLS */}
              <View style={[styles.form__item]}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>kỹ năng</Text>
                </View>
                <View style={share.color__of_box}>
                  {/* ITEM */}
                  <View style={share.student__detail_item}>
                    <Text style={share.col_left}>Dẫn bóng</Text>
                    <Text style={share.col_right}>
                      {review.reviewDribble}/5
                    </Text>
                  </View>
                  {/* ITEM */}
                  <View style={share.student__detail_item}>
                    <Text style={share.col_left}>Chuyền bóng</Text>
                    <Text style={share.col_right}>{review.reviewPass}/5</Text>
                  </View>
                  {/* ITEM */}
                  <View style={share.student__detail_item}>
                    <Text style={share.col_left}>Sút bóng</Text>
                    <Text style={share.col_right}>{review.reviewShoot}/5</Text>
                  </View>
                  {/* ITEM */}
                  <View style={share.student__detail_item}>
                    <Text style={share.col_left}>Kiểm soát bóng</Text>
                    <Text style={share.col_right}>
                      {review.reviewControl}/5
                    </Text>
                  </View>
                </View>
              </View>
              {/* ONTIME */}
              <View style={[styles.form__item]}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>chuyên cần</Text>
                </View>
                <View style={share.color__of_box}>
                  {/* ITEM */}
                  <View style={share.student__detail_item}>
                    <View style={styles.ontime}>
                      <Text style={styles.ontime__score}>
                        {review.reviewOntime}/5
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* SKILLS */}
              <View style={[styles.form__item]}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>đánh giá của hlv</Text>
                </View>
                <View style={share.color__of_box}>
                  {/* ITEM */}
                  <View style={[share.student__detail_item, share.break]}>
                    <Text style={share.col_left}>Nội dung đánh giá</Text>
                    <Text style={share.col_right}>{review.coachReviewing}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  form__content: {
    marginBottom: 120,
  },
  //BODY STAT
  bmi: {
    width: "100%",
    gap: 30,
  },
  bmi__result: {
    backgroundColor: share.color.mainColor,
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    color: share.color.white,
    fontSize: 25,
  },

  form__item: {
    // paddingVertical: 30,
    marginBottom: 10,
    // gap: 20,
  },
  form__name: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 600,
    marginVertical: 30,
  },
  ontime: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: share.color.mainColor,
    width: "100%",
    padding: 10,
    borderRadius: 5,
  },
  ontime__score: {
    fontSize: 30,
    fontWeight: 600,
    color: share.color.white,
  },
});
