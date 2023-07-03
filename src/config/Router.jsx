import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "../pages/landingPage/LandingPage";
import { TrackerGlobalPage } from "../pages/tracker/TrackerGlobalPage";
import { FirstViewOutlet } from "../pages/tracker/firstViewOutlet/FirstViewOutlet";
import { FourthViewOutlet } from "../pages/tracker/fourthViewOutlet/FourthViewOutlet";


export const Router = () => {
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} ></Route>
                <Route path="/tracker" element={<TrackerGlobalPage/>}>
                    <Route path="/tracker/" element={<FirstViewOutlet/>}></Route>
                    <Route path="/tracker/tabs/" element={<FourthViewOutlet/>}></Route>
                </Route>
            </Routes>
       </BrowserRouter>
    )
}