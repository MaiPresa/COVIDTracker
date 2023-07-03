import "./FirstViewOutlet.scss";

import CountryCardsComponent from '../../../components/tracker/countryCardsComponent/CountryCardsComponent';
import GlobalCardContainer from '../../../components/tracker/globalCardContainer/GlobalCardContainer';
import {DropdownComponent} from '../../../components/tracker/dropdownComponent/DropdownComponent';

import dummyMap from './../../../assets/images/dummy-map.jpg';


export const FirstViewOutlet = () => {
    return(
        <div id="global">
            <DropdownComponent />
            <hr />
            <CountryCardsComponent />
            <img src={dummyMap} alt="Mapa del Mundo" id="worldMap" />
            <GlobalCardContainer />
        </div>

    )
}
