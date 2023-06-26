import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "../pages/landingPage/LandingPage";
import { TrackerGlobalPage } from "../pages/tracker/TrackerGlobalPage";



export const Router = () => {
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} ></Route>
                <Route path="/tracker" element={<TrackerGlobalPage/>}></Route>
            </Routes>
       </BrowserRouter>
    )
}