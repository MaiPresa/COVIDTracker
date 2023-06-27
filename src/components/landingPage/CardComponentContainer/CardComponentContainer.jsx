import CardComponent from "../cardComponent/CardComponent";
import barsIcon from "../../../assets/images/bars-icon.png"
import boxIcon from "../../../assets/images/box-icon.png";
import padlockIcon from "../../../assets/images/pandlock-icon.png";
import "./cardComponentContainer.scss";

function CardComponentContainer() {
  return (
    <>
      <div className="cardContainer">
        <CardComponent
        icon={barsIcon}
        iconStyle="bars-icon"
          title="Cough"
          description="Coughing is another key symptom, but it's not just any cough, said Schaffner.
        It should be a dry cough that you feel in your chest"
        />
        <CardComponent
          icon={boxIcon}
          iconStyle="box-icon"
          title="Difficulty Breathing"
          description="Shortness of breath can be a third --and very serious--manifestation
        of Covid-19, and it can be occur on it's own, without a cough"
        />
        <CardComponent
          icon={padlockIcon}
          iconStyle="padlock-icon"
          title="Fever"
          description="Fever is a key symptom, experts say. Don´t fixate on a number, but know it's
        really not a fever until your temperature reaches at least 100"
        />
      </div>
    </>
  );
}

export default CardComponentContainer;
