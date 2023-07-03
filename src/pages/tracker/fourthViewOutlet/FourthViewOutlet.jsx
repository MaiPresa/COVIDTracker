import "./fourthViewOutlet.scss";
import { CountryTabsContainer } from "../../../components/tracker/countryTabsContainer/CountryTabsContainer";
import  CountryCardsComponent  from "../../../components/tracker/countryCardsComponent/CountryCardsComponent";

export const FourthViewOutlet = () => {

    

    return(
        <div id="tabs">
            <h1 id='tabsTitle'>Covid-19 Country Wise - Tabs</h1>
            <hr />
            <CountryTabsContainer />
            <CountryCardsComponent />
        
        </div>
    )
}
