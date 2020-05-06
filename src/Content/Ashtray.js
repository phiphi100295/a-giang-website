import React from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyle } from "./style";
import GatTan1 from "../Images/gat-tan1.svg";
import GatTan2 from "../Images/gat-tan2.svg";
import GatTan3 from "../Images/gat-tan3.svg";
import GatTan4 from "../Images/gat-tan4.svg";

const Ashtray = () => {
  const classes = useStyle();

  return (
    <Box className={classes.rootPost}>
      <Grid container justify="center" className={classes.rowFirst}>
        <Grid item md={12} lg={6} className={classes.columnLeft}>
          this is video
        </Grid>
        <Grid item md={12} lg={6} className={classes.columnRight}>
          <Box className={classes.title} mb={2}>
            Gạt tàn hình con voi
          </Box>
          <Box className={classes.description} mb={4}>
            Gạt đóng, mở nắp để sử dụng, không bị văng tàn thuốc ra ngoài, dễ
            ràng vệ sinh. Phù hợp sử dụng cho gia đình, nhà hàng, khách sạn...
            đem lại sự sang trọng, độc đáo trên bàn tiếp khách. Gạt tàn thuốc
            hình tròn có hoa văn rất đẹp mắt.
          </Box>
          <Box className={classes.price} style={{ width: 207 }}>
            200.000 - 350.000 đ/cái
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.rowSecond}>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GatTan1} alt="gat tan" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GatTan2} alt="gat tan" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GatTan3} alt="gat tan" />
        </Grid>
        <Grid item md={6} lg={3} className={classes.center}>
          <img src={GatTan4} alt="gat tan" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ashtray;
