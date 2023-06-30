import './sidebarTop10Component.scss'

const SidebarTop10Atom = (props) => {
    return (
      <div className="top10CardContainer">
        <div className = "top10FlagName">
          <img src={props.top10Flag} className="flagStyle"alt="flag"></img>
          <p className="top10CountryId">{props.country10Name}</p>
        </div>
        <p className="top10DataId">{props.country10Data}</p>
      </div>
    );
}
export default SidebarTop10Atom