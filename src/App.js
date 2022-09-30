import React from "react";
import { hot } from "react-hot-loader/root";

import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar></Toolbar>
      </AppBar>
      <Welcome />
    </ThemeProvider>
  );
};

export default hot(App);
