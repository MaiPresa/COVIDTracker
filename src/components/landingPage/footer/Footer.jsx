import "./footer.scss";
import FooterComponent from "../footerComponent/FooterComponent";
import logoBlanco from "../../../assets/images/logo-white.png";
import SocialButtonsComponent from "../../socialButtonsComponent/SocialButtonsComponent";
import copyright from "../../../assets/icons/copyright.png";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerOptionsContainer">
          <div className="footerLogoContainer">
            <img src={logoBlanco} alt="" />
            <p className="footerLogoText">
              These droplets can land on objects and surfaces around the person
              such as tables, doorknoobs and handtrails.
            </p>
            <SocialButtonsComponent />
          </div>
          <FooterComponent
            optionTitle="Quic Links"
            optionDetail1="Prevention"
            optionDetail2="Quarantine"
            optionDetail3="About"
            optionDetail4="Help"
          />
          <FooterComponent
            optionTitle="About"
            optionDetail1="Hand Wash"
            optionDetail2="Social Distance"
            optionDetail3="Isolate"
            optionDetail4="Diference"
          />
          <FooterComponent
            optionTitle="Resources"
            optionDetail1="Application"
            optionDetail2="Documentation"
            optionDetail3="Systems"
            optionDetail4="FAQ"
          />
          <FooterComponent
            optionTitle="Help"
            optionDetail1="About us"
            optionDetail2="Blog"
            optionDetail3="Partnership"
            optionDetail4="Press"
          />
        </div>
        <hr className="footerDivision" />
        <div className="copyrightFooter">
          <p>
            {" "}
            <img src={copyright} /> Copyright 2023.All Rights Reserved
          </p>
          <p>
            Designed by <strong>UNDEFINED TEAM</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
