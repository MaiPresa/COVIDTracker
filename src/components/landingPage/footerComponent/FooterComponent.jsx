import './footerComponent.scss'


function FooterComponent(props){
    return(
        <>
        <div className="footerComponent">
            <p className="footerTitleOption">{props.optionTitle}</p>
            <p className="footerDetail">{props.optionDetail1}</p>
            <p className="footerDetail">{props.optionDetail2}</p>
            <p className="footerDetail">{props.optionDetail3}</p>
            <p className="footerDetail">{props.optionDetail4}</p>


        </div>
        </>
    )
}
export default FooterComponent