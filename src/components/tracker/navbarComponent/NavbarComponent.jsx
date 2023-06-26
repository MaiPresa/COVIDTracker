import "./navbarComponent.scss";
import { NavButtonAtom } from "./NavButtonAtom";
import logo from "../../../assets/images/coronavirus.png";

export function NavbarComponent() {
  return (
    <>
      <nav>
        <img src={logo} alt="Covid Tracker logo." className="logo rotating" />

        <div id="buttonGroupTracker">
          <NavButtonAtom
            href="/stats"
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
            href="/stats"
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
