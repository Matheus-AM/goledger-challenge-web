import { Box, Button, Card, CardActions, CardContent, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(30),
    height: '100hv'
  },
  teste: {
    backgroundColor: 'red'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Main() {
  const classes = useStyles();
  const artist = [1, 2, 3];


  return (
    <Box className={classes.root}>
      <Toolbar />
      <Grid container>
        <Typography>
          Artist
        </Typography>
        {artist.map((v, index) => (
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        ))}

        <Typography>
          Album
        </Typography>
        {artist.map((v, index) => (
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        ))}

        <Typography>
          Streaming
        </Typography>
        {artist.map((v, index) => (
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        ))}
      </Grid>
    </Box>
  );
}

export default Main;