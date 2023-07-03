import GlobalCardComponent from "../globalCardComponent/GlobalCardComponent";
import "./globalCardContainer.scss";
import covidBlack from "../../../assets/images/covid-defult.svg";
import covidGreen from "../../../assets/images/covid-green.svg";
import covidRed from "../../../assets/images/covid-red.svg";
import covidRedDark from "../../../assets/images/covid-redark.svg";
import telephone from '../../../assets/images/telephone.svg'
import APIservice from "../../../services/APIservice";

function GlobalCardContainer() {
  const globalUrl = 'https://disease.sh/v3/covid-19/all'
  let globalData = APIservice(globalUrl)

    return(
      <div className="globalCardContainer">
        <GlobalCardComponent covidIcon={covidBlack} globalTitle="Total Confirmed" info={globalData && globalData.cases} globalId='globalCases' globalCardClass='commonWidth'/>
        <GlobalCardComponent covidIcon={covidGreen} globalTitle="Total Recovered" info={globalData && globalData.recovered} globalId='globalRecovered' globalCardClass='commonWidth'/>
        <GlobalCardComponent covidIcon={covidRed} globalTitle="Total Deaths" info={globalData && globalData.deaths} globalId='globalDeaths' globalCardClass='commonWidth'/>
        <GlobalCardComponent covidIcon={covidRedDark} globalTitle="New Deaths" info={globalData && globalData.todayDeaths} globalId='globalNewDeaths' globalCardClass='commonWidth'/>
        <GlobalCardComponent covidIcon={telephone} globalTitle="Help Line No." info="198" globalCardClass='fullWidth'/> 
    </div>
    )
}

export default GlobalCardContainer;
