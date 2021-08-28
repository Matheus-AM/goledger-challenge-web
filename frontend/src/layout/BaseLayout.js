import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import api from '../services/api';


const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

function BaseLayout() {
  const classes = useStyles();

  const [side, setSide] = useState(false);
  const [header, setHeader] = useState({"colors":["#4267B2","#34495E","#ECF0F1"],"name":"music-catalog","orgMSP":"org1MSP","orgTitle":"music-catalog","version":"1.0"});

  useEffect(()=>{
    api.get("query/getHeader")
      .then((response) => setHeader(response.data))
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);})
  }, []);

  return (
    <div className={classes.root}>
        <NavBar nav={header} side={side} setSide={setSide} />
        <SideBar side={side}/>

    </div>
  );
}

export default BaseLayout;