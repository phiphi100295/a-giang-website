import React from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyle } from "./style";
import GaNuong1 from "../Images/ga-nuong1.svg";
import GaNuong2 from "../Images/ga-nuong2.svg";
import GaNuong3 from "../Images/ga-nuong3.svg";
import GaNuong4 from "../Images/ga-nuong4.svg";

const BBQChicken = () => {
  const classes = useStyle();

  return (
    <Box className={classes.rootPost}>
      <Grid container justify="center" className={classes.rowFirst}>
        <Grid item md={12} lg={6} className={classes.columnLeft}>
          this is video
        </Grid>
        <Grid item md={12} lg={6} className={classes.columnRight}>
          <Box className={classes.title} mb={2}>
            Gà nướng mật ong
          </Box>
          <Box className={classes.description} mb={4}>
            Nếu như những món gà kho, gà luộc, gà chiên… đã quá quen thuộc thì
            tại sao bạn không thử đổi vị với món gà tẩm mật ong nướng? Hương vị
            đậm đà, mùi thơm đến nao lòng và màu sắc vàng óng của món ăn sẽ đánh
            thức vị giác người thưởng thức ngay lập tức.
          </Box>
          <Box className={classes.price}>140.000 đ/phần</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.rowSecond}>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GaNuong1} alt="ga nuong" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GaNuong2} alt="ga nuong" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GaNuong3} alt="ga nuong" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GaNuong4} alt="ga nuong" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BBQChicken;
