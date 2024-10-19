// SkillCard.js
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const SkillCard = ({ skill, theme }) => {
  return (
    <Box
      minHeight={"calc(23.2rem + 7rem + 12rem)"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      flex={"1 1 30rem"}
      p={"3rem 2rem 4rem"}
      borderRadius={"2rem"}
      boxShadow={`0 .1rem .5rem ${theme.palette.shadowColor.main}`}
      borderTop={`.6rem solid ${theme.palette.mainColor.main}`}
      borderBottom={`.6rem solid ${theme.palette.mainColor.main}`}
      my={"20px"}
      sx={{
        transition: theme.palette.transition.main,
        backdropFilter: "blur(3px)",
        "&:hover": {
          boxShadow: `0 .2rem 2rem ${theme.palette.shadowColor.main}`,
          transform: "scale(1.02)",
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
  );
};

export default SkillCard;

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
