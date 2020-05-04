import React from "react";
import Slider from "react-slick";
import { useStyle } from "./style";
import { Box } from "@material-ui/core";
import GheXanh from "../../Images/ghe-xanh.jpg";
import GatTan from "../../Images/gat-tan.jpg";
import GaNuong from "../../Images/ga-nuong.jpg";

const Banner = () => {
  const classes = useStyle();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings} className={classes.root}>
      <img src={GaNuong} alt="ga nuong" className={classes.img} />
      <img src={GheXanh} alt="ghe xanh" className={classes.img} />
      <img src={GatTan} alt="gat tan" className={classes.img} />
    </Slider>
  );
};

export default Banner;
