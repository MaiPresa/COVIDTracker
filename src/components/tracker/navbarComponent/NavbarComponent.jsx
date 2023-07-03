import "./navbarComponent.scss";
import { Link } from "react-router-dom";

import { NavButtonAtom } from "./NavButtonAtom";
import logo from "../../../assets/images/coronavirus.png";


export function NavbarComponent() {
  return (
    <>
      <nav className="trackerNav">
        <Link to="/"><img src={logo} alt="Covid Tracker logo." className="logo rotating" /></Link>

        <div id="buttonGroupTracker">
          <NavButtonAtom
            href="/tracker"
            className="navbarTrackerButton statsButton"
            linkClass="buttonLink"
          />
          <NavButtonAtom
            href="/stats"
            className="navbarTrackerButton optButton"
          />
          <NavButtonAtom
            href="/stats"
            className="navbarTrackerButton chartButton"
            invisible={true}
          />
          <NavButtonAtom
            href="/tracker/tabs"
            className="navbarTrackerButton folderButton"
            invisible={true}
          />
          <NavButtonAtom
            href="/stats"
            className="navbarTrackerButton stackButton"
            invisible={true}
          />
          <NavButtonAtom
            href="/stats"
            className="navbarTrackerButton graphButton"
            invisible={true}
          />
          <NavButtonAtom
            href="/stats"
            className="navbarTrackerButton globalButton"
            invisible={true}
          />
          <NavButtonAtom
            href="/stats"
            className="navbarTrackerButton newsButton"
            invisible={true}
          />

        </div>
        <NavButtonAtom href="/stats" id="infoButtonDiv" className="infoButton" invisible={true} />
      </nav>
    </>
  );
}
