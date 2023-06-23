import './countryCardsComponent.scss'
import CountryCardAtom from './CountryCardAtom';
import card1Img from '../../../assets/icons/covid-defult.svg'
import card2Img from "../../../assets/icons/covid-red.svg";
import card3Img from "../../../assets/icons/covid-green.svg";
import card4Img from "../../../assets/icons/covid-blue.svg";
import card5Img from "../../../assets/icons/covid-orange.svg";
import card6Img from "../../../assets/icons/covid-redark.svg";

const CountryCardsComponent = () => {
  return (
    <div className="countryCardsContainer">
      <CountryCardAtom
        countryCardTitle={"Total Cases"}
        countryCardImage={card1Img}
        countryCardDataId="countryTotalCases"
      />
      <CountryCardAtom
        countryCardTitle={"Total Deaths"}
        countryCardImage={card2Img}
        countryCardDataId="countryDeaths"
      />
      <CountryCardAtom
        countryCardTitle={"Total Recovered"}
        countryCardImage={card3Img}
        countryCardDataId="countryRecovered"
      />
      <CountryCardAtom
        countryCardTitle={"Total Active"}
        countryCardImage={card4Img}
        countryCardDataId="countryActive"
      />
      <CountryCardAtom
        countryCardTitle={"New Cases"}
        countryCardImage={card5Img}
        countryCardDataId="countryNewCases"
      />
      <CountryCardAtom
        countryCardTitle={"New Deaths"}
        countryCardImage={card6Img}
        countryCardDataId="countryNewDeaths"
      />
    </div>
  );
};
export default CountryCardsComponent;
