import "./Banner.scss";

export const Banner = (props) => {
    return(
        <div className="landingBanner">
            <div className={props.order}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                {props.children}
            </div>
            <div>
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}