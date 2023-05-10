import React, { Fragment } from "react";
import {Routes,Route} from "react-router-dom";
import Disney from "../pages/Disney";
import Home from "../pages/Home";
import Kids from "../pages/Kids";
import Kidsvidios from "../pages/Kids/kidsvidios";
import Bengali from "../pages/Movies/Bengali";
import English from "../pages/Movies/English";
import Hindi from "../pages/Movies/Hindi";
import Japanese from "../pages/Movies/Japanese";
import Korean from "../pages/Movies/Korean";
import Marathi from "../pages/Movies/Marathi";
import Tamil from "../pages/Movies/Tamil";
import Telugu from "../pages/Movies/Telugu";
import AmericianFootBall from "../pages/Sports/Americian Football";
import Cricket from "../pages/Sports/Cricket";
import FootBall from "../pages/Sports/FootBall";
import Formula from "../pages/Sports/Formula";
import Hockey from "../pages/Sports/Hockey";
import Kabaddi from "../pages/Sports/Kabaddi";
import Tennis from "../pages/Sports/Tennis";
import HotstarSpecial from "../pages/Tv/Hotstar Special";
import StarBharat from "../pages/Tv/Star Bharat";
import StarMaa from "../pages/Tv/Star Maa";
import StarVijay from "../pages/Tv/Star Vijay";
import StarPlus from "../pages/Tv/StarPlus";
import V_Day_Special from "../pages/Tv/V_day Special";

const AllRoutes = ()=>{
    return(
        <Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/HotstarSpecial" element={<HotstarSpecial/>}/>
                <Route path="/StarBharat" element={<StarBharat/>}/>
                <Route path="/StarMaa" element={<StarMaa/>}/>
                <Route path="/StarVijay" element={<StarVijay/>}/>
                <Route path="/StarPlus" element={<StarPlus/>}/>
                <Route path="/V_Day_Special" element={<V_Day_Special/>}/>
                <Route path="/Bengali" element={<Bengali/>}/>
                <Route path="/English" element={<English/>}/>
                <Route path="/Hindi" element={<Hindi/>}/>
                <Route path="/Japanese" element={<Japanese/>}/>
                <Route path="/Korean" element={<Korean/>}/>
                <Route path="/Marathi" element={<Marathi/>}/>
                <Route path="/Tamil" element={<Tamil/>}/>
                <Route path="/Telugu" element={<Telugu/>}/>
                <Route path="/AmericianFootBall" element={<AmericianFootBall/>}/>
                <Route path="/Cricket" element={<Cricket/>}/>
                <Route path="/FootBall" element={<FootBall/>}/>
                <Route path="/Formula" element={<Formula/>}/>
                <Route path="/Hockey" element={<Hockey/>}/>
                <Route path="/Kabaddi" element={<Kabaddi/>}/>
                <Route path="/Tennis" element={<Tennis/>}/>
                <Route path="/Kids" element={<Kids/>}/>
                <Route path="/Disney" element={<Disney/>}/>
                <Route path="/Kids/:id" element={<Kidsvidios/>}/>
            </Routes>
        </Fragment>
    )
}
export default AllRoutes;