import {extendTheme} from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    primary: "#000000",
    secondary: {
      100: "#7F6CE5",
      200: "#4B4180",
    },
    accent: "#828282",
    gray: {
      100: "#82828273",
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1536px",
  },
  shadows: {
    outline: "none",
  },
  fonts: {
    heading: "outfit",
    body: "outfit",
  },
});
