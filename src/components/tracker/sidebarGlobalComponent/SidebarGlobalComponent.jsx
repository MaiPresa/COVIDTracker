import './sidebarGlobalComponent.scss'

function SidebarGlobalComponent(props) {
  return (
    <>
      <div className={'sidebarGlobalCard '+props.class}>
        <p className='sidebarGlobalTitle'>{props.sidebar_title}</p>
        <p className='sidebarGlobalNumber'>{props.amount}</p>
      </div>
    </>
  );
}

export default SidebarGlobalComponent;
