import "./sidebarTop10Component.scss";
import APIservice from "../../../services/APIservice";
import SidebarTop10Atom from "./SidebarTop10Atom";


const SidebarTop10Component = () => {
  
  const url ='https://disease.sh/v3/covid-19/countries?sort=cases';
  let topTen = APIservice(url);

    if(topTen){topTen = topTen.slice(0,10)}
  console.log(topTen)

  
  return (
    <>
      <div className="sidebarTop10Container">
        {topTen && topTen.map((card, index)=>{
          return (
            <SidebarTop10Atom
              key={index}
              top10Flag={card.countryInfo.flag}
              country10Name={card.country}
              country10Data={card.cases}
            />
          );
        })}
      </div>
    </>
  )
}
export default SidebarTop10Component;
