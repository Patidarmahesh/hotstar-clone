import React, { Fragment } from "react";
import Navbar from "../Layout/Navbar";

const MainLayOut = ({children})=>{
    return(
        <Fragment>
            <Navbar/>
            {children}
        </Fragment>
    )
}
export default MainLayOut;