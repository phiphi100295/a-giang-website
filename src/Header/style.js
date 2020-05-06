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
  content: {
    width: 774,
    display: "flex",
    justifyContent: "space-between",
    padding: "0 136px 0 32px",
    [theme.breakpoints.down("1260")]: {
      padding: 0,
      paddingLeft: 32,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: 28,
    },
    [theme.breakpoints.down("800")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  xsContent: {
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 16,
    },
  },
  title: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    marginBottom: 4,
  },

  textAddress: {
    fontWeight: "bold",
    fontSize: 14,
    maxWidth: 207,
    wordBreak: "break-all",
    lineHeight: 1.4,
  },
  textPhone: {
    fontWeight: "bold",
    fontSize: 18,
    maxWidth: 113,
    wordBreak: "break-all",
    letterSpacing: 1.1,
  },
  textOpenStore: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.7,
  },
  textWeek: {
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 0.7,
  },
}));
