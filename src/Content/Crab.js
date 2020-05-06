import React from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyle } from "./style";
import Ghe1 from "../Images/ghe1.svg";
import Ghe2 from "../Images/ghe2.svg";
import Ghe3 from "../Images/ghe3.svg";
import Ghe4 from "../Images/ghe4.jpg";

const Crab = () => {
  const classes = useStyle();

  return (
    <Box className={classes.rootPost}>
      <Grid container justify="center" className={classes.rowFirst}>
        <Grid item md={12} lg={6} className={classes.columnLeft}>
          this is video
        </Grid>
        <Grid item md={12} lg={6} className={classes.columnRight}>
          <Box className={classes.title} mb={2}>
            Ghẹ tươi sống
          </Box>
          <Box className={classes.description} mb={4}>
            Ghẹ xanh là một loài hải sản được nhiều người ưa thích. Có nhiều
            loại như ghẹ hoa, ghẹ đỏ, ghẹ …. Nhưng ghẹ xanh được đánh giá là có
            giá trị hơn cả vì to và cho thịt ngọt, thơm. Ở nước ta, ghẹ xanh
            phân bố nhiều ở các vùng biển và hải đảo với số lượng lớn, đây chính
            là nguồn nguyên liệu để bạn có thể chế biến nên nhiều món ăn ngon
            như hấp, luộc, nướng, nấu lẩu…
          </Box>
          <Box className={classes.price}>350.000 đ/kg</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.rowSecond}>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={Ghe1} alt="ghe xanh" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={Ghe2} alt="ghe xanh" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={Ghe3} alt="ghe xanh" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img
            src={Ghe4}
            alt="ghe xanh"
            style={{ width: 252, height: 167, objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Crab;
