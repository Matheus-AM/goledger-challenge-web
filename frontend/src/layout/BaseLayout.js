import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';


const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

function BaseLayout() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <NavBar/>
        <SideBar/>

    </div>
  );
}

export default BaseLayout;