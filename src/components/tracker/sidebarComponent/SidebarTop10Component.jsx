import axios from "axios";
import "./sidebarTop10Component.scss";
import { useState } from "react";
import SidebarTop10Atom from "./SidebarTop10Atom";


const SidebarTop10Component = () => {

//   const url = "https://disease.sh/v3/covid-19/countries?sort=cases";

//   function requestTopTen () { axios.get(url)
//     .then((res) => { const topTen=res.data.slice(0, 9);
//       console.log(topTen);
//       return(topTen);
//       })};
//   requestTopTen();
//   return (
//     <div className="sidebarTop10Container">
//       <div className="top10CardContainer">
//         <div className="top10FlagName">
//           <img
//             src={topTen[1].countryInfo.flag}
//             className="flagStyle"
//             alt="flag"
//           ></img>
//           <p className="top10Country">{topTen[1].country}</p>
//         </div>
//         <p className="top10Data">{topTen[1].cases}</p>
//       </div>
//     </div>
//   );
// };
  return (
    <div className="sidebarTop10Container">
      <SidebarTop10Atom
        top10Flag="https://disease.sh/assets/img/flags/us.png"
        top10CountryId="top10Country"
        top10DataId="top10Data"
      
      />

      
    </div>
  )
}
export default SidebarTop10Component;
