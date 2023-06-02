import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
  color: {
    mainColor: "#3A53A4",
    textColor: "#292524",
    teal: "#00A9B4",
    tealOpacity: "#EAF6F6",
    white: "#FFF",
    orange: "#FF6F00",
    red: "#BE2330",
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F0F0",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  color__of_box: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: -3,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 6,
    elevation: 7,
  },

  /*
  reuseable for all the component has HEADER
  */
  header: {
    backgroundColor: "#3A53A4",
    padding: 20,
    paddingTop: 60,
  },
  header__content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__icon: {
    position: "relative",
    backgroundColor: "#FFF",
    padding: 2,
    borderRadius: 5,
  },
  image: {
    width: 142,
    height: 60,
    resizeMode: "cover",
  },
  noti__status: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#BE2330",
  },

  /*
  reuseable for all the components 
  in account folders
  */
  account__head: {
    gap: 20,
    marginTop: 40,
  },
  title__account: {
    fontSize: 30,
    color: "#292524",
    fontWeight: 700,
  },
  text__account: {
    color: "#737373",
    fontWeight: 600,
  },
  form__item: {
    marginTop: 30,
  },
  item__title: {
    color: "#292524",
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 10,
  },
  item__pw: {
    width: "70%",
    fontSize: 16,
  },
  item__input: {
    width: "100%",
    fontSize: 16,
  },
  form__input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#292524",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  login__btn_box: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderTopColor: "#F0F0F0",
    borderTopWidth: 2,
    paddingTop: 30,
  },
  login__btn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "#3A53A4",
    borderRadius: 5,
  },
  login__btn_text: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "#FFF",
  },

  /**
   * reuseable for all the
   * student list
   */
  list__title: {
    marginTop: 40,
    // paddingBottom: 50,
  },
  list__title_text: {
    color: "#292524",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  list__student: {
    marginTop: 50,
    height: "100%",
  },
  student__card: {
    backgroundColor: "#FFF",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: -3,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 6,
    elevation: 7,
    borderRadius: 5,
    marginTop: 30,
  },
  card__detail: {
    width: "95%",
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    height: 50,
    width: 3,
    backgroundColor: "#3A53A4",
    marginRight: 10,
  },
  student__info: {
    justifyContent: "space-between",
    gap: 10,
  },
  student__name: {
    fontSize: 23,
    fontWeight: 700,
  },
  student__id: {
    // fontSize: 15,
    fontStyle: "italic",
    color: "#292524",
  },
  status__box: {
    width: 100,
    height: 30,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  status__name: {
    textTransform: "uppercase",
    color: "#FFF",
    fontWeight: 600,
  },
  studying: {
    backgroundColor: "#00A9B4",
  },
  quit: {
    backgroundColor: "#BE2330",
  },

  /**
   * this style are reuseable for all
   * the components have LIST INFORMATION
   */

  //INFORMATION
  student__detail: {
    // backgroundColor: "teal",
  },
  student__detail_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderTopColor: "#F0F0F0",
    borderTopWidth: 2,
  },
  break: {
    flexDirection: "column",
    gap: 20,
  },
  col_left: {
    // fontSize: 20,
    fontWeight: 600,
  },
  col_right: {
    // fontSize: 20,
    // color: "#000",
  },
  highlight: {
    textTransform: "uppercase",
  },

  /**
   * this styles are reuseable for all
   * the components have STAT BOX
   */

  stats: {},
  stat__headline: {
    marginTop: 30,
    marginBottom: 10,
  },
  headline: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  stat__group: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 20,
    gap: 30,
  },
  stat__box: {
    width: "45%",
    backgroundColor: "#3A53A4",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  stat__name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  stat__icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  stat__content: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: 600,
  },
  stat__num: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 20,
  },
  number: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: 600,
  },
  unit: {
    color: "#FFF",
    marginLeft: 5,
  },
});
