import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Button,
  Drawer,
} from "@mui/material";
import { Close, DataObject } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const pages = ["home", "about", "skills", "projects"]; //, "contact"

function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <AppBar
      position="fixed"
      sx={{
        // @ts-ignore
        // bgcolor: theme.palette.shadowColor.secondary,
        bgcolor: "transparent",
        backdropFilter: "blur(10px)",
        boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
        backgroundImage: "none",
        borderRadius: "0 0 15px 15px",
        transition: "transform 0.3s ease-in-out",
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            // py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LOGO L Media */}
          <Typography
            variant="h6"
            noWrap
            onClick={scrollToTop}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: "auto",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <DataObject
              sx={{
                mr: 1,
                fontSize: "2.6rem",
                // @ts-ignore
                color: theme.palette.mainColor.main,
              }}
            />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: theme.palette.text.primary,
                fontSize: "2.6rem",
              }}
            >
              EISSA
            </Typography>
          </Typography>

          {/* NAV S media */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={toggleDrawer("top", true)}
              sx={{
                color: theme.palette.text.primary,
                fontSize: "5rem",
                p: "5px",
              }}
            >
              <MenuIcon
                sx={{ color: theme.palette.text.primary, fontSize: "2rem" }}
              />
            </IconButton>

            <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
              sx={{
                ".MuiPaper-root": {
                  height: "100%",
                  // @ts-ignore
                  bgcolor: theme.palette.shadowColor.secondary,
                  // bgcolor: "transparent",
                  backdropFilter: "blur(10px)",
                },
              }}
            >
              <Box
                sx={{
                  width: "350px",
                  mx: "auto",
                  mt: 1,
                  position: "relative",
                  // pt: 5,
                }}
              >
                {/* LOGO S media in Drawer */}
                <Typography
                  variant="h5"
                  noWrap
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    textDecoration: "none",
                    mx: "auto",
                  }}
                >
                  <DataObject
                    sx={{
                      mr: 1,
                      fontSize: "5rem",
                      // @ts-ignore
                      color: theme.palette.mainColor.main,
                    }}
                  />
                  <Typography
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 900,
                      letterSpacing: ".3rem",
                      color: theme.palette.text.primary,
                      fontSize: "4rem",
                    }}
                  >
                    EISSA
                  </Typography>
                </Typography>

                {/* close IconButton */}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 5,
                    left: "-9px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={toggleDrawer("top", false)}
                >
                  <Close
                    sx={{
                      fontSize: 30,
                    }}
                  />
                </IconButton>

                {pages.map((page) => (
                  <Button
                    key={page}
                    href={`#${page}`}
                    onClick={toggleDrawer("top", false)}
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 5,
                      width: "100%",
                      fontSize: 20,
                      color: theme.palette.text.primary,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>

          {/* LOGO S media */}
          <Typography
            variant="h5"
            noWrap
            onClick={scrollToTop}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              display: { xs: "flex", md: "none" },
              mx: "auto",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <DataObject
              sx={{
                mr: 1,
                fontSize: "5rem",
                // @ts-ignore
                color: theme.palette.mainColor.main,
              }}
            />
            <Typography
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: theme.palette.text.primary,
                fontSize: "4rem",
              }}
            >
              EISSA
            </Typography>
          </Typography>

          {/* NAV L Media */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page}`}
                sx={{
                  my: 1,
                  color: theme.palette.text.primary,
                  display: "block",
                  fontSize: "1.8rem",
                  mr: "1rem",
                  fontWeight: 500,
                  // @ts-ignore
                  transition: theme.palette.transition.main,
                  "&:hover": {
                    backgroundColor: "transparent",
                    transform: "translateY(-3px)",
                    // @ts-ignore
                    color: theme.palette.mainColor.main,
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Dark Mode */}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
