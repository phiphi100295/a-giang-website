import React from "react";
import Box from "@material-ui/core/Box";
import Content from "../Content";
import Header from "../Header";
import { useStyle } from "./style";
import Footer from "../Footer";

const App = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
};

export default App;
