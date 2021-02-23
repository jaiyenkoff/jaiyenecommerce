import React from 'react';
import { Grid, TextField } from '@material-ui/core';


const TextfieldWrapper = ({ handleChange, label, ...otherProps }) => {
  return (
    <Grid item mt={10}>
    <TextField onChange={handleChange} label={label} {...otherProps}  />
    </Grid>
  );
}


export default TextfieldWrapper;