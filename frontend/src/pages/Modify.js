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
  const [elements, setElements] = useState([{ "tag": "artist", "label": "Artist", "description": "", "writers": null }, { "tag": "album", "label": "Album", "description": "", "writers": null }, { "tag": "streaming", "label": "Streaming Service", "description": "", "writers": null }]);
  const [artist, setArtist] = useState([{ "@assetType": "artist", "@key": "artist:2158e89a-8d5d-51af-be48-e1b909e6b89c", "@lastTouchBy": "org1MSP", "description": "Rie Takahashi is a Japanese voice actress and singer affiliated with 81 Produce. She had a leading role in the anime series Seiyu's Life!, where she became part of the musical unit Earphones. She is known for voicing Futaba Ichinose in Seiyu's Life!, Megumin in KonoSuba, Emilia in Re:Zero − Starting Life in Another World, Takagi-san in Teasing Master Takagi-san, Mash Kyrielight in Fate/Grand Order, Mirai Asahina/Cure Miracle in Witchy PreCure!, Dan Kouzo in Bakugan: Battle Planet, and Hu Tao in Genshin Impact. She performed theme songs for the same series. She won the Best Female Newcomer at the 10th Seiyu Awards.", "location": "Japan", "name": "Rie Takahashi" }, { "@assetType": "artist", "@key": "artist:429c2e38-89b7-5b38-889c-c687905baa88", "@lastTouchBy": "org1MSP", "description": "Human Act is a Heavy Metal band from Brasília, Brazil. Influenced by everything that is hard and heavy, the band tries to bring together the best of classic metal and modern metal.", "location": "Brazil", "name": "Human Act" }, { "@assetType": "artist", "@key": "artist:540a12d9-af40-5835-988f-b70daefc6e26", "@lastTouchBy": "org1MSP", "description": "Five Finger Death Punch, also abbreviated as 5FDP or FFDP, is an American heavy metal band from Las Vegas, Nevada, formed in 2005. The band originally consisted of vocalist Ivan Moody, rhythm guitarist Zoltan Bathory, lead guitarist Caleb Andrew Bingham, bassist Matt Snell, and drummer Jeremy Spencer.", "location": "USA", "name": "Five Finger Death Punch" }, { "@assetType": "artist", "@key": "artist:82927a06-d321-579e-a5b0-a5439a7c3015", "@lastTouchBy": "org1MSP", "description": "Rush was a Canadian rock band formed in Toronto in 1968, consisting of Geddy Lee (bass, vocals, keyboards, composer), Alex Lifeson (guitars, composer), and Neil Peart (drums, percussion, lyricist). After its formation in 1968, the band went through several configurations before arriving at its classic power trio lineup with the addition of Peart in 1974, who replaced original drummer John Rutsey right after the release of their self-titled debut album, which contained their first radio hit, \"Working Man\". This lineup had remained intact for the duration of the band's career.", "location": "Canada", "name": "Rush" }, { "@assetType": "artist", "@key": "artist:b5ac6228-9f43-5123-80f8-2bb40993c2cb", "@lastTouchBy": "org1MSP", "description": "Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to 40 albums, including 16 studio albums, 13 live albums, four EPs, and seven compilations. They have also released 47 singles and 20 video albums.", "location": "United Kingdom", "name": "Iron Maiden" }]);
  const [album, setAlbum] = useState([{ "@assetType": "album", "@key": "album:09bd37c3-96ab-573a-acd8-87efadaca61e", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:2158e89a-8d5d-51af-be48-e1b909e6b89c" }, "explicit": false, "genre": "JPop", "nTracks": 1, "name": "Uutsu", "strOptions": [{ "@assetType": "streaming", "@key": "streaming:2d77fb6a-7532-52ca-a759-a367825238c2" }, { "@assetType": "streaming", "@key": "streaming:5588c698-365f-596a-a93d-aac69f155c59" }, { "@assetType": "streaming", "@key": "streaming:65a12579-dfe6-514c-a066-9ed4415c72e5" }, { "@assetType": "streaming", "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2" }], "year": 2021 }, { "@assetType": "album", "@key": "album:54300224-e34e-522e-b4de-73481dbf26dd", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:540a12d9-af40-5835-988f-b70daefc6e26" }, "explicit": false, "genre": "Heavy Metal", "nTracks": 5, "name": "A Decade of Destruction", "strOptions": [{ "@assetType": "streaming", "@key": "streaming:65a12579-dfe6-514c-a066-9ed4415c72e5" }, { "@assetType": "streaming", "@key": "streaming:5588c698-365f-596a-a93d-aac69f155c59" }, { "@assetType": "streaming", "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2" }], "year": 2020 }, { "@assetType": "album", "@key": "album:8b42bd78-c5f3-5473-bff6-de383b3e4e43", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:429c2e38-89b7-5b38-889c-c687905baa88" }, "explicit": false, "genre": "Heavy Metal", "nTracks": 5, "name": "Tales of Humanity", "strOptions": [{ "@assetType": "streaming", "@key": "streaming:65a12579-dfe6-514c-a066-9ed4415c72e5" }, { "@assetType": "streaming", "@key": "streaming:5588c698-365f-596a-a93d-aac69f155c59" }, { "@assetType": "streaming", "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2" }], "year": 2019 }, { "@assetType": "album", "@key": "album:b26c6515-c7cd-56ae-804a-ac3f0a1f166d", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:c2e44fab-8b71-56f1-bdc3-1c49435e7a24" }, "explicit": true, "genre": "Hip Hop", "nTracks": 20, "name": "The Eminem Show", "strOptions": [{ "@assetType": "streaming", "@key": "streaming:2d77fb6a-7532-52ca-a759-a367825238c2" }, { "@assetType": "streaming", "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2" }, { "@assetType": "streaming", "@key": "streaming:de94b95c-18d7-5dcb-84ba-07f3a402b1cf" }], "year": 2002 }, { "@assetType": "album", "@key": "album:b56ae07a-2e0c-5925-b27f-77ffbc3ad93e", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:540a12d9-af40-5835-988f-b70daefc6e26" }, "explicit": false, "genre": "Heavy Metal", "nTracks": 5, "name": "Machine", "year": 2020 }, { "@assetType": "album", "@key": "album:d313289e-758f-5c3e-bd8e-02fe2679a79c", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:b5ac6228-9f43-5123-80f8-2bb40993c2cb" }, "explicit": false, "genre": "Heavy Metal", "nTracks": 11, "name": "The Book of Souls", "year": 2015 }, { "@assetType": "album", "@key": "album:d8637cec-159c-55a0-ab9f-abab9fe37651", "@lastTouchBy": "org1MSP", "artist": { "@assetType": "artist", "@key": "artist:82927a06-d321-579e-a5b0-a5439a7c3015" }, "explicit": false, "genre": "Progressive Rock", "nTracks": 6, "name": "Permanent Waves", "strOptions": [{ "@assetType": "streaming", "@key": "streaming:5588c698-365f-596a-a93d-aac69f155c59" }], "year": 1980 }]);
  const [streaming, setStreaming] = useState([{ "@assetType": "streaming", "@key": "streaming:0e678163-71ee-5ebc-96d5-559ef3db8957", "@lastTouchBy": "org1MSP", "name": "GloboPlay" }, { "@assetType": "streaming", "@key": "streaming:2d77fb6a-7532-52ca-a759-a367825238c2", "@lastTouchBy": "org1MSP", "name": "Youtube Premium" }, { "@assetType": "streaming", "@key": "streaming:5588c698-365f-596a-a93d-aac69f155c59", "@lastTouchBy": "org1MSP", "name": "Apple Music" }, { "@assetType": "streaming", "@key": "streaming:598681ad-b5a7-528b-b0f5-fad69eae4c37", "@lastTouchBy": "org1MSP", "name": "SBT" }, { "@assetType": "streaming", "@key": "streaming:5a72a2ae-1654-54d3-9e7a-3ede6c75cce8", "@lastTouchBy": "org1MSP", "name": "HBO" }, { "@assetType": "streaming", "@key": "streaming:65a12579-dfe6-514c-a066-9ed4415c72e5", "@lastTouchBy": "org1MSP", "name": "Deezer" }, { "@assetType": "streaming", "@key": "streaming:686d9797-c17b-5ae4-b25d-4d758cd25844", "@lastTouchBy": "org1MSP", "name": "TWITCH" }, { "@assetType": "streaming", "@key": "streaming:8bdb50ae-095d-5d87-89f6-bca681662601", "@lastTouchBy": "org1MSP", "name": "Disney Plus" }, { "@assetType": "streaming", "@key": "streaming:8c56dcae-2a8a-585e-9561-68e51cc84048", "@lastTouchBy": "org1MSP", "name": "Globo" }, { "@assetType": "streaming", "@key": "streaming:ab1177d3-a4aa-58b5-b686-22951b494326", "@lastTouchBy": "org1MSP", "name": "Amazon Prime" }, { "@assetType": "streaming", "@key": "streaming:c245413a-cfd4-508c-84ef-9f59a26130a3", "@lastTouchBy": "org1MSP", "name": "Netflix" }, { "@assetType": "streaming", "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2", "@lastTouchBy": "org1MSP", "name": "Spotify" }, { "@assetType": "streaming", "@key": "streaming:cc3f79aa-ab54-5458-afb1-d8ad69b6cd96", "@lastTouchBy": "org1MSP", "name": "CARNIVAL" }, { "@assetType": "streaming", "@key": "streaming:ccbba929-7220-5b78-8ece-5069f16c8d06", "@lastTouchBy": "org1MSP", "name": "OASIS" }, { "@assetType": "streaming", "@key": "streaming:de94b95c-18d7-5dcb-84ba-07f3a402b1cf", "@lastTouchBy": "org1MSP", "name": "Youtube" }, { "@assetType": "streaming", "@key": "streaming:e575d51b-1f71-55a4-a25f-92e145c03dd8", "@lastTouchBy": "org1MSP", "name": "Globo Play" }]);
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
    api.get("query/getSchema")
      .then((response) => setElements(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    api.post("query/search", {
      "query": {
        "selector": {
          "@assetType": elements[0].tag
        }
      }
    }).then((response) => setArtist(response.data.result))
      .catch((err) => {
        console.error(err);
      })
    api.post("query/search", {
      "query": {
        "selector": {
          "@assetType": elements[1].tag
        }
      }
    }).then((response) => setAlbum(response.data.result))
      .catch((err) => {
        console.error(err);
      })
    api.post("query/search", {
      "query": {
        "selector": {
          "@assetType": elements[2].tag
        }
      }
    }).then((response) => setStreaming(response.data.result))
      .catch((err) => {
        console.error(err);
      })
  }, []);


  const handleSubmit = (event) => {
    const actual = elements.map((obj) => {
      if(obj.label === active)
        return obj.tag
    })[0]


    alert('Um nome sera enviado: '+ actual);
    

    if(create === 'Add') {
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
    else if(create === 'Edit') {
      const data = {
        "update": {
          "@assetType": actual,
          "name": "Ximbinha",
          "location": "Brazil",
          
        }
      };
      api.put("invoke/updateAsset", data)

    }
    else if(create === 'Delete') {
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
                    <Box display='flex'  key={indexi} >
                    {obj.map((el, indexj) => (
                    <Box key={indexj} >
                      <Box display='flex' justifyContent='center' alignItems='flex-end'>
                        <Typography className={classes.titleBox} >{el}</Typography>
                        <TextField className={classes.textBox} label="New" variant="outlined" />
                      </Box>
                    </Box>
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