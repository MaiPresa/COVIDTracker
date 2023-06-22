import GlobalCardComponent from "../globalCardComponent/GlobalCardComponent";
import "./globalCardContainer.scss";
import covidBlack from "../../../assets/images/covid-defult.svg";
import covidGreen from "../../../assets/images/covid-green.svg";
import covidRed from "../../../assets/images/covid-red.svg";
import covidRedDark from "../../../assets/images/covid-redark.svg";

function GlobalCardContainer() {
  <div className="globalCardContainer">
    <GlobalCardComponent covidIcon={covidBlack} globalTitle="Total Confirmed" />
    <GlobalCardComponent covidIcon={covidGreen} globalTitle="Total Recovered" />
    <GlobalCardComponent covidIcon={covidRed} globalTitle="Total Deaths" />
    <GlobalCardComponent covidIcon={covidRedDark} globalTitle="New Deaths" />
  </div>;
}

export default GlobalCardContainer;
