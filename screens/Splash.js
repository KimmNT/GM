import React, { useEffect, useRef } from "react";
import { Image } from "react-native";
import { Animated } from "react-native";
import { View, StyleSheet } from "react-native";

//LOGO
import Logo from "../assets/image/logo.png";
import Text from "../assets/image/text.png";

function Splash(props) {
  //Aniamtion Value
  const startLogoAnimation = useRef(new Animated.Value(0)).current;
  const startTextAnimation = useRef(new Animated.Value(0)).current;
  const opacityEffect = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //Start Animation after 500ms = 5s

    //Logo animation
    setTimeout(() => {
      //sequense animation
      Animated.sequence([
        Animated.timing(startLogoAnimation, {
          //effect when finish the animation
          toValue: -120,
          useNativeDriver: true,
        }),
      ]).start();
      //duration
    }, 600);

    //Text animation - transform
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startTextAnimation, {
          //effect when finish the animation
          toValue: 70,
          useNativeDriver: true,
        }),
      ]).start();
      //duration
    }, 600);

    //Text animation - opacity
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(opacityEffect, {
          //effect when finish the animation
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
      //duration
    }, 700);
  }, []);

  const BgColor = "#3f48cc";

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: BgColor,
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateY: startLogoAnimation }],
        }}
      >
        <Image style={{ width: 120, height: 200 }} source={Logo} />
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          // display: "none",
          transform: [{ translateY: startTextAnimation }],
          opacity: 0,
          opacity: opacityEffect,
        }}
      >
        <Image style={{ width: 230, height: 83 }} source={Text} />
      </Animated.View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({});
export default Splash;
