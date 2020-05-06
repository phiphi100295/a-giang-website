import React from "react";
import { Box } from "@material-ui/core";
import { useStyle } from "./style";
import BBQChicken from "./BBQChicken";
import Crab from "./Crab";
import Ashtray from "./Ashtray";

const ContentMobile = () => {
  const classes = useStyle();
  return (
    <Box>
      <Box mt={5}>
        <Box className={classes.title + " " + classes.titleMobile}>
          Gà nướng mật ong
        </Box>
        <BBQChicken />
      </Box>
      <Box mt={5}>
        <Box className={classes.title + " " + classes.titleMobile}>
          Ghẹ tươi sống
        </Box>
        <Crab />
      </Box>
      <Box mt={5}>
        <Box className={classes.title + " " + classes.titleMobile}>
          Gạt tàn hình con voi
        </Box>
        <Ashtray />
      </Box>
    </Box>
  );
};

export default ContentMobile;
