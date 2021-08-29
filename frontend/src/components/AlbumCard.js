import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        marginLeft: theme.spacing(30),
    },
    teste: {
    },
    card: {
        width: 345,
        minHeight: 300,
    },
}));


function AlbumCard(props) {
    const [author, setAuthor] = useState({name: ''})
    const [streamings, setStreamings] = useState([{name: ''}])
    const [expanded, setExpanded] = useState(false);

    const classes = useStyles();
    const handleExpandClick = (e) => {
        setExpanded(!expanded);
    };

    useEffect(()=>{
        if(props.author) setAuthor(props.author);
    }, [props.author])
    
    useEffect(()=>{
        if(props.streamings) setStreamings(props.streamings);
    }, [props.streamings])
    
    return (
        <>
            {props.album ? (
                <Box boxShadow={8}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {props.album.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {author.name}
                        </Typography>
                        <Typography>
                            <b>Genre:</b>  {props.album.genre}
                        </Typography>
                        <Typography>
                            <b>Tracks:</b>  {props.album.nTracks}
                        </Typography>
                        <Typography>
                            <b>Release year:</b> {props.album.year}
                        </Typography>
                        <Typography>
                            <b>Streaming plataforms:</b>
                        </Typography>
                        {streamings.map((s, index)=>(
                        <Typography key={index}>
                            {s.name}
                        </Typography>
                        ))}
                        
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleExpandClick} variant="contained" color="primary" size="small">Learn More</Button>
                    </CardActions>
                    {expanded ? (
                        <CardContent>
                            <Typography >
                                <b>Author:</b> {author.name}
                            </Typography>
                            <Typography >
                                <b>Nationality:</b> {author.location}
                            </Typography>
                            <Typography >
                                <b>About:</b> {author.description}
                            </Typography>
                        </CardContent>
                     ) : (
                         <>
                         </>
                         )}
                </Card>
                </Box>
            )
                : (<></>)
            }
        </>
    );
}

export default AlbumCard;