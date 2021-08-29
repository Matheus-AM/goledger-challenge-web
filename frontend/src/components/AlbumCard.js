import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

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
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {props.album.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {author.name}
                        </Typography>
                        <Typography>
                            {'Genre: ' + props.album.genre}
                        </Typography>
                        <Typography>
                            {'Tracks: ' + props.album.nTracks}
                        </Typography>
                        <Typography>
                            {'Release year: ' + props.album.year}
                        </Typography>
                        <Typography>
                            {'Streaming plataforms:'}
                        </Typography>
                        {streamings.map((s, index)=>(
                        <Typography key={index}>
                            {s.name}
                        </Typography>
                        ))}
                        
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleExpandClick} size="small">Learn More</Button>
                    </CardActions>
                    {expanded ? (
                        <CardContent>
                            <Typography >
                                {'Author: ' + author.name}
                            </Typography>
                            <Typography >
                                {'Nationality: ' + author.location}
                            </Typography>
                            <Typography >
                                {'About: ' + author.description}
                            </Typography>
                        </CardContent>
                     ) : (
                         <>
                         </>
                         )}
                </Card>
            )
                : (<></>)
            }
        </>
    );
}

export default AlbumCard;