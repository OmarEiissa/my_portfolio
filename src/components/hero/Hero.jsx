import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import IconSocial from "./IconSocial";

function Hero() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 700, once: false });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme.palette.mode]);

  return (
    <Box
      id="home"
      overflow={"hidden"}
      sx={{
        // @ts-ignore
        transition: theme.palette.transition.main,
        // @ts-ignore
        backgroundImage: theme.palette.img.main,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.text.secondary,
          opacity: ".65",
          zIndex: 1,
        }}
      ></Box>

      <Container
        maxWidth="lg"
        sx={{
          zIndex: 2,
          color: "white",
          padding: "10rem 7% 2rem !important",
          position: "relative",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
          textAlign={"center"}
        >
          {/* Header */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              data-aos="fade-down"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                // @ts-ignore
                color: theme.palette.mainColor.main,
                textDecoration: "none",
                fontSize: { xs: "8rem", sm: "11rem", md: "14rem" },
              }}
            >
              {"{"}
            </Typography>

            <Typography
              data-aos="fade-up"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.text.primary,
                fontSize: { xs: "7rem", sm: "10rem", md: "13rem" },
              }}
            >
              EISSA
            </Typography>

            <Typography
              data-aos="fade-down"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                // @ts-ignore
                color: theme.palette.mainColor.main,
                textDecoration: "none",
                fontSize: { xs: "8rem", sm: "11rem", md: "14rem" },
              }}
            >
              {"}"}
            </Typography>
          </Stack>

          {/* Body */}
          <Stack
            data-aos="fade-up"
            sx={{ width: { xs: "300px", sm: "600px", md: "900px" } }}
            mt={0}
            mb={"1rem"}
            color={theme.palette.text.primary}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* About Me */}
            <Box>
              <Typography
                data-aos="fade-right"
                variant="body1"
                component="p"
                fontSize={"1.4rem"}
                fontWeight={"400"}
                mt={0}
                mb={"1rem"}
                sx={{
                  fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem" },
                  fontWeight: { xs: 500, sm: 500, md: 400 },
                }}
              >
                {`Hi, I'm Omar Eissa, a Frontend Developer with a passion for creating
                sleek and responsive web experiences. I specialize in HTML, CSS,
                JavaScript, and React.js to build high-quality websites and web
                applications.`}
              </Typography>

              <Typography
                data-aos="fade-left"
                variant="body1"
                component="p"
                fontSize={"1.6rem"}
                fontWeight={"400"}
                mt={0}
                mb={"1rem"}
                sx={{
                  fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem" },
                  fontWeight: { xs: 500, sm: 500, md: 400 },
                }}
              >
                {`With a keen eye for detail and a commitment to excellence, I strive
                to deliver exceptional user experiences. Let's connect and bring
                your vision to life.`}
              </Typography>
            </Box>

            {/* ICON */}
            <IconSocial />

            {/* Button download CV */}
            <Stack direction="row" sx={{ mb: 0 }}>
              <Button
                aria-label="download cv"
                href={"/cvUrl"}
                target="_blank"
                onClick={(e) => e.preventDefault()}
                sx={{
                  color: "#fff",
                  // @ts-ignore
                  bgcolor: theme.palette.mainColor.main,
                  // @ts-ignore
                  transition: theme.palette.transition.main,
                  gap: "5px",
                  padding: 1.3,
                  // @ts-ignore
                  border: `2px solid ${theme.palette.mainColor.main}`,
                  "&:hover": {
                    // @ts-ignore
                    color: theme.palette.mainColor.main,
                    bgcolor: "transparent",
                    // @ts-ignore
                    border: `2px solid ${theme.palette.mainColor.main}`,
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Text Download CV */}
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.35rem" },
                    fontWeight: 600,
                  }}
                >
                  Download CV
                </Typography>
                {/* ICON */}
                <Download
                  sx={{
                    fontSize: "2.5rem",
                  }}
                />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
