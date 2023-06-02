import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";

//IMAGEA
import LOGO from "../assets/image/logo_header.png";

//STYLE
import share from "../assets/global/share";

//JSON
import dateDetail from "../databases/academy.json";

//ICON
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomePage({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedInfo, setSelectedInfo] = useState([]);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const markDatesWithValues = () => {
      const marked = {};

      Object.entries(dateDetail).forEach(([date, data]) => {
        if (data.hasValue) {
          marked[date] = { marked: true, dotColor: share.color.orange };
        }
      });

      setMarkedDates(marked);
    };

    markDatesWithValues();
  }, []);

  //Handle choose day
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    //cập nhật giá trị selectedInfo

    //dateDetail -> import từ academy.json
    //day.dateString -> format lại giá trị date thành YYYY-MM-DD
    // dateDetail[day.dateString] -> truy cập vào thông tin trong JSON với giá trị ngày tương ứng
    // " ? " -> nếu không có giá trị sẽ trả ra giá trị UNDEFINED
    // .info -> truy cập vào giá trị "info" trong file JSON
    setSelectedInfo(dateDetail[day.dateString]?.info || []);
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
      <ScrollView style={share.content}>
        <View style={styles.home__page}>
          <Calendar
            style={styles.calendar}
            onDayPress={handleDateSelect}
            markedDates={markedDates}
            hideExtraDays={true}
          />

          <View style={styles.home__content}>
            <Text style={styles.calendar__day}>
              Lịch học ngày: {selectedDate}
            </Text>
            {selectedInfo.map((info, index) => (
              <View key={index} style={styles.calendar__list}>
                <View style={styles.calendar__hours}>
                  <Text style={styles.hour__text}>{info.hour}</Text>
                </View>
                <View style={styles.calendar__class}>
                  <Text style={styles.class__text}>{info.class}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home__page: {
    gap: 20,
    paddingBottom: 80,
  },
  calendar: {
    borderWidth: 3,
    borderColor: share.color.teal,
    borderRadius: 5,
    padding: 5,
  },
  home__content: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  calendar__day: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    paddingTop: 20,
  },
  calendar__list: {
    gap: 10,
    marginTop: 30,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
  },
  calendar__hours: {
    backgroundColor: share.color.orange,
    width: "40%",
  },
  hour__text: {
    fontSize: 15,
    textAlign: "center",
    padding: 5,
    color: share.color.white,
  },
  calendar__class: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: share.color.teal,
    margin: 10,
    borderRadius: 5,
  },
  class__text: {
    fontSize: 20,
    textAlign: "center",
    color: share.color.white,
  },
});
