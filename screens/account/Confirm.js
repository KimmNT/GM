import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import share from "../../assets/global/share";

import BackArrow from "../../assets/global/component/BackArrow";

export default function ConfirmAccount({ navigation }) {
  const [emailValue, setEmailValue] = useState("");

  const handleEmailInput = (txt) => {
    setEmailValue(txt);
  };
  const handlePress = () => {
    if (emailValue.length === 0) {
      Alert.alert(
        "Thiếu thông tin!",
        "Bạn điền thiếu thông tin. Vui lòng kiểm tra lại!"
      );
    } else if (emailValue !== "admin") {
      Alert.alert(
        "Sai thông tin!",
        "Thông tin Thông tin bạn nhập chưa chính xác. Vui lòng kiểm tra lại!"
      );
    } else {
      navigation.navigate("Reset");
    }
  };
  return (
    <View style={styles.container}>
      <View style={share.content}>
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
          <View style={share.account__head}>
            <Text style={share.title__account}>Đặt lại mật khẩu</Text>
            <Text style={share.text__account}>
              Nhập email người dùng của bạn và chúng tôi sẽ gửi một liên kết đặt
              lại mật khẩu qua email cho bạn.
            </Text>
          </View>
          <View style={{ gap: 30 }}>
            {/* INPUT */}
            <View style={share.form__item}>
              <Text style={share.item__title}>Tên tài khoản / Email</Text>
              <View style={share.form__input}>
                <TextInput
                  style={share.item__input}
                  autoCapitalize="none"
                  onChangeText={handleEmailInput}
                  value={emailValue}
                />
              </View>
            </View>
            {/* BTN  */}
            <TouchableOpacity
              style={share.login__btn_box}
              onPress={handlePress}
            >
              <View style={share.login__btn}>
                <Text style={share.login__btn_text}>xác nhận</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
});
