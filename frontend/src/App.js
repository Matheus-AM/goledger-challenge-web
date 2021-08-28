import React from "react";
import { ThemeProvider} from "@material-ui/core";
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Main from "./pages/Main.js";
import BaseLayout from "./layout/BaseLayout.js";

const useStyles = makeStyles({
  root: {

  },
});



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4267B2",
      },
      secondary: {
        main: "#34495E",
      },
      background: {
        paper: "#ECF0F1",
      }
    },
  });
  
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout />
      <Main />
    </ThemeProvider>
  );
}

export default App;
