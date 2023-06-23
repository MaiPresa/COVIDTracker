import "./countryCardsComponent.scss";

const CountryCardAtom = (props) => {
  return (
    <div className='cardAtom'>
      <h4 className= 'countryCardTitle'>{props.countryCardTitle}</h4>
      <hr className="cardBar"/>
      <img
        className="imgStyle"
        src={props.countryCardImage}
        alt="corona virus icon"
      />
      <p className={props.countryCardDataId}></p>
    </div>
  );
};
export default CountryCardAtom;
