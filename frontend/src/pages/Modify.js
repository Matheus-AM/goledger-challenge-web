import { Box, Button, Container, Grid, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FormText from '../components/FormText';
import LabelFilter from '../components/LabelFilter';
import api from '../services/api';


const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: theme.spacing(90),
    height: theme.spacing(90),
    width: '100hv',
    background: 'linear-gradient(45deg, #34495E 10%, #4267B2 95%)',
  },
  box: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(1),
    height: theme.spacing(70),
    borderRadius: theme.spacing(4),
  },
  title: {
    fontSize: 24,
    padding: theme.spacing(2),
  },
  teste: {
    marginTop: theme.spacing(3),
    height: theme.spacing(20),
    borderRadius: theme.spacing(2),
  },

  submit: {
    marginLeft: theme.spacing(10),
  },
  textBox: {
    marginRight: theme.spacing(9),
    marginBottom: theme.spacing(5),
  },
  titleBox: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  liftText: {
    marginBottom: theme.spacing(5),
    marginRight: theme.spacing(3),
  },
}));




function Modify() {
  const classes = useStyles();
  const [elements, setElements] = useState();
  const [artist, setArtist] = useState([{}]);
  const [album, setAlbum] = useState([{}]);
  const [streaming, setStreaming] = useState([{}]);
  const [create, setCreate] = useState("Add");
  const [active, setActive] = useState("Artist");
  const [elem, setElem] = useState("");
  const [atributes, setAtributes] = useState("");
  const fields = [["Add", "Edit", "Delete"], ["Artist", "Album", "Streaming Service"]];

  const generateNames = () => {
    if (active === 'Artist')
      return artist.map((a) => {
        return a.name;
      });
    else if (active === 'Album')
      return album.map((a) => {
        return a.name;
      });
    else if (active === 'Streaming Service')
      return streaming.map((a) => {
        return a.name;
      });
  }

  const elementDecide = () => {
    if (active === 'Artist')
      return Object.keys(artist[0]).splice(3);
    else if (active === 'Album')
      return Object.keys(album[0]).splice(3);
    else if (active === 'Streaming Service')
      return Object.keys(streaming[0]).splice(3);
  }

  useEffect(() => {
    async function getElents() {
      await api.get("query/getSchema")
        .then((response) => setElements(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
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
    postAlbum();
    postStreaming();
    getElents()
  }, []);

  useEffect(() => {
    

  }, [elements]);



  const handleSubmit = (event) => {
    const actual = elements.map((obj) => {
      if (obj.label === active)
        return obj.tag
    })[0]


    alert('Um nome sera enviado: ' + actual);


    if (create === 'Add') {
      const data = {
        "asset": [
          {
            "@assetType": actual,
            "name": "Ximbinha",
            "location": "Brazil",
            "description": "Guitar God é o melhor guitar shredder do mundo e copiou do Deus Metal criou o Heavy Metal, seus solos chegam a incrível marca de 0,472 notas por minuto.",
          }
        ]
      };
      api.post("invoke/createAsset", data)
    }
    else if (create === 'Edit') {
      const data = {
        "update": {
          "@assetType": actual,
          "name": "Ximbinha",
          "location": "Brazil",

        }
      };
      api.put("invoke/updateAsset", data)

    }
    else if (create === 'Delete') {
      const data = {
        "key": {
          "@assetType": actual,
          "name": "Ximbinha",
          "location": "Brazil",
        }
      }
      api.post("invoke/deleteAsset", data)
    }
    event.preventDefault();
  };


  const makeHalf = (list) => {
    const h = 4;
    const half = list.splice(0, h);
    return [half, list];
  };


  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar />
        <Box display='flex' flexDirection='column' className={classes.box}>
          <Box display='flex' className={classes.teste} alignItems='center' justifyContent='center'>
            <Typography variant='h3'>
              Change one active in the network
            </Typography>
          </Box >
          <form onSubmit={handleSubmit} action="">
            <Box display='flex' className={classes.teste} justifyContent='center' alignItems='center' >
              <Box display='flex' alignItems='center' justifyContent='center' >
                <Box display='flex' flexDirection='column' alignItems='center'>
                  <Typography>Actions</Typography>
                  <FormText change={setCreate} value={create} elements={fields[0]} />
                </Box>
              </Box>
              <Box display='flex' alignItems='center' justifyContent='center' >
                <Box display='flex' flexDirection='column' alignItems='center'>
                  <Typography>Actives</Typography>
                  <FormText change={setActive} value={active} elements={fields[1]} />
                </Box>
              </Box>
              <Box className={classes.submit}>
                <Button type={'submit'} variant={'outlined'} color={'inherit'} >{create}</Button>
              </Box>
            </Box>
            <Box display='flex' justifyContent='center' className={classes.teste} alignItems='center'>
              {create === 'Delete' ? (
                <Box className={classes.liftText} display='flex' alignItems='center' alignContent='space-between'>
                  <Typography>{active}</Typography>
                  <FormText change={setElem} value={elem} elements={generateNames()} />
                </Box>
              ) : create === 'Edit' ? (
                <Box className={classes.liftText} display='flex' alignItems='center' >
                  <Box className={classes.liftText} display='flex' alignItems='center'>
                    <Typography>{active}</Typography>
                    <FormText change={setElem} value={elem} elements={generateNames()} />
                  </Box>
                  <Box className={classes.liftText} display='flex' alignItems='center'>
                    <Typography>Atribute</Typography>
                    <FormText change={setAtributes} value={atributes} elements={elementDecide()} />
                  </Box>
                  <Box display='flex' alignItems='flex-end'>
                    <TextField className={classes.textBox} id="outlined-basic" label="New" variant="outlined" />
                  </Box>
                </Box>

              ) : create === 'Add' ? (
                <Box display='flex' flexDirection='column' alignItems='center'>
                  {makeHalf(elementDecide()).map((obj, indexi) => (
                    <Box display='flex' key={indexi} >
                      {obj.map((el, indexj) => (
                        <>
                          <LabelFilter key={indexj} content={el} value={true} type={'boolean'} />
                        </>
                      ))}
                    </Box>
                  ))}
                </Box>)
                : (<></>)}
            </Box>
          </form>
        </Box>
      </Container>
      <div className={classes.grow}></div>
    </div>
  );
}

export default Modify;