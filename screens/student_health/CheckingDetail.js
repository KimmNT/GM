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
import React, { useEffect, useState } from "react";

//IMAGE
import LOGO from "../../assets/image/logo_header.png";

//JSON
import healthData from "../../databases/studentMed.json";
//STYLE
import share from "../../assets/global/share";
//ICON
import Icon from "react-native-vector-icons/MaterialIcons";
import BackArrowWhite from "../../assets/global/component/BackArrowWhite";

export default function CheckingDetail({ route, navigation }) {
  const { checkItem } = route.params;

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Convert height to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };
  const gainWeightSlow = (calories) => {
    return calories + 50;
  };
  const loseWeightSlow = (calories) => {
    return calories - 50;
  };
  const gainWeightNormal = (calories) => {
    return calories + 100;
  };
  const loseWeightNormal = (calories) => {
    return calories - 100;
  };
  const gainWeightFast = (calories) => {
    return calories + 150;
  };
  const loseWeightFast = (calories) => {
    return calories - 150;
  };

  const bmiResult = calculateBMI(checkItem.checkWeight, checkItem.checkHeight);

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
      <ScrollView>
        <View style={share.content}>
          <View style={styles.checking__detail}>
            <View style={[styles.checking__headline, share.color__of_box]}>
              <Text style={styles.headline}>
                bảng thông tin đánh giá sức khoẻ
              </Text>
              {/* DATE */}
              <View style={styles.checking__date}>
                <Text style={styles.date}>{checkItem.checkDay}</Text>
              </View>
            </View>
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
                    <Text style={share.number}>{checkItem.checkWeight}</Text>
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
                    <Text style={share.number}>{checkItem.checkHeight}</Text>
                    <Text style={share.unit}>cm</Text>
                  </View>
                </View>
                {/* BMI */}
                <View style={styles.bmi}>
                  <View style={styles.bmi__result}>
                    <Text style={styles.result}>BMI: {bmiResult}</Text>
                  </View>
                  <View style={styles.bmi__status}>
                    {bmiResult < 15 ? (
                      <View style={[styles.bmi__conclusion, styles.low]}>
                        <Text style={styles.conclusion}>Thấp</Text>
                      </View>
                    ) : bmiResult > 15.1 && bmiResult < 16.5 ? (
                      <View style={[styles.bmi__conclusion, styles.normal]}>
                        <Text style={styles.conclusion}>Bình thường</Text>
                      </View>
                    ) : (
                      <View style={[styles.bmi__conclusion, styles.high]}>
                        <Text style={styles.conclusion}>Cao</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
            {/* ENERGY */}
            <View style={[styles.energy]}>
              <View style={share.stat__headline}>
                <Text style={share.headline}>năng lượng cơ thể</Text>
              </View>
              {/* ITEM */}
              <View style={[share.student__detail_item, share.color__of_box]}>
                <Text style={share.col_left}>Giữ cân</Text>
                <Text style={share.col_right}>
                  {checkItem.checkKeepWeight} kcal/ngày
                </Text>
              </View>
            </View>
            {/* GAIN WEIGHT */}
            <View style={[styles.energy]}>
              <View style={share.stat__headline}>
                <Text style={share.headline}>tăng cân</Text>
              </View>
              {/* ITEM */}
              <View style={share.color__of_box}>
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Tăng chậm (0.25kg/tuần)</Text>
                  <Text style={share.col_right}>
                    {gainWeightSlow(checkItem.checkKeepWeight)} kcal/ngày
                  </Text>
                </View>
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Tăng ổn định (0.5kg/tuần)</Text>
                  <Text style={share.col_right}>
                    {gainWeightNormal(checkItem.checkKeepWeight)} kcal/ngày
                  </Text>
                </View>
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Tăng nhanh(1kg/tuần)</Text>
                  <Text style={share.col_right}>
                    {gainWeightFast(checkItem.checkKeepWeight)} kcal/ngày
                  </Text>
                </View>
              </View>
            </View>
            {/* LOSE WEIGHT */}
            <View style={[styles.energy]}>
              <View style={share.stat__headline}>
                <Text style={share.headline}>giảm cân</Text>
              </View>
              {/* ITEM */}
              <View style={share.color__of_box}>
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Giảm chậm (0.25kg/tuần)</Text>
                  <Text style={share.col_right}>
                    {loseWeightSlow(checkItem.checkKeepWeight)} kcal/ngày
                  </Text>
                </View>
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Giảm ổn định (0.5kg/tuần)</Text>
                  <Text style={share.col_right}>
                    {loseWeightNormal(checkItem.checkKeepWeight)} kcal/ngày
                  </Text>
                </View>
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Giảm nhanh (1kg/tuần)</Text>
                  <Text style={share.col_right}>
                    {loseWeightFast(checkItem.checkKeepWeight)} kcal/ngày
                  </Text>
                </View>
              </View>
            </View>
            {/* ADVICEMENT */}
            <View style={styles.advicement}>
              <View style={share.stat__headline}>
                <Text style={share.headline}>tư vấn</Text>
              </View>
              {/* ITEM */}
              <View style={share.color__of_box}>
                <View style={[share.student__detail_item, share.break]}>
                  <Text style={share.col_left}>Nên làm</Text>
                  <Text style={share.col_right}>{checkItem.checkShould}</Text>
                </View>
                <View style={[share.student__detail_item, share.break]}>
                  <Text style={share.col_left}>Nên hạn chế</Text>
                  <Text style={share.col_right}>{checkItem.checkShouldnt}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //HEAD
  checking__detail: {
    marginBottom: 50,
  },
  checking__headline: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 20,
  },
  headline: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
    textTransform: "uppercase",
    width: "70%",
  },
  checking__date: {
    alignItems: "center",
  },
  date: {
    borderWidth: 3,
    borderColor: share.color.mainColor,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 5,
    color: share.color.textColor,
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
  bmi__status: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bmi__conclusion: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
  },
  conclusion: {
    textAlign: "center",
    fontSize: 20,
    color: share.color.white,
    fontWeight: 600,
  },
  low: {
    backgroundColor: share.color.orange,
  },
  normal: {
    backgroundColor: share.color.teal,
  },
  high: {
    backgroundColor: share.color.red,
  },

  //ENERGY
});
