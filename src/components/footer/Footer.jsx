/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, useTheme } from "@mui/material";
import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    color: #fdfdfd;
    text-shadow: 0 0 0 rgba(255, 105, 135, 0.5);
  }
  50% {
    transform: scale(1.2);
    color: #ff6f61;
    text-shadow: 0 0 10px rgba(255, 105, 135, 0.7), 0 0 20px rgba(255, 105, 135, 0.5);
  }
  100% {
    transform: scale(1);
    color: #fdfdfd;
    text-shadow: 0 0 10px rgba(255, 105, 135, 0.5);
  }
`;

const Footer = () => {
  const theme = useTheme();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <footer
      style={{
        // @ts-ignore
        backgroundColor: theme.palette.mainColor.main,
        padding: "4px",
      }}
    >
      <Box
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h6" color={theme.palette.text.secondary} textAlign="center">
          Copyright &copy; 2023 all rights reserved.
        </Typography>
        <Typography variant="body2" color={theme.palette.text.secondary} textAlign="center">
          Developed by Omar Eissa{" "}
          <Typography
            variant="caption"
            css={css`
              display: inline-block;
              animation: ${pulse} 2s infinite;
              font-weight: 500;
              font-size: 1.25rem;
            `}
          >
            ❤️
          </Typography>
        </Typography>
      </Box>

      <Typography
        zIndex={10}
        display={"inline-block"}
        justifyContent={"center"}
        alignItems={"center"}
        p={".6rem"}
        // @ts-ignore
        bgcolor={theme.palette.mainColor.main}
        borderRadius={".8rem"}
        border={".2rem solid #fdfdfd"}
        position={"fixed"}
        bottom={"10px"}
        right={"10px"}
        component={"a"}
        href="#home"
        rel="noreferrer"
        css={css`
          transition: all 0.3s ease-in-out;
          animation: ${showScroll ? fadeIn : fadeOut} 0.5s;
          display: ${showScroll ? "inline-block" : "none"};
          &:hover {
            transform: scale(1.1);
          }
        `}
      >
        <FontAwesomeIcon icon={faArrowUp} fontSize={"1.5rem"} color="#fdfdfd" />
      </Typography>
    </footer>
  );
};

export default Footer;
