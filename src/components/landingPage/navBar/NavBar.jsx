import "./NavBar.scss";
import * as React from 'react';
import { Link } from "react-router-dom";

import landingLogo from "../../../assets/images/logo.png";
import { Btn } from "../../button/Btn";
import { NavButtons } from "../navBarButtons/NavButtons";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import arrowDown from "../../../assets/icons/caret-down-fill.svg";
import list from "../../../assets/icons/list.svg";

export const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <nav className="landingNav">
            <div className="landingMenuContainer">
                <img src={landingLogo} alt="COVIMAP logo" />
                <ul className="landingBtnContainer">
                    
                    <NavButtons>Home <img src={arrowDown} alt="Home dropdown" /> </NavButtons>
                    <NavButtons>Prevention</NavButtons>
                    <NavButtons>Quarantine</NavButtons>
                    <NavButtons>Pages <img src={arrowDown} alt="Pages dropdown" /></NavButtons>
                    <NavButtons>About</NavButtons>
                    <NavButtons>Help</NavButtons>
                    <Link to="/tracker"><Btn btnType="btnPrimary">Tracker</Btn></Link>

                </ul>
                <div className="landingMobileContainer">
                    <div
                        id="basic-div"
                        onClick={handleClick}
                    >
                        <img src={list} alt="list menu" className="landingList"/>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><NavButtons>Home <img src={arrowDown} alt="Home dropdown" /> </NavButtons></MenuItem>
                        <MenuItem onClick={handleClose}><NavButtons>Prevention</NavButtons></MenuItem>
                        <MenuItem onClick={handleClose}><NavButtons>Quarantine</NavButtons></MenuItem>
                        <MenuItem onClick={handleClose}><NavButtons>Pages <img src={arrowDown} alt="Pages dropdown" /></NavButtons></MenuItem>
                        <MenuItem onClick={handleClose}><NavButtons>About</NavButtons></MenuItem>
                        <MenuItem onClick={handleClose}><NavButtons>Help</NavButtons></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/tracker"><Btn btnType="btnPrimary">Tracker</Btn></Link></MenuItem>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}