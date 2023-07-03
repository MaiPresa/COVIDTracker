import "./sidebarGlobalContainer.scss";
import "../../../styles/_loadings.scss"
import SidebarGlobalComponent from "../sidebarGlobalComponent/SidebarGlobalComponent";
import axios from "axios";
import * as React from "react";

const globalSidebarCards = [
  {
    title: "Total cases",
    class: "totalGlobal",
    dataKey: "cases",
  },
  {
    title: "Total Active",
    class: "totalActive",
    dataKey: "active",
  },
  {
    title: "Total Recovered",
    class: "totalRecovered",
    dataKey: "recovered",
  },
  {
    title: "Total Deaths",
    class: "totalDeaths",
    dataKey: "deaths",
  },
];
const getValueFromObject = (key, object) => {
  return (object && object[key]) || null;
};

function SidebarGlobalContainer({ props }) {
  const [loading, setLoading] = React.useState(true);
  const [covidData, setCovidData] = React.useState([]);
  React.useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/all";

    axios.get(url)
      .then((res) => {
        console.log(res)
        setCovidData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <div className="loader-container lds-ripple"><div></div><div></div></div>}
      {!loading && (
        <div className="sidebarGlobalContainer">
          {globalSidebarCards.map((card, index) => {
            return (
              <SidebarGlobalComponent
                key={index}
                class={card.class}
                sidebar_title={card.title}
                amount={getValueFromObject(card.dataKey, covidData)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default SidebarGlobalContainer;
