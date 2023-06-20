import FixedButtonAtom from "./FixedButtonAtom"
import share from '../../assets/icons/share.png'
import support from '../../assets/icons/online-support.png'
import cart from '../../assets/icons/shopping-cart.png'
import './fixedButtonsComponent.scss'

export default function FixedButtonsComponent(){
    return(
        <div className="fixedButtonsBox">
            <FixedButtonAtom className='fixedButtons shareButton' img={share} alt='Share button.'></FixedButtonAtom>
            <FixedButtonAtom className='fixedButtons supportButton' img={support} alt='Support button.'></FixedButtonAtom>
            <FixedButtonAtom className='fixedButtons cartButton' img={cart} alt='Cart button.'></FixedButtonAtom>
        </div>
    )
}