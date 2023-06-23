import './globalCardComponent.scss'

function GlobalCardComponent(props) {
  return (
    <>
      <div className='globalCard'>
        <div className='globalIcon'>
        <img src={props.covidIcon} className='covidIcon'/>
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
