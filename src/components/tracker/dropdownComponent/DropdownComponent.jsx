import axios from 'axios'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './dropdownComponent.scss'

export function DropdownComponent(){

    const countryTotalCases = document.getElementById('countryTotalCases')
    const countryDeaths = document.getElementById('countryDeaths');
    const countryRecovered = document.getElementById('countryRecovered');
    const countryActive = document.getElementById('countryActive');
    const countryNewCases = document.getElementById('countryNewCases');
    const countryNewDeaths = document.getElementById('countryNewDeaths');
    const globalCases = document.getElementById('globalCases');
    const globalRecovered = document.getElementById('globalRecovered');
    const globalDeaths = document.getElementById('globalDeaths');
    const globalNewDeaths = document.getElementById('globalNewDeaths');

    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const request = (param) => {
        const url = `https://disease.sh/v3/covid-19/${param}`;

        axios.get(url)
            .then(res => {
                    if(param === 'countries'){
                        const countryList = res.data;
                        countryList.forEach(element => {
                            if(element.country === country){
                                countryTotalCases.innerHTML = element.cases;
                                countryDeaths.innerHTML = element.deaths;
                                countryRecovered.innerHTML = element.recovered;
                                countryActive.innerHTML = element.active;
                                countryNewCases.innerHTML = element.todayCases;
                                countryNewDeaths.innerHTML = element.todayDeaths;
                            }
                        });
                    }else if(param=== 'all'){
                        const all = res.data;
                        globalCases.innerHTML = all.cases;
                        globalRecovered.innerHTML = all.recovered;
                        globalDeaths.innerHTML = all.deaths;
                        globalNewDeaths.innerHTML = all.todayDeaths;
                    }
                    
                }
            )
            .catch(err => console.log(err))
        
    }

    request('countries');
    request('all');

    

    

    return (
        <>
        <Box className="dropdownSection">
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select className='dropdown'
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
            <p id="lastUpdate">Updated: June 27, 2023</p>
        </Box>
        </>
    );
}


