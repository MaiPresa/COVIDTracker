import {NavbarComponent} from '../../components/tracker/navbarComponent/NavbarComponent';
import {DropdownComponent} from '../../components/tracker/dropdownComponent/DropdownComponent';
import CountryCardsComponent from '../../components/tracker/countryCardsComponent/CountryCardsComponent';
import GlobalCardContainer from '../../components/tracker/globalCardContainer/GlobalCardContainer'



import './trackerGlobalPage.scss';

import dummyMap from './../../assets/images/dummy-map.jpg';

export function TrackerGlobalPage(){
    return(
        <>
            <div id="trackerGlobalPage">

                <NavbarComponent />

                <div id="global">
                    <DropdownComponent />
                    <hr />
                    <CountryCardsComponent />
                    <img src={dummyMap} alt="Mapa del Mundo" id="worldMap" />
                    <GlobalCardContainer />
                </div>

            </div>
        </>
    )
}
