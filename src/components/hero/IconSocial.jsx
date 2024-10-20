import { useEffect } from "react";
import { IconButton, Stack, useTheme } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { icons } from "../../contexts";


function IconSocial() {
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
    <Stack direction="row">
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconButton
            key={icon.name}
            aria-label={icon.name.toLowerCase()}
            href={icon.link}
            target="_blank"
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
