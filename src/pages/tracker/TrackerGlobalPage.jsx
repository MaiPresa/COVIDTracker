import './trackerGlobalPage.scss';

import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import {NavbarComponent} from '../../components/tracker/navbarComponent/NavbarComponent';
import {SidebarContainer} from "../../components/tracker/sidebarContainer/SidebarContainer";


export function TrackerGlobalPage(){
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return ()  => { 
        window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])
    return(
        <>
            <div id="trackerGlobalPage">

                <NavbarComponent />
                {width >= 768 && <SidebarContainer/>}

            </div>

            <main className='trackerOutlet'>
                <Outlet/>
            </main>
        </>
    )
}
