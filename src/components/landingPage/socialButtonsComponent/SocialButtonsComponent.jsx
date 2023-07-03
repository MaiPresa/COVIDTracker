import FixedButtonAtom from "../fixedButtonsComponent/FixedButtonAtom";
import "./socialButtonsComponent.scss"
import "../fixedButtonsComponent/fixedButtonsComponent.scss"
import facebook from '../../../assets/icons/facebook.png'
import twitter from '../../../assets/icons/twitter.png'
import linkedin from '../../../assets/icons/linkedin.png'
import youtube from '../../../assets/icons/social.png'

export default function SocialButtonsComponent(){
    return(
        <div className="socialButtonsBox">
            <FixedButtonAtom className="fixedButtons socialButtons facebookIcon" img={facebook} alt="Facebook Icon."></FixedButtonAtom>
            <FixedButtonAtom className="fixedButtons socialButtons twitterIcon" img={twitter} alt="Facebook Icon."></FixedButtonAtom>
            <FixedButtonAtom className="fixedButtons socialButtons linkedinIcon" img={linkedin} alt="Facebook Icon."></FixedButtonAtom>
            <FixedButtonAtom className="fixedButtons socialButtons youtubeIcon" img={youtube} alt="Facebook Icon."></FixedButtonAtom>
        </div>
        
    )
}