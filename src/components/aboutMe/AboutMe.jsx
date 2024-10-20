import {
  Box,
  CardMedia,
  Container,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutMe() {
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
      id="about"
      sx={{
        // @ts-ignore
        bgcolor: theme.palette.bgColor.secondary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          paddingTop: {
            xs: "5rem !important",
            sm: "8rem !important",
            md: "10rem !important",
          },
          paddingBottom: {
            xs: "5rem !important",
            sm: "8rem !important",
            md: "2rem !important",
          },
          margin: 0,
          gap: { xs: "5rem", sm: "5rem", md: "15rem" },
        }}
      >
        <Box data-aos="fade-right">
          <CardMedia
            component="img"
            height="194"
            image="/svg/Programming-amico.svg"
            alt="Paella dish"
            sx={{
              width: { xs: "30rem", sm: "40rem", md: "35vw" },
              height: "100%",
            }}
          />
        </Box>

        <Box
          data-aos="fade-left"
          sx={{
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontSize: { xs: "4.2rem", sm: "7rem", md: "5.5rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: "1.5rem",
            }}
          >
            About{" "}
            <Typography
              variant="inherit"
              component={"span"}
              sx={{
                // @ts-ignore
                color: theme.palette.mainColor.main,
              }}
            >
              Me
            </Typography>
          </Typography>

          <Typography
            variant="h3"
            component={"h3"}
            sx={{
              fontSize: { xs: "2rem", sm: "3.6rem", md: "2.6rem" },
            }}
          >
            Hi, Iam Here To Help Next Project!
          </Typography>

          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            gap={"5px"}
            sx={{
              margin: "2rem 0",
            }}
          >
            <Typography
              data-aos="fade-up"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.3rem" },
                fontWeight: 400,
              }}
            >
              Iam a dedicated Frontend Developer with a knack for crafting
              intuitive and dynamic web interfaces. With expertise in HTML, CSS,
              JavaScript, BootStrap and React.js, I transform ideas into
              engaging digital experiences.
            </Typography>
            <Typography
              data-aos="fade-up"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.3rem" },
                fontWeight: 400,
              }}
            >
              I am passionate about learning new technologies and continuously
              improving my skills to stay at the forefront of web development.
              My goal is to create user-friendly, visually appealing websites
              that meet the needs of clients and users alike.
            </Typography>
            <Typography
              data-aos="fade-up"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.3rem" },
                fontWeight: 400,
              }}
            >
              When Iam not coding, I enjoy exploring new design trends and
              contributing to open-source projects. Lets collaborate to make
              your next web project a success.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
