import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#FC6D3F",
  secondary: "#CDCDD2",
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGrey: "#F5F5F6",
  lightGrey2: "#F5F5F7",
  lightGrey3: "#EFEFF1",
  lightGrey4: "#F8F8F9",
  transperent: "transperent",
  darkGray: "#898C95"
}

export const SIZES = {
  //global size
  base: 0,
  font: 14,
  redius: 30,
  padding: 10,
  padding2: 12,

  //font size
  lagreTilte: 50,
  h1: 30,
  h2: 22,
  h3: 28,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimention
  width,
  height
}
export const FONTS = {
  lagreTilte: { fontFamily: "Roboto-regular", fontSize: SIZES.lagreTilte, lineHeight: 36 },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme