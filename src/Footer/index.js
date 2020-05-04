import React from "react";
import { Box } from "@material-ui/core";
import Logo from "../Images/logo2.svg";
import GrabFood from "../Images/grab-food.svg";
import Now from "../Images/now.svg";
import Baemin from "../Images/beamin.svg";
import { useStyle } from "./style";

const Footer = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Box className={classes.columnLeft}>
        <Box mr={6} className={classes.logo}>
          <img src={Logo} alt="logo" />
        </Box>
        <Box className={classes.text} display="flex" alignItems="center">
          <Box className={classes.address}>Địa chỉ</Box>
          <Box className={classes.order}>Đặt hàng</Box>
          <Box className={classes.openTime}>Giờ mở cửa</Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <Box className={classes.text} mr={2}>
          Liên kết với:
        </Box>
        <Box mr={2}>
          <img src={GrabFood} alt="grab food" />
        </Box>
        <Box mr={2}>
          <img src={Baemin} alt="baemin" />
        </Box>
        <Box>
          <img src={Now} alt="now" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
