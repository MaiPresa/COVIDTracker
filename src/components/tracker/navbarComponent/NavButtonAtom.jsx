import * as React from 'react';
import Badge from '@mui/material/Badge';


export function NavButtonAtom(props){
    return(
        <>  
        <div id={props.id}>
            <a href={props.href} rel='noreferrer' >
                <Badge variant="dot" color="error" invisible={props.invisible}>
                    <button className={props.className}></button>
                </Badge>
            </a>
        </div>
        </>
    )
}