import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, FormControlLabel, Switch, TextField, Typography } from '@material-ui/core';
import FormText from './FormText';

const useStyles = makeStyles((theme) => ({
  root: {
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

function LabelFilter(props) {
  const classes = useStyles();
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [obj, setObj] = useState({});

  useEffect(()=> {
    setContent(props.content);
  }, [props.content]);

  useEffect(()=> {
    setValue(props.value);
  }, [props.value]);

  useEffect(()=> {
    setType(props.type);
  }, [props.type]);

  useEffect(()=> {
    setObj(props.obj);
  }, [props.obj]);



  if(type === 'string')
    return (
      <Box >
        <Box display='flex' justifyContent='center' alignItems='flex-end'>
          <Typography className={classes.titleBox} >{content}</Typography>
          <TextField value={value}  className={classes.textBox} label="New" variant="outlined" />
        </Box>
      </Box>
    );
  else if(type === 'int')
    return (
      <Box >
        <Box display='flex' justifyContent='center' alignItems='flex-end'>
          <Typography className={classes.titleBox} >{content}</Typography>
          <TextField type='number' value={value}  className={classes.textBox} label="New" variant="outlined" />
        </Box>
      </Box>
    );
  else if(type === 'boolean')
    return (
      <Box >
        <Box display='flex' justifyContent='center' alignItems='flex-end'>
          <FormControlLabel
          value="start"
          control={<Switch value={value} color="primary" />}
          label={content}
          labelPlacement="start"
        />
        </Box>
      </Box>
    )
  else if(type === 'object') {
    <Box display='flex' alignItems='center' justifyContent='center' >
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography>Actions</Typography>
                <FormText  />
              </Box>
            </Box>
  }
  else
  return(
    <></>
  )
}

export default LabelFilter;