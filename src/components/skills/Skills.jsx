import {
  faBootstrap,
  faCss3Alt,
  faGithubAlt,
  faGulp,
  faHtml5,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faPaw, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    icon: faHtml5,
    text: "HTML is the standard markup language used to create web pages.",
    color: "#e34f26",
  },
  {
    name: "CSS",
    icon: faCss3Alt,
    text: "CSS is a styling language used to control the layout and appearance of web pages written in HTML or XML.",
    color: "#264de4",
  },
  {
    name: "JavaScript",
    icon: faSquareJs,
    text: "JavaScript is a high-level, dynamic, and interpreted programming language. It is primarily used for client-side scripting on the web, allowing developers to add interactive and dynamic effects to websites.",
    color: "#f7df1e",
  },
  {
    name: "BootStrap",
    icon: faBootstrap,
    text: "Bootst rap is a free and open-source CSS and JavaScript-based framework for building responsive and mobile-first front-end components. It is one of the most popular front-end frameworks used in web development.",
    color: "#7952B3",
  },
  {
    name: "SASS",
    icon: faSass,
    text: "SASS is a free and open-source CSS preprocessor scripting language that is compiled into CSS and is used to style and layout web pages.",
    color: "#cf649a",
  },
  {
    name: "PugJs",
    icon: faPaw,
    text: "Pu gJS is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. It compiles templates into JavaScript functions that can be efficiently rendered at runtime",
    color: "#a86454",
  },
  {
    name: "GulpJs",
    icon: faGulp,
    text: "GulpJS is a JavaScript toolkit created by Eric Schoffstall used for automating and enhancing the development workflow. It provides a flexible way to automate tasks and workflows, making it a popular choice among developers.",
    color: "#cf4647",
  },
  {
    name: "ReactJS",
    icon: faReact,
    text: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It can also be used for developing single-page, mobile, or desktop applications.",
    color: "#00d8ff",
  },
  {
    name: "GitHub",
    icon: faGithubAlt,
    text: "GitHub is a web-based platform for version control and collaboration. It allows developers to host and manage their code repositories, collaborate with others, and track changes to their code.",
    color: "#181717",
  },
  {
    name: "Command Line",
    icon: faTerminal,
    text: "Command Line Interface (CLI) is a text-based interface for interacting with a computer s operating system or applications. It allows users to execute commands and scripts to perform various tasks, such as managing files, running programs, and configuring system settings.",
    color: "#4d4d4d",
  },
];

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
          pt: "10rem",
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
            m: "0 0 5rem",
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              data-aos="fade-up"
              minHeight={"calc(23.2rem + 7rem + 12rem)"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              flex={"1 1 30rem"}
              // @ts-ignore
              // bgcolor={`${theme.palette.bgColor.secondary}`}
              // bgcolor={skill.color}
              // bgcolor={`${theme.palette.bgColor.primary}`}

              p={"3rem 2rem 4rem"}
              borderRadius={"2rem"}
              // @ts-ignore
              boxShadow={`0 .1rem .5rem ${theme.palette.shadowColor.main}`}
              // @ts-ignore
              borderTop={`.6rem solid ${theme.palette.mainColor.main}`}
              // @ts-ignore
              borderBottom={`.6rem solid ${theme.palette.mainColor.main}`}
              // borderTop={`.6rem solid ${skill.color}`}
              // borderBottom={`.6rem solid ${skill.color}`}
              sx={{
                // @ts-ignore
                transition: theme.palette.transition.main,

                backdropFilter: "blur(3px)",

                "&:hover": {
                  // @ts-ignore
                  boxShadow: `0 1.2rem 2rem ${theme.palette.shadowColor.main}`,
                  transform: "scale(1.05)",
                  // @ts-ignore
                  // bgcolor:theme.palette.bgColor.main
                  backdropFilter: "blur(5px)",
                },
                "&:hover h3": {
                  color: skill.color,
                },
              }}
            >
              <Box>
                <FontAwesomeIcon
                  icon={skill.icon}
                  fontSize={"7rem"}
                  color={skill.color}
                  style={{ marginBottom: "1.5rem" }}
                />
                <Typography
                  variant="h3"
                  component={"h3"}
                  sx={{
                    // @ts-ignore
                    transition: theme.palette.transition.main,
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                component={"p"}
                sx={{
                  fontSize: "1.6rem",
                  m: "1rem 0 3rem",
                }}
              >
                {skill.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
