
const SidebarTop10Atom = (props) => {
    return (
      <div className="top10CardContainer">
        <div className = "top10FlagName">
          <img src={props.top10Flag} className="flagStyle"alt=""></img>
          <p className={props.top10CountryId}>USA</p>
        </div>
        <p className={props.top10DataId}>3344564</p>
      </div>
    );
}
export default SidebarTop10Atom