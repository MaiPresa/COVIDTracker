import "./SidebarContainer.scss";

import SidebarGlobalContainer from "../globalCardContainer/GlobalCardContainer";
import SidebarTop10Component from "../sidebarComponent/SidebarTop10Component";


export const SidebarContainer = () => {
    return(
        <aside className="SidebarContainer">
            <h2>COVID-19 Tracker</h2>
            <SidebarGlobalContainer/>

            <p className="sidebarSecondTitle">Top 10 Country</p>
            <SidebarTop10Component/>

        </aside>
    )
}