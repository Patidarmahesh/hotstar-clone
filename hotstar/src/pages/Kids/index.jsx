import React, { Fragment} from "react";
import Carosal from "../../Component/Carosal";
import CardOFCarosaul from "../../Component/carosalCard";
import KidsFeatured from "../../Component/Featured";
import KidsCarosal from "../../Component/KidsCarosal";
import KidsMusic from "../../Component/KidsMusic";
import KidsNoramlCard from "../../Component/KidsNormalCard/inedx";
import KidsSpider from "../../Component/KIdsSpider";
import KidsMagic from "../../Component/Kids_Magic";
import Top_For_Kids from "../../Component/Magic_for_kids";
import MickeyKids from "../../Component/Micky_And_Friend";
import ThrillerShow from "../../Component/ThrillerShow";
import KidsNavbar from "../../Layout/KidsNavnar";

const Kids = ()=>{
    
    return(
        <Fragment>
            <KidsNavbar/>
            <KidsCarosal/>
            <KidsNoramlCard/>
            <Top_For_Kids/>
            <KidsMagic/>
            <KidsFeatured/>
            <KidsSpider/>
            <KidsMusic/>
            <MickeyKids/>
            <MickeyKids/>
        </Fragment>
    )
}
export default Kids;