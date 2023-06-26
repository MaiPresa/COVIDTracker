import './globalCardComponent.scss'

function GlobalCardComponent(props) {
  return (
    <>
      <div className={'globalCard '+props.globalCardClass}>
        <div className='globalIcon'>
          <img src={props.covidIcon} className='covidIcon' alt='Covid Icon'/>
        </div>
        <div className="globalData">
          <p className='globalDataTitle'>{props.globalTitle}</p>
          <p id={props.globalId} className='globalIdData'>{props.info}</p>
        </div>
      </div>
    </>
  );
}

export default GlobalCardComponent;
