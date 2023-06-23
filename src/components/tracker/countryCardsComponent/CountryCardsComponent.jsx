import './countryCardsComponent.scss'
import CountryCardAtom from './CountryCardAtom';
import card1Img from '../../../assets/icons/covid-defult.svg'

const CountryCardsComponent = (countryCard1, countryAtom) => {
  return (
    <div className='countryCardsContainer'>
      <CountryCardAtom
        style={countryAtom}
        countryCardTitle={"Total Cases"}
        countryCardImage={card1Img}
        countryCardDaId={countryCard1}     />
    </div>
  );
};
export default CountryCardsComponent;
