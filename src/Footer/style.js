import makeStyles from "@material-ui/styles/makeStyles";

export const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    height: 90,
    borderTop: "1px solid #F4F4F4",
    color: "#FFFFFF",
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: 120,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 1.6,
    color: "#848484",
  },
  address: {
    padding: "0 16px",
    borderRight: "1px solid #DBDBDB",
  },
  order: {
    padding: "0 16px",
    borderRight: "1px solid #DBDBDB",
    borderLeft: "1px solid #DBDBDB",
  },
  openTime: {
    padding: "0 16px",
    borderLeft: "1px solid #DBDBDB",
  },
  columnLeft: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
}));
