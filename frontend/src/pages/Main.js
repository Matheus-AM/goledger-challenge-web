import { Box,  Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import api from '../services/api';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100hv',
    width: '100hv',
    background: 'linear-gradient(45deg, #34495E 10%, #4267B2 95%)',
  },
  box: {
    marginLeft: theme.spacing(30),
  },

  title: {
    marginRight: theme.spacing(25),
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText
  },
}));

//{"@assetType":"album","@key":"album:09bd37c3-96ab-573a-acd8-87efadaca61e","@lastTouchBy":"org1MSP","artist":{"@assetType":"artist","@key":"artist:2158e89a-8d5d-51af-be48-e1b909e6b89c"},"explicit":false,"genre":"JPop","nTracks":1,"name":"Uutsu","strOptions":[{"@assetType":"streaming","@key":"streaming:2d77fb6a-7532-52ca-a759-a367825238c2"}
//


function Main() {
  const classes = useStyles();
  const [artist, setArtist] = useState([{"@assetType":"artist","@key":"artist:2158e89a-8d5d-51af-be48-e1b909e6b89c","@lastTouchBy":"org1MSP","description":"","location":"Japan","name":"Rie Takahashi"}]);
  const [album, setAlbum] = useState([{"@assetType":"album","@key":"album:23c12584-0375-506b-afdf-51c0ec904894","@lastTouchBy":"org1MSP","artist":{"@assetType":"artist","@key":"artist:2158e89a-8d5d-51af-be48-e1b909e6b89c"},"explicit":true,"genre":"Hip Hop","nTracks":13,"name":"Kamikaze","strOptions":[{"@assetType":"streaming","@key":"streaming:0e678163-71ee-5ebc-96d5-559ef3db8957"}],"year":2018}]);
  const [streaming, setStreaming] = useState([{"@assetType":"streaming","@key":"streaming:0e678163-71ee-5ebc-96d5-559ef3db8957","@lastTouchBy":"org1MSP","name":"GloboPlay"}]);


  const filterArtist = (a) => {
    const retorno = artist.filter((art) => { 
      return art['@key'] === a['@key'] 
    })[0]
    if(retorno)
      return retorno
    else
      return []
  }

  const filterStreamings = (s) => {
    if(s)
      return s.map((opt) => {
        return streaming.filter((str) => {
          return str['@key'] === opt['@key']
        })[0]
      })
    else
      return [{}]
  }


  useEffect(() => {

    async function postArtist() {
      await api.post("query/search", {
        "query": {
          "selector": {
            "@assetType": "artist"
          }
        }
      }).then((response) => setArtist(response.data.result))
        .catch((err) => {
          console.error(err);
        })
    } async function postAlbum() {
      await api.post("query/search", {
        "query": {
          "selector": {
            "@assetType": "album"
          }
        }
      }).then((response) => setAlbum(response.data.result))
        .catch((err) => {
          console.error(err);
        })
    }
    async function postStreaming() {
      await api.post("query/search", {
        "query": {
          "selector": {
            "@assetType": "streaming"
          }
        }
      }).then((response) => setStreaming(response.data.result))
        .catch((err) => {
          console.error(err);
        })
    }
    postArtist();
    postStreaming();
    postAlbum();

  }, []);




  return (
    <Box className={classes.root}>
      <Toolbar />
      <Box className={classes.box}>
        <Typography align={'center'} variant={'h2'} className={classes.title}>
          <b>Albuns</b>
        </Typography>
        <Grid spacing={4} container>
          {album.map((a, index) => (
            <Grid item key={index}>
              <AlbumCard
                album={a}
                author={filterArtist(a.artist)}
                streamings={filterStreamings(a.strOptions)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Main;