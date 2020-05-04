import makeStyles from "@material-ui/styles/makeStyles";

export const useStyle = makeStyles((theme) => ({
  root: {
    height: 447,
    "& .slick-next": {
      display: "none !important",
    },
    "& .slick-prev": {
      display: "none !important",
    },
  },
  img: {
    width: "100%",
    height: 447,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      height: 350,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
}));
