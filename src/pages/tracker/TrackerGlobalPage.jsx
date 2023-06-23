import {NavbarComponent} from '../../components/tracker/navbarComponent/NavbarComponent';
import {DropdownComponent} from '../../components/tracker/dropdownComponent/DropdownComponent';
import GlobalCardContainer from '../../components/tracker/globalCardContainer/GlobalCardContainer'

import './trackerGlobalPage.scss';

export function TrackerGlobalPage(){
    return(
        <>
            <div id="trackerGlobalPage">

                <NavbarComponent />

                <div id="global">
                    <DropdownComponent />
                    <hr />
                    <GlobalCardContainer />
                </div>

            </div>
        </>
    )
}
