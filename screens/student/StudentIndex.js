import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//DATA
import studentData from "../../databases/student.json";

//STYLE
import share from "../../assets/global/share";

//Icon
import Icon from "react-native-vector-icons/MaterialIcons";

//IMAGE
import LOGO from "../../assets/image/logo_header.png";

import BackArrow from "../../assets/global/component/BackArrow";

export default function StudentIndex({ navigation }) {
  const navigateToDetails = (studentItem) => {
    navigation.navigate("StudentDetail", { studentItem });
  };

  return (
    <View style={share.container}>
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
      {/* CONTENT */}
      <View style={share.content}>
        <SafeAreaView>
          <View style={share.list__title}>
            <Text style={share.list__title_text}>
              chọn học viên bạn muốn xem thông tin
            </Text>
          </View>
          <View style={share.list__student}>
            {studentData.students.map((studentItem) => (
              <TouchableOpacity
                key={studentItem.studentID}
                onPress={() => navigateToDetails(studentItem)}
              >
                <View style={share.student__card}>
                  <View style={share.line}></View>
                  <View style={share.card__detail}>
                    <View style={share.student__info}>
                      <Text style={share.student__name}>
                        {studentItem.studentName}
                      </Text>
                      <Text style={share.student__id}>
                        #{studentItem.studentID}
                      </Text>
                    </View>
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
