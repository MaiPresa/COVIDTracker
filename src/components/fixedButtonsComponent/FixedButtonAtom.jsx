export default function fixedButtonAtom(props) {
    return(
        <a href="https://factoriaf5.org/" rel="noreferrer" target="_blank">
            <button className={props.className}>
                <img src={props.img} alt={props.alt} />
            </button>
        </a>
    )  
}