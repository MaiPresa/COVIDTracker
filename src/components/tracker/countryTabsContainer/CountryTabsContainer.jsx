import {CountryTabComponent} from '../countryTabsComponent/CountryTabComponent';
import { useEffect, useState } from 'react';
import './countryTabsContainer.scss'
import APIservice from '../../../services/APIservice';

export const CountryTabsContainer = () => {
   
    const url ='https://disease.sh/v3/covid-19/countries?sort=cases';

    let topTen = APIservice(url);
    if(topTen){topTen = topTen.slice(0,10)}

    const countryTotalCases = document.getElementById('countryTotalCases')
    const countryDeaths = document.getElementById('countryDeaths')
    const countryRecovered = document.getElementById('countryRecovered')
    const countryActive = document.getElementById('countryActive')
    const countryNewCases = document.getElementById('countryNewCases')
    const countryNewDeaths = document.getElementById('countryNewDeaths')

    const [country, setCountry] = useState(0)

    const handleTabClick = (index) => {
      setCountry(index)
    }

    useEffect(() => {
      if(topTen){
        countryTotalCases.innerHTML = topTen[country].cases;
        countryDeaths.innerHTML = topTen[country].deaths;
        countryRecovered.innerHTML = topTen[country].recovered;
        countryActive.innerHTML = topTen[country].active;
        countryNewCases.innerHTML = topTen[country].todayCases;
        countryNewDeaths.innerHTML = topTen[country].todayDeaths;
      }
      
    }, [country, topTen]);

    return(
        <div id="tabsContainer">
            {
              topTen && topTen.map((tab,index)=>{
                return(
                    <CountryTabComponent onClick={()=>handleTabClick(index)} key={index} value={tab.country} countryFlag={tab.countryInfo.flag} country={tab.country}></CountryTabComponent>
                )
              })  
            }
            
        </div>
    )
}
