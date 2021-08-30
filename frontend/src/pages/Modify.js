import { Box, Button, Container, Grid, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FormText from '../components/FormText';
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
  const [create, setCreate] = useState("");
  const [active, setActive] = useState("Artist");
  const [elem, setElem] = useState("");
  const [atributes, setAtributes] = useState("");

  const [label1, setLabel1] = useState();
  const [label2, setLabel2] = useState();
  const [label3, setLabel3] = useState();
  const [label4, setLabel4] = useState();
  const [label5, setLabel5] = useState();
  const [label6, setLabel6] = useState();
  const [label7, setLabel7] = useState();

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
    setAtributes(elementDecide())
  }, [active, create]);

  const handleChange1 = (event) => {
    setLabel1(event.target.value);
  }
  const handleChange2 = (event) => {
    setLabel2(event.target.value);
  }
  const handleChange3 = (event) => {
    setLabel3(event.target.value);
  }
  const handleChange4 = (event) => {
    setLabel4(event.target.value);
  }
  const handleChange5 = (event) => {
    setLabel5(event.target.value);
  }
  const handleChange6 = (event) => {
    setLabel6(event.target.value);
  }
  const handleChange7 = (event) => {
    setLabel7(event.target.value);
  }


  const handleSubmit = (event) => {
    const actual = elements.map((obj) => {
      if (obj.label === active)
        return obj.tag
    })[0]


    if (create === 'Add') {
      const labels = [label1, label2, label3, label4, label5, label6, label7]

      let data = {
        "asset": [
          {
            "@assetType": actual,

          }
        ]
      };
      atributes.map((atrib, i)=>{if(labels[i]) data.asset[0][atrib] = labels[i] }) 
      api.post("invoke/createAsset", data)
      .then()
        .catch((err) => {
          console.error(err);
        })
    }
    else if (create === 'Edit') {
      let nomeSelecionado = "";

      if(actual === 'artist'){
        nomeSelecionado = artist.find((o) => o.name === elem.toString());
      }
      else if(actual === 'album')
        nomeSelecionado = album.find((o) => o.nome === elem.toString());
      else
        nomeSelecionado = streaming.find((o) => o.nome === elem.toString());
        
      let data = {
        "update": {
          "@assetType": actual,
        }
      };

      nomeSelecionado[atributes] = label1;
      
      Object.keys(nomeSelecionado).map((atrib)=>{ data.update[atrib] = nomeSelecionado[atrib] }) 
      api.put("invoke/updateAsset", data)
      .then()
      .catch((err) => {
        console.error(err);
      })

    }
    else if (create === 'Delete') {

      let nomeSelecionado = "";

      if(actual === 'artist'){
        nomeSelecionado = artist.find((o) => o.name === elem.toString());
      }
      else if(actual === 'album')
        nomeSelecionado = album.find((o) => o.nome === elem.toString());
      else
        nomeSelecionado = streaming.find((o) => o.nome === elem.toString());
        
      let data = {
        "key": {
          "@assetType": actual,
        }
      }
      atributes.map((atrib, i)=>{data.key[atrib] = nomeSelecionado[atrib] }) 

      api.post("invoke/deleteAsset", data)
      .then()
      .catch((err) => {
        console.error(err);
      })
    }
    event.preventDefault();
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
                {create ? (<Button type={'submit'} variant={'outlined'} color={'inherit'} >{create}</Button>):(<></>)}
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
                    <TextField onChange={handleChange1} className={classes.textBox} label="New" variant="outlined" />
                  </Box>
                </Box>

              ) : create === 'Add' ? (
                <Box display='flex' flexDirection='column' alignItems='center'>
                  <Box  display='flex' alignItems='center' >
                    {atributes[0] ? (<Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[0]}</Typography>
                      <TextField onChange={handleChange1} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                    {atributes[1] ? ( <Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[1]}</Typography>
                      <TextField onChange={handleChange2} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                    {atributes[2] ? (<Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[2]}</Typography>
                      <TextField  onChange={handleChange3} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                    {atributes[3] ? (<Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[3]}</Typography>
                      <TextField onChange={handleChange4} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                  </Box>
                  <Box  display='flex' alignItems='center' >
                  {atributes[4] ? (<Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[4]}</Typography>
                      <TextField onChange={handleChange5} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                    {atributes[5] ? (<Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[5]}</Typography>
                      <TextField onChange={handleChange6} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                    {atributes[6] ? (<Box display='flex' justifyContent='center' alignItems='flex-end'>
                      <Typography className={classes.titleBox} >{atributes[6]}</Typography>
                      <TextField onChange={handleChange7} className={classes.textBox} label="New" variant="outlined" />
                    </Box>):(<></>)}
                  </Box>
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