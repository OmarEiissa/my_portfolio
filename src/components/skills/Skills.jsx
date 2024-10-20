import { Box, Container, Typography, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from "../../contexts";
import SkillCard from "./SkillCard";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function Skills() {
  const theme = useTheme();
  const skillsSectionRef = useRef(null);

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
      id="skills"
      ref={skillsSectionRef}
      sx={{
        minHeight: "auto",
        pb: "7rem !important",
        // @ts-ignore
        backgroundImage: theme.palette.img.main,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // @ts-ignore
        transition: theme.palette.transition.main,
        position: "relative",
        overflow: "hidden",
        // swiper style
        "& .swiper-pagination": {
          bottom: "0",
        },
        "& .swiper-pagination-bullet": {
          // @ts-ignore
          backgroundColor: theme.palette.mainColor.main,
        },
        "& .swiper-pagination-bullet-active": {
          // @ts-ignore
          backgroundColor: theme.palette.mainColor.main,
        },
        "& .swiper-button-next:after,.swiper-button-prev:after": {
          // @ts-ignore
          color: theme.palette.mainColor.main,
          fontSize: "30px",
        },
        // hide navigation on small screens
        "@media (max-width: 1024px)": {
          "& .swiper-button-next, & .swiper-button-prev": {
            display: "none",
          },
        },
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
          pt: "7rem",
          pb: "2rem",
          position: "relative",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          component={"h2"}
          sx={{
            textAlign: "center",
            m: "0 0 4rem",
            fontSize: "5.5rem",
            fontWeight: "700",
          }}
        >
          My{" "}
          <Typography
            variant="inherit"
            component={"span"}
            sx={{
              // @ts-ignore
              color: theme.palette.mainColor.main,
            }}
          >
            Skills
          </Typography>
        </Typography>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ dynamicBullets: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          coverflowEffect={{
            // rotate: 0,
            // stretch: 0,
            // depth: 100,
            // modifier: 1,
            slideShadows: false,
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <SkillCard skill={skill} theme={theme} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default Skills;
