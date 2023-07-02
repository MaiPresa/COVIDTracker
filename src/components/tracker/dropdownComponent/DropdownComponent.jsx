import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './dropdownComponent.scss'
import APIservice from '../../../services/APIservice'



export function DropdownComponent(){

    const urlCountryList ='https://disease.sh/v3/covid-19/countries'
    let countryList = APIservice(urlCountryList)

    const countryTotalCases = document.getElementById('countryTotalCases')
    const countryDeaths = document.getElementById('countryDeaths')
    const countryRecovered = document.getElementById('countryRecovered')
    const countryActive = document.getElementById('countryActive')
    const countryNewCases = document.getElementById('countryNewCases')
    const countryNewDeaths = document.getElementById('countryNewDeaths')

    const [country, setCountry] = useState('null')

    const handleChange = (event) => {
        setCountry(event.target.value)
    };

    const request = (param) => {
        const countryUrl = `https://disease.sh/v3/covid-19/countries/${param}?strict=true`;
        let data = APIservice(countryUrl);
        if(data){
            countryTotalCases.innerHTML = data.cases;
            countryDeaths.innerHTML = data.deaths;
            countryRecovered.innerHTML = data.recovered;
            countryActive.innerHTML = data.active;
            countryNewCases.innerHTML = data.todayCases;
            countryNewDeaths.innerHTML = data.todayDeaths;
        }
    } 
    
    request(country)

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
                    {countryList && countryList.map((country,index)=>{
                        return(
                            <MenuItem key={index} value={country.country}>{country.country}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <p id="lastUpdate">Updated: June 27, 2023</p>
        </Box>
        </>
    );
}


