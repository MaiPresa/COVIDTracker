import "./countryTabComponent.scss";

export const CountryTabComponent = (props) => {

    return(
        <div className="tab" value={props.value} key={props.key}>
          <img src={props.countryFlag} className="flagCircle" alt="flag"></img>
          <p className="topTenCountry">{props.country}</p>
        </div>
    )
}
