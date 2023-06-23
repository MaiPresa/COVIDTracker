import "./Btn.scss";
import ButtonBase from '@mui/material/ButtonBase';

export const Btn = (props) => {
    return (
        <ButtonBase className={props.btnType}>
            {props.children}
        </ButtonBase>
    )
}