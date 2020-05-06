import makeStyles from "@material-ui/styles/makeStyles";

export const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      // display: "none",
    },
  },
  textTab: {
    cursor: "pointer",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    margin: "0 56px",
    padding: " 16px 0",
    transition: "all 0.5s ease 0s",
  },
  flash: {
    color: "#DBDBDB",
  },
}));
