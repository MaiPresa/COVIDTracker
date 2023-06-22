export function GlobalCardComponent(props) {
    return(
        <>
            <img src={props.covidIcon} />
            <h3>{props.globalTitle}</h3>
            <p id={props.globalId}></p>
        </>
    )
}