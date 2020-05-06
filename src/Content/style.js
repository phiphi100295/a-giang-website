import makeStyles from "@material-ui/styles/makeStyles";

export const useStyle = makeStyles((theme) => ({
  root: {
    background: "#FFA900",
    color: "#FFFFFF",
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  rootPost: {
    padding: "80px 143px 0 143px",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 143px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "40px 24px",
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("1280")]: {
      justifyContent: "flex-start",
    },
  },
  rowFirst: {
    marginBottom: 29,
    [theme.breakpoints.down("1360")]: {
      flexDirection: "column",
    },
  },
  rowSecond: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  columnRight: {
    maxWidth: 490,
    minHeight: 302,
    marginLeft: 28,
    paddingTop: 24,
    [theme.breakpoints.down("1360")]: {
      marginLeft: 0,
      minHeight: 250,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      maxWidth: "unset",
      minHeight: 200,
      paddingTop: 29,
      paddingBottom: 24,
    },
  },
  columnLeft: {
    maxWidth: 528,
    minHeight: 302,
    border: "1px solid red",
    marginRight: 28,
    [theme.breakpoints.down("1360")]: {
      marginRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
      minHeight: 200,
    },
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    color: "#00000",
  },
  titleMobile: {
    color: "#fff",
    background: " #FFA900",
    padding: 4,
    textAlign: "center",
    borderRadius: 20,
  },
  description: {
    maxWidth: 497,
    wordBreak: "break-word",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "#848484",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 16,
    },
  },
  price: {
    width: 146,
    height: 38,
    border: "1px solid #FFA900",
    borderRadius: 8,
    color: "#FFA900",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
