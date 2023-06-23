import "./countryCardsComponent.scss";

const CountryCardAtom = (props) => {
  return (
    <div className={props.style}>
      <h4 className="countryCardTitle">{props.countryCardTitle}</h4>
      <hr />
      <img
        className="imgStyle"
        src={props.countryCardImage}
        alt="corona virus icon"
      />
      <p className={props.countryCardDataId}>1113333</p>
    </div>
  );
};
export default CountryCardAtom;
