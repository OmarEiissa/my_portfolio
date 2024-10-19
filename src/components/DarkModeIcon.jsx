import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../theme";

const DarkModeIcon = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          sx={{
            bgcolor: "#333",
            p: "5px",
            width: "28px",
            height: "28px",
            color: "#fff",
            // @ts-ignore
            transition: theme.palette.transition.main,
            "&:hover": {
              // backgroundColor: "transparent",
              bgcolor: "#fff",
              transform: "translateY(-3px)",
            },
            "&:hover .light-icon": {
              color: "#333",
            },
          }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <FontAwesomeIcon
            icon={faMoon}
            className="light-icon"
            style={{
              fontSize: "large",
            }}
          />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            bgcolor: "#fff",
            p: "5px",
            width: "28px",
            height: "28px",
            color: "#333",
            // @ts-ignore
            transition: theme.palette.transition.main,
            "&:hover": {
              bgcolor: "#333",
              backgroundColor: "transparent",
              transform: "translateY(-3px)",
            },
            "&:hover .dark-icon": {
              color: "#fff",
            },
          }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <FontAwesomeIcon
            icon={faSun}
            className="dark-icon"
            style={{
              fontSize: "large",
            }}
          />
        </IconButton>
      )}
    </div>
  );
};

export default DarkModeIcon;
