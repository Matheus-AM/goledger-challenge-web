import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100hv'
  },
}));

function Main() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <NavBar/>
    </div>
  );
}

export default Main;