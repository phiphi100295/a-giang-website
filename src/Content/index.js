import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import { Box } from "@material-ui/core";
import Banner from "./Banner";
import Tab from "./Tab";
import BBQChicken from "./BBQChicken";
import Crab from "./Crab";
import Ashtray from "./Ashtray";
import ContentMobile from "./ContentMobile";

const Content = () => {
  const [chicken, setChicken] = useState(true);
  const [crab, setCrab] = useState(false);
  const [ashtray, setAshtray] = useState(false);

  const handleActive = (type) => {
    if (type === "chicken") {
      setChicken(true);
      setCrab(false);
      setAshtray(false);
    }
    if (type === "crab") {
      setChicken(false);
      setCrab(true);
      setAshtray(false);
    }
    if (type === "ashtray") {
      setChicken(false);
      setCrab(false);
      setAshtray(true);
    }
  };

  return (
    <Box>
      <Banner />
      <Hidden smDown>
        <Tab
          chicken={chicken}
          crab={crab}
          ashtray={ashtray}
          handleActive={handleActive}
        />
        {chicken && <BBQChicken />}
        {crab && <Crab />}
        {ashtray && <Ashtray />}
      </Hidden>
      <Hidden mdUp>
        <ContentMobile />
      </Hidden>
    </Box>
  );
};

export default Content;
