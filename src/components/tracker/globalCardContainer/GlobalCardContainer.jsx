import GlobalCardComponent from "../globalCardComponent/GlobalCardComponent";
import "./globalCardContainer.scss";
import covidBlack from "../../../assets/images/covid-defult.svg";
import covidGreen from "../../../assets/images/covid-green.svg";
import covidRed from "../../../assets/images/covid-red.svg";
import covidRedDark from "../../../assets/images/covid-redark.svg";
import telephone from '../../../assets/images/telephone.svg'

function GlobalCardContainer() {
  return (
    <div className="globalCardContainer">
      <GlobalCardComponent covidIcon={covidBlack} globalTitle="Total Confirmed"/>
      <GlobalCardComponent covidIcon={covidGreen} globalTitle="Total Recovered"/>
      <GlobalCardComponent covidIcon={covidRed} globalTitle="Total Deaths" />
      <GlobalCardComponent covidIcon={covidRedDark} globalTitle="New Deaths" />
      <GlobalCardComponent covidIcon={telephone} globalTitle="Help Line No." info="198" />

    </div>
  );
}

export default GlobalCardContainer;
