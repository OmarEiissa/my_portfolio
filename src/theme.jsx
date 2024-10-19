import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// eslint-disable-next-line react-refresh/only-export-components
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          mainColor: {
            main: "#00abf0",
          },

          bgColor: {
            main: "#fdfdfd",
            secondary: "#ededed",
          },

          text: {
            // primary: "#2B3445",
            primary: "#333",
            secondary: "#fff",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },

          img: {
            main: "url(src/images/wallpaperLight.jpg)",
          },

          transition: {
            main: ".5s ease",
          },

          shadowColor: {
            main: "rgba(0, 0, 0, .2)",
            secondary: "rgba(255, 255, 255, 0.4)",
          },
        }
      : {
          // palette values for dark mode
          mainColor: {
            main: "#00abf0",
          },

          bgColor: {
            main: "#112e42",
            secondary: "#081b29",
          },

          text: {
            primary: "#fff",
            secondary: "#000",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },

          img: {
            main: "url(src/images/wallpaperDark.jpg)",
          },

          transition: {
            main: ".5s ease",
          },

          shadowColor: {
            main: "rgba(255, 255, 255, .2)",
            secondary: "rgba(0, 0, 0, 0.5)",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
