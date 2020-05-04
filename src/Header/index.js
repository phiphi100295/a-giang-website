import React from "react";
import { Box } from "@material-ui/core";
import Logo from "../Images/logo.svg";
import AddressIcon from "../Images/address-icon.svg";
import PhoneIcon from "../Images/phone-icon.svg";
import ClockIcon from "../Images/clock-icon.svg";
import { useStyle } from "./style";

const Header = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <img src={Logo} alt="logo" />
      <Box className={classes.content}>
        <Box className={classes.xsContent}>
          <img src={AddressIcon} alt="địa chỉ" />
          <Box ml={1.5}>
            <Box className={classes.title}>Địa chỉ:</Box>
            <Box className={classes.textAddress}>
              Số 79, đường số 15, P. Tân Hưng, Quận 7, Tp. HCM
            </Box>
          </Box>
        </Box>

        <Box className={classes.xsContent}>
          <img src={PhoneIcon} alt="điện thoại" />
          <Box ml={1.5}>
            <Box className={classes.title}>Đặt hàng:</Box>
            <Box className={classes.textPhone}>098 444 0137 097 832 4337</Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start">
          <img src={ClockIcon} alt="đồng hồ" />
          <Box ml={1.5}>
            <Box className={classes.title}>Giờ mở cửa:</Box>
            <Box className={classes.textOpenStore}>9h sáng - 10h tối</Box>
            <Box className={classes.textWeek}>(Thứ 2 - Chủ nhật)</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
