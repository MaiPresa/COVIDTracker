import './logosBannerStyle.css'

import logo2 from '../../assets/images/b-2.png'
import logo3 from '../../assets/images/b-3.png'
import logo4 from '../../assets/images/b-4.png'
import logo5 from '../../assets/images/b-5.png'
import logo6 from '../../assets/images/b-6.png'


const LogosBanner = () => {
    return (
      <div className="logosContainer">
        <img src={logo2} className="logoItem" alt="Time logo"/>
        <img src={logo3} className="logoItem" alt="Ocean logo"/>
        <img src={logo4} className="logoItem" alt="Albero logo"/>
        <img src={logo5} className="logoItem" alt="Dora logo"/>
        <img src={logo6} className="logoItem" alt="Green Turtle logo"/>
      </div>
    );
};

export default LogosBanner