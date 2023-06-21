
import axios from 'axios'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './dropdownComponent.scss'

export function DropdownComponent(){

    const cases = document.getElementById('cases')

    const url = "https://disease.sh/v3/covid-19/countries"
    
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    axios.get(url)
        .then(res => {
                const countryList = res.data;

                countryList.forEach(element => {
                    if(element.country === country){
                        console.log(element)
                        cases.innerHTML = element.cases
                    }
                });
            }
        )
        .catch(err => console.log(err))

    return (
        <>
        <Box sx={{ minWidth: 120,margin:10}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="country"
            onChange={handleChange}
            >
            <MenuItem value={"Spain"}>Spain</MenuItem>
            <MenuItem value={"USA"}>USA</MenuItem>
            <MenuItem value={"Argentina"}>Argentina</MenuItem>
            </Select>
        </FormControl>
        </Box>
        </>
    );
}


