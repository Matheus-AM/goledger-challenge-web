import React from "react";
import { ThemeProvider} from "@material-ui/core";
import { createTheme, makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Main from "./pages/Main.js";

const useStyles = makeStyles({
  root: {

  },
});



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
