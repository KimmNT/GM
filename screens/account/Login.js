import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
//STYLE
import shared from "../../assets/global/share";
//IMAGES
import BgGradient from "../../assets/image/background.png";
import Logo from "../../assets/image/Blue_White.png";
//ICON
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login({ navigation }) {
  //Check Email and Password value
  const [emailValue, setEmailValue] = useState("");
  const [passWordValue, setPassWordValue] = useState("");

  //handle Password hide or show
  const [passWordStatus, setPassWordStatus] = useState(false);

  const handleEmailInput = (txt) => {
    setEmailValue(txt);
  };
  const handlePassWorInput = (pw) => {
    setPassWordValue(pw);
  };

  const handlePress = () => {
    if (emailValue.length === 0 || passWordValue.length === 0) {
      Alert.alert(
        "Thiếu thông tin",
        "Bạn điền thiếu thông tin. Vui lòng kiểm tra lại!"
      );
    } else if (emailValue !== "genioadmin" || passWordValue !== "admin123") {
      Alert.alert(
        "Sai thông tin!",
        "Thông tin bạn nhập chưa chính xác. Vui lòng kiểm tra lại!"
      );
    } else {
      navigation.navigate("Drawering");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.background} source={BgGradient} />
      <KeyboardAvoidingView behavior="padding">
        <SafeAreaView>
          <View style={shared.content}>
            {/* HEAD */}
            <View style={styles.login__head}>
              <Image style={styles.login__head_image} source={Logo} />
              <View style={styles.login__head_text}>
                <Text style={styles.text__item}>
                  học viện bóng đá thiếu nhi
                </Text>
                <Text style={styles.text__item}>tiêu chuẩn nhật bản</Text>
              </View>
            </View>
            <View style={{ gap: 35 }}>
              <View>
                {/* FORM */}
                <View style={styles.form}>
                  <View style={styles.form__item}>
                    <Text style={styles.item__title}>
                      Tên tài khoản / Email
                    </Text>
                    <View style={styles.form__input}>
                      <TextInput
                        style={styles.item__input}
                        autoCapitalize="none"
                        onChangeText={handleEmailInput}
                        value={emailValue}
                      />
                    </View>
                  </View>
                  <View style={styles.form__item}>
                    <Text style={styles.item__title}>Mật khẩu</Text>
                    <View style={styles.form__input}>
                      <TextInput
                        style={styles.item__pw}
                        placeholder=""
                        onChangeText={handlePassWorInput}
                        value={passWordValue}
                        autoCapitalize="none"
                        secureTextEntry={passWordStatus ? false : true}
                      />
                      <TouchableOpacity
                        onPress={() => setPassWordStatus(!passWordStatus)}
                      >
                        {passWordStatus ? (
                          <Icon
                            style={styles.item__icon}
                            name="visibility"
                            size={20}
                            color={shared.color.textColor}
                          />
                        ) : (
                          <Icon
                            style={styles.item__icon}
                            name="visibility-off"
                            size={20}
                            color={shared.color.textColor}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {/* FORGET PW */}
              <TouchableOpacity onPress={() => navigation.navigate("Confirm")}>
                <View style={styles.login__forget}>
                  <Text style={styles.login__forget_text}>Quên mật khẩu ?</Text>
                </View>
              </TouchableOpacity>
              {/* BTN  */}
              <TouchableOpacity
                style={styles.login__btn_box}
                onPress={handlePress}
              >
                <View style={styles.login__btn}>
                  <Text style={styles.login__btn_text}>đăng nhập</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    // resizeMode: "cover",
  },
  login__head: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 30,
  },
  login__head_image: {
    width: 200,
    height: 200,
  },
  form: {
    width: "100%",
    marginTop: 30,
  },
  form__item: {},
  item__title: {
    color: shared.color.white,
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 10,
  },
  form__input: {
    backgroundColor: shared.color.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  item__input: {
    width: "100%",
    fontSize: 16,
  },
  item__pw: {
    width: "70%",
    fontSize: 16,
  },
  login__head_text: {},
  text__item: {
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
    color: "#FFF",
    fontWeight: 700,
  },
  login__forget: {
    alignItems: "center",
  },
  login__forget_text: {
    fontSize: 16,
    color: shared.color.white,
    fontWeight: 600,
  },
  login__btn_box: {
    alignItems: "center",
    justifyContent: "center",
  },
  login__btn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: shared.color.white,
  },
  login__btn_text: {
    textTransform: "uppercase",
    fontSize: 20,
    color: shared.color.white,
  },
});
