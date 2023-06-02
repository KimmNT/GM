import {
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
import studentData from "../../databases/student.json";
//STYLE
import share from "../../assets/global/share";
//ICON
import Icon from "react-native-vector-icons/MaterialIcons";
import BackArrowWhite from "../../assets/global/component/BackArrowWhite";

export default function StudentDetail({ route, navigation }) {
  const { studentItem } = route.params;
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
      <ScrollView>
        <View style={share.content}>
          <SafeAreaView>
            <View style={styles.student__info}>
              {/* IMAGE */}
              <View style={styles.student__image}>
                <Image
                  style={styles.image}
                  source={{
                    uri: studentItem.studentImage,
                  }}
                />
              </View>
              {/* NAME */}
              <View style={[styles.student__name]}>
                <Text style={styles.name}>{studentItem.studentName}</Text>
                <Text style={styles.nickname}>
                  #{studentItem.studentNickName}
                </Text>
                {/* STATUS */}
                <View style={share.student__status}>
                  {studentItem.status ? (
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
              {/* LIST */}
              <View style={[share.student__detail, share.color__of_box]}>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Mã học viên</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentNumber}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Mã sức khoẻ</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentMedNumber}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Giới tính</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentGender}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Ngày sinh</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentBirthDay}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item, share.break]}>
                  <Text style={share.col_left}>Địa chỉ</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentAddress}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Sđt liên hệ</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentPhoneNumber}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Chi nhánh</Text>
                  <Text style={styles.col_right}>
                    {studentItem.studentBranch}
                  </Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Tên khoá học</Text>
                  <Text style={styles.col_right}>{studentItem.course}</Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Tên lớp học</Text>
                  <Text style={styles.col_right}>{studentItem.class}</Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Ngày bắt đầu học</Text>
                  <Text style={styles.col_right}>{studentItem.startDay}</Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item]}>
                  <Text style={share.col_left}>Ngày kết thúc học</Text>
                  <Text style={styles.col_right}>{studentItem.endDay}</Text>
                </View>
                {/* ITEM */}
                <View style={[share.student__detail_item, share.break]}>
                  <Text style={share.col_left}>Ghi chú</Text>
                  <Text style={styles.col_right}>{studentItem.note}</Text>
                </View>
              </View>
              {/* DAY-IN STATS */}
              <View style={[share.stats]}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>thông tin chỉ số đầu vào</Text>
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
                      <Text style={share.number}>
                        {studentItem.studentWeight}
                      </Text>
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
                      <Text style={share.number}>
                        {studentItem.studentHeight}
                      </Text>
                      <Text style={share.unit}>cm</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* FIRST DAY STATS */}
              <View style={[share.stats]}>
                <View style={share.stat__headline}>
                  <Text style={share.headline}>
                    thông tin buổi học đầu tiên
                  </Text>
                </View>
                <View style={[share.stat__group, share.color__of_box]}>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="directions-run"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Gia tốc</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>
                        {studentItem.studentAcceleration}
                      </Text>
                      <Text style={share.unit}>m/s</Text>
                    </View>
                  </View>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="directions-walk"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Bước chân</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>
                        {studentItem.studentSteps}
                      </Text>
                      <Text style={share.unit}>bước</Text>
                    </View>
                  </View>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="pin-drop"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Di chuyển</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>
                        {studentItem.studentDistance}
                      </Text>
                      <Text style={share.unit}>m</Text>
                    </View>
                  </View>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="bolt"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Năng lượng</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>
                        {studentItem.studentCalories}
                      </Text>
                      <Text style={share.unit}>kcal</Text>
                    </View>
                  </View>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="trending-up"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Tốc độ cao</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>
                        {studentItem.studentMaxSpeed}
                      </Text>
                      <Text style={share.unit}>m/s</Text>
                    </View>
                  </View>
                  {/* ITEM */}
                  <View style={share.stat__box}>
                    <View style={share.stat__name}>
                      <View style={share.stat__icon}>
                        <Icon
                          name="trending-down"
                          size={25}
                          color={share.color.mainColor}
                        />
                      </View>

                      <Text style={share.stat__content}>Tốc độ thấp</Text>
                    </View>
                    <View style={share.stat__num}>
                      <Text style={share.number}>
                        {studentItem.studentMinSpeed}
                      </Text>
                      <Text style={share.unit}>m/s</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* ADVISER */}
              <View>
                <View style={[share.stat__headline]}>
                  <Text style={share.headline}>thông tin khác</Text>
                </View>
                {/* ITEM */}
                <View
                  style={[share.student__detail_item, , share.color__of_box]}
                >
                  <Text style={share.col_left}>Tư vấn viên</Text>
                  <Text style={styles.col_right}>{studentItem.adviser}</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //CONTENT
  student__info: {
    position: "relative",
    // backgroundColor: share.color.white,
    // paddingHorizontal: 20,
    // height: "100%",
    marginVertical: 50,
    borderRadius: 10,
    gap: 30,
  },

  //IMAGE
  student__image: {
    position: "absolute",
    zIndex: 1,
    top: -50,
    left: 120,
    right: 0,
    bottom: 0,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: share.color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: 120 / 2,
  },

  //NAME
  student__name: {
    // marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: share.color.white,
    paddingBottom: 20,
    paddingTop: 100,
    borderRadius: 5,
  },
  name: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  nickname: {
    fontSize: 15,
    fontStyle: "italic",
  },
});
