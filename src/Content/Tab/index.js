import React from "react";
import { Box } from "@material-ui/core";
import { useStyle } from "./style";

const Tab = (props) => {
  const { chicken, crab, ashtray, handleActive } = props;
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Box
        style={{
          borderBottom: chicken ? "2px solid #FFA900" : "none",
        }}
        className={classes.textTab}
        onClick={() => handleActive("chicken")}
      >
        Gà nướng mật ong
      </Box>
      <Box className={classes.flash}>|</Box>
      <Box
        style={{
          borderBottom: crab ? "2px solid #FFA900" : "none",
        }}
        className={classes.textTab}
        onClick={() => handleActive("crab")}
      >
        Ghẹ tươi sống
      </Box>
      <Box className={classes.flash}>|</Box>
      <Box
        style={{
          borderBottom: ashtray ? "2px solid #FFA900" : "none",
        }}
        className={classes.textTab}
        onClick={() => handleActive("ashtray")}
      >
        Gạc tàn hình con voi
      </Box>
    </Box>
  );
};

export default Tab;
