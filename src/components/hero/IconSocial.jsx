import { useEffect } from "react";
import { FacebookRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack, useTheme } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const icons = [
  {
    name: "Facebook",
    component: FacebookRounded,
    link: "https://www.facebook.com/profile.php?id=100007823404381&mibextid=ZbWKwL",
  },
  { name: "GitHub", component: GitHub, link: "https://github.com/yourprofile" },
  {
    name: "Instagram",
    component: Instagram,
    link: "https://instagram.com/yourprofile",
  },
  {
    name: "LinkedIn",
    component: LinkedIn,
    link: "https://linkedin.com/in/yourprofile",
  },
];

function IconSocial() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 700, once: false });

    const handleScroll = () => {
      AOS.refresh(); // إعادة تهيئة AOS عند التمرير
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme.palette.mode]);

  return (
    <Stack direction="row">
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconButton
            key={icon.name}
            aria-label={icon.name.toLowerCase()}
            href={icon.link}
            target="_blank"
            onClick={(e) => e.preventDefault()}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            sx={{
              p: "1rem",
              margin: "1.5rem .5rem 2rem 0",
              // @ts-ignore
              color: theme.palette.mainColor.main,
              // @ts-ignore
              transition: theme.palette.transition.main,
              "&:hover": {
                backgroundColor: "transparent",
                transform: "translateY(-3px)",
              },
            }}
          >
            <IconComponent
              sx={{
                fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
                borderRadius: "50%",
                transition: ".5s ease",
                "&:hover": {
                  // @ts-ignore
                  backgroundColor: theme.palette.mainColor.main,
                  // @ts-ignore
                  color: theme.palette.text.secondary,
                },
              }}
            />
          </IconButton>
        );
      })}
    </Stack>
  );
}

export default IconSocial;
