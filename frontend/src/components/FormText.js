import { FormControl, Input, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 300,
  },

}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function FormText(props) {
  const classes = useStyles();

  const [elements, setElements] = useState([]);

  useEffect(()=>{
    if(props.elements) setElements(props.elements)
  }, [props.elements])

  const handleChange = (event) => {
    props.change(event.target.value);
  };


  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Select
          value={props.value}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {elements.map((name, index) => (
            <MenuItem key={index} value={name} >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FormText;