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
import healthData from "../../databases/studentMed.json";

//STYLE
import share from "../../assets/global/share";

//Icon
import Icon from "react-native-vector-icons/MaterialIcons";

//IMAGE
import LOGO from "../../assets/image/logo_header.png";

export default function HealthIndex({ navigation }) {
  const navigateToDetails = (healthItem) => {
    navigation.navigate("HealthDetail", { healthItem });
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
              chọn học viên bạn muốn kiểm tra sức khoẻ
            </Text>
          </View>
          <View style={share.list__student}>
            {healthData.studentMed.map((healthItem) => (
              <TouchableOpacity
                key={healthItem.studentMedNumber}
                onPress={() => navigateToDetails(healthItem)}
              >
                <View style={share.student__card}>
                  <View style={share.line}></View>
                  <View style={share.card__detail}>
                    <View style={share.student__info}>
                      <Text style={share.student__name}>
                        {healthItem.studentName}
                      </Text>
                      <Text style={share.student__id}>
                        #{healthItem.studentID}
                      </Text>
                    </View>
                    <View style={share.student__status}>
                      {healthItem.status ? (
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
