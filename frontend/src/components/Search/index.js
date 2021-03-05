import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './style.css';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));
  
// function SimpleSelect() {
//     const classes = useStyles();
//     const [age, setAge] = React.useState('');
  
//     const handleChange = (event) => {
//       setAge(event.target.value);
// };

function Search() {
        return(
            <div>


                <FormControl >
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Category
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        // value={age}
                        // onChange={handleChange}
                        // displayEmpty
                        // className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'10'}>Ten</MenuItem>
                        <MenuItem value={'20'}>Twenty</MenuItem>
                        <MenuItem value={'30'}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
}

export default Search;