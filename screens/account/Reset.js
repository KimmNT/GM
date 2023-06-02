import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import BackArrow from "../../assets/global/component/BackArrow";

//STYLE
import share from "../../assets/global/share";

//ICON
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Reset({ navigation }) {
  //Check Email and Password value
  const [passWordValue, setPassWordValue] = useState("");
  const [passWordValue2, setPassWordValue2] = useState("");

  //handle Password hide or show
  const [passWordStatus, setpassWordStatus] = useState(false);
  const [passWordStatus2, setpassWordStatus2] = useState(false);

  const handlePassWorInput2 = (pw2) => {
    setPassWordValue2(pw2);
  };
  const handlePassWorInput = (pw) => {
    setPassWordValue(pw);
  };

  const handlePress = () => {
    if ((passWordValue.length === 0) | (passWordValue2.length === 0)) {
      Alert.alert(
        "Thiếu thông tin",
        "Bạn điền thiếu thông tin. Vui lòng kiểm tra lại!"
      );
    } else if (passWordValue2 !== passWordValue) {
      Alert.alert(
        "Sai thông tin!",
        "Hai mật khẩu không giống nhau. Vui lòng kiểm tra lại!"
      );
    } else {
      navigation.navigate("Success");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <View style={share.content}>
          <SafeAreaView>
            <View>
              <View style={share.account__head}>
                <Text style={share.title__account}>Tạo mật khẩu mới</Text>
                <Text style={share.text__account}>Mật khẩu cần bao gồm:</Text>
                <Text style={share.text__account}>
                  + Có ít nhất 1 chữ cái thường và 1 chữ cái viết hoa
                </Text>
                <Text style={share.text__account}>+ Có ít nhất 1 chữ số</Text>
                <Text style={share.text__account}>+ Có thối thiểu 8 ký tự</Text>
                <Text style={share.text__account}>Ví dụ: Aa123456</Text>
              </View>
              <View style={{ gap: 30 }}>
                <View style={share.form__item}>
                  <Text style={share.item__title}>Mật khẩu mới</Text>
                  <View style={share.form__input}>
                    <TextInput
                      style={share.item__pw}
                      placeholder=""
                      onChangeText={handlePassWorInput}
                      value={passWordValue}
                      autoCapitalize="none"
                      secureTextEntry={passWordStatus ? false : true}
                    />
                    <TouchableOpacity
                      onPress={() => setpassWordStatus(!passWordStatus)}
                    >
                      {passWordStatus ? (
                        <Icon
                          style={share.item__icon}
                          name="visibility"
                          size={20}
                          color={share.color.textColor}
                        />
                      ) : (
                        <Icon
                          style={share.item__icon}
                          name="visibility-off"
                          size={20}
                          color={share.color.textColor}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={share.form__item}>
                  <Text style={share.item__title}>
                    Xác nhận lại mật khẩu mới
                  </Text>
                  <View style={share.form__input}>
                    <TextInput
                      style={share.item__pw}
                      placeholder=""
                      onChangeText={handlePassWorInput2}
                      value={passWordValue2}
                      autoCapitalize="none"
                      secureTextEntry={passWordStatus2 ? false : true}
                    />
                    <TouchableOpacity
                      onPress={() => setpassWordStatus2(!passWordStatus2)}
                    >
                      {passWordStatus2 ? (
                        <Icon
                          style={share.item__icon}
                          name="visibility"
                          size={20}
                          color={share.color.textColor}
                        />
                      ) : (
                        <Icon
                          style={share.item__icon}
                          name="visibility-off"
                          size={20}
                          color={share.color.textColor}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  style={share.login__btn_box}
                  onPress={handlePress}
                >
                  <View style={share.login__btn}>
                    <Text style={share.login__btn_text}>xác nhận</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
      {/* <TextInput style={styles.input} /> */}
    </KeyboardAvoidingView>
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
});
