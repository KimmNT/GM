import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import React from "react";

//STYLE
import share from "../../assets/global/share";

//Icon
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Success({ navigation }) {
  return (
    <View style={share.container}>
      <View style={share.content}>
        <SafeAreaView style={styles.success}>
          <View style={share.account__head}>
            <Text style={share.title__account}>
              Tạo mật khẩu mới thành công
            </Text>
          </View>
          <View style={styles.succes__box}>
            <View style={styles.circle__opacity}>
              <View style={styles.circle}>
                <Icon name="done" size={100} color={share.color.white} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={share.login__btn_box}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={share.login__btn}>
              <Text style={styles.login__btn_text}>
                trở lại màn hình đăng nhập
              </Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  success: {
    gap: 50,
  },
  login__btn_text: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "#FFF",
  },
  succes__box: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle__opacity: {
    width: 300,
    height: 300,
    backgroundColor: share.color.tealOpacity,
    borderRadius: 300 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: share.color.teal,
    borderRadius: 200 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
