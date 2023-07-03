import {CountryTabComponent} from '../countryTabsComponent/CountryTabComponent';
import './countryTabsContainer.scss'
import APIservice from '../../../services/APIservice';

export const CountryTabsContainer = () => {
    const url ='https://disease.sh/v3/covid-19/countries?sort=cases';
    let topTen = APIservice(url);

    if(topTen){topTen = topTen.slice(0,10)}
    console.log(topTen)

    return(
        <div id="tabsContainer">
            {
              topTen && topTen.map((key,index)=>{
                return(
                    <CountryTabComponent key={index} value={key.country} countryFlag={key.countryInfo.flag} country={key.country}></CountryTabComponent>
                )
              })  
            }
            
        </div>
    )
}
