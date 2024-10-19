import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { linkProjects } from "../../contexts";

function Projects() {
  const theme = useTheme();
  const [screenshotUrls, setScreenshotUrls] = useState({});
  const [showAll, setShowAll] = useState(false);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: false });
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const apiKey = "8261400c8825437cb4f7df65adbd5607";

    const fetchScreenshots = async () => {
      try {
        const urls = {};
        for (const linkProject of linkProjects) {
          const screenshotApiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${apiKey}&wait_until=page_loaded&url=${encodeURIComponent(linkProject.projectLink)}`;
          urls[linkProject.projectLink] = screenshotApiUrl;
        }
        setScreenshotUrls(urls);
      } catch (error) {
        console.error("Error fetching screenshots:", error);
      }
    };

    fetchScreenshots();
  }, []);

  const toggleProjects = () => {
    setShowAll((prev) => !prev);
    if (showAll) {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayedProjects = showAll ? linkProjects : linkProjects.slice(0, 6);

  return (
    <Box
      id="projects"
      ref={projectsSectionRef}
      sx={{
        // @ts-ignore
        bgcolor: theme.palette.bgColor.secondary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "auto",
        pb: "7rem !important",
      }}
    >
      <Container
        className="project"
        maxWidth="lg"
        sx={{
          pt: "7rem",
          pb: "2rem",
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
          Latest{" "}
          <Typography
            variant="inherit"
            component={"span"}
            sx={{
              // @ts-ignore
              color: theme.palette.mainColor.main,
            }}
          >
            Projects
          </Typography>
        </Typography>

        <Box
          className="project-container"
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fill, minmax(330px, 1fr))"}
          alignItems={"center"}
          gap={"2.5rem"}
        >
          {displayedProjects.map((linkProject, index) => (
            <Box
              key={index}
              data-aos="fade-up"
              className={`project-box ${linkProject.name}`}
              position={"relative"}
              display={"flex"}
              borderRadius={"2rem"}
              // @ts-ignore
              boxShadow={`0 .1rem .5rem ${theme.palette.shadowColor.main}`}
              overflow={"hidden"}
              sx={{
                "&:hover img": {
                  transform: "scale(1.05)",
                },
                "&:hover .project-layer": {
                  opacity: 1,
                },
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <CardMedia
                component="img"
                image={screenshotUrls[linkProject.projectLink]}
                alt={linkProject.name}
                sx={{
                  width: "100%",
                  // @ts-ignore
                  transition: theme.palette.transition.main,
                }}
              />

              <Box
                className="project-layer"
                position={"absolute"}
                bottom={0}
                left={0}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                flexDirection={"column"}
                sx={{
                  // @ts-ignore
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), ${theme.palette.mainColor.main})`,
                  color: "white",
                  p: "1rem",
                  opacity: 0,
                  // @ts-ignore
                  transition: theme.palette.transition.main,
                }}
              >
                <Typography
                  variant="h4"
                  component={"h4"}
                  fontSize={"2.5rem"}
                >
                  {linkProject.name}
                </Typography>
                <Typography
                  fontSize={"1.5rem"}
                  m={".3rem 0 1rem"}
                >
                  {linkProject.text}
                </Typography>

                <Typography
                  variant="body2"
                  component={"a"}
                  href={linkProject.projectLink}
                  target="_blank"
                  display={"inline-flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  width={{
                    xs: "3rem",
                    md: "4rem",
                  }}
                  height={{
                    xs: "3rem",
                    md: "4rem",
                  }}
                  bgcolor={theme.palette.text.secondary}
                  sx={{
                    "&:hover": {
                      // @ts-ignore
                      backgroundColor: theme.palette.mainColor.dark,
                      transition: "background-color 0.2s ease-in-out", // تأثير انتقال للزر
                    },
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color={theme.palette.text.primary}
                    fontSize={"1rem"}
                    fontWeight={900}
                  />
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          display={linkProjects.length <= 6 ? "none" : "flex"}
          justifyContent={"center"}
          mt={"4rem"}
          data-aos="flip-down"
        >
          <Button
            onClick={toggleProjects}
            variant="contained"
            sx={{
              fontSize: "1.6rem",
              fontWeight: "600",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              // @ts-ignore
              bgcolor: theme.palette.mainColor.main,
              color: "#fff",
              "&:hover": {
                // @ts-ignore
                bgcolor: theme.palette.mainColor.dark,
              },
            }}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
