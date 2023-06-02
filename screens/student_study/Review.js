import {
  FlatList,
  Image,
  SafeAreaView,
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

export default function Review({ navigation }) {
  const navigateToDetails = (item) => {
    navigation.navigate("ReviewDetail", { item });
  };
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
      <View style={share.content}>
        <SafeAreaView>
          <View style={share.list__title}>
            <Text style={share.list__title_text}>
              chọn học viên bạn muốn kiểm tra đánh giá định kỳ
            </Text>
          </View>
          <View style={share.list__student}>
            {reviewData.studentReview.map((item) => (
              <TouchableOpacity
                key={item.studentMedNumber}
                onPress={() => navigateToDetails(item)}
              >
                <View style={share.student__card}>
                  <View style={share.line}></View>
                  <View style={share.card__detail}>
                    <View style={share.student__info}>
                      <Text style={share.student__name}>
                        {item.studentName}
                      </Text>
                      <Text style={share.student__id}>#{item.studentID}</Text>
                    </View>
                    <View style={share.student__status}>
                      {item.status ? (
                        <View style={[share.studying, share.status__box]}>
                          <Text style={share.status__name}>đang học</Text>
                        </View>
                      ) : (
                        <View style={[share.quit, share.status__box]}>
                          <Text style={share.status__name}>đã nghỉ</Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
