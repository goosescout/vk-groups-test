import "~/assets/fonts.css"

const family = {
  regular: "Inter, Tahoma, sans-serif",
  medium: "Inter-Medium, Tahoma, sans-serif",
  semiBold: "Inter-Semibold, Tahoma, sans-serif",
  bold: "Inter-Bold, Tahoma, sans-serif",
}

const defaultParams = {
  fontStyle: "normal",
  lineHeight: "normal",
}

export const text16Medium = {
  ...defaultParams,
  fontFamily: family.medium,
  fontSize: "16px",
}

export const header36 = {
  ...defaultParams,
  fontFamily: family.bold,
  fontSize: "36px",
}
