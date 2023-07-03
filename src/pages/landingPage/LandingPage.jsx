import "./LandingPage.scss";

import {NavBar} from "../../components/landingPage/navBar/NavBar";
import { Btn } from "../../components/landingPage/button/Btn";
import { Banner } from "../../components/landingPage/banner/Banner";
import FixedButtonsComponent from "../../components/landingPage/fixedButtonsComponent/FixedButtonsComponent";
import LogosBannerComponent from "../../components/landingPage/logosBannerComponent/LogosBannerComponent";
import CardComponentContainer from "../../components/landingPage/CardComponentContainer/CardComponentContainer";
import Footer from "../../components/landingPage/footer/Footer";

import bannerImage from "../../assets/images/phones.png";
import secondBannerImage from "../../assets/images/mobiles.png";


export const LandingPage = () => {
    return(
        <>
            <NavBar/>
            <header className="landingHeader">
                <Banner 
                    title={["Download the Covid", <br/>, "App for get latest", <br/>, "update"]}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula 
                    est id purus facilisis, eu vestibulum quam tempus. Proin tristique odio a velit 
                    congue porta. In maximus ante sit amet diam viverra commodo. Donec sagittis placerat 
                    dui et sollicitudin." 
                    image={bannerImage}>
                    <Btn btnType="btnSecondary">HOW TO PROTECT</Btn>
                </Banner>
                <FixedButtonsComponent/>
            </header>

            <section className="logosSection">
                <LogosBannerComponent/>
            </section>

            <section className="landingFirstSection">
                <p>App feature</p>
                <h2>Basic Feature You Will Get<br/>When You Use</h2>
                <CardComponentContainer/>
            </section>

            <section className="landingSecondSection">
                <Banner 
                    title={["Stay Home, And", <br/>, "Prayer For Victim"]}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula 
                    est id purus facilisis, eu vestibulum quam tempus. Proin tristique odio a velit 
                    congue porta. In maximus ante sit amet diam viverra commodo. Donec sagittis placerat 
                    dui et sollicitudin."
                    image={secondBannerImage}
                    order = "landingBannerOrder">
                    <Btn btnType="btnSquarePrimary">DOWNLOAD NOW</Btn>
                </Banner>
            </section>
            <Footer/>
        </>

    )
}