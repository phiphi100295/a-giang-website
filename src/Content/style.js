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
}));
