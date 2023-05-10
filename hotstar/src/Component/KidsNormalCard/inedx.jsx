import React, { Fragment } from "react";
import KidsCard from "./KidsCard";
import './index.css';

const CardData = [
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1627/651627-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1658/651658-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/3341/653341-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1650/651650-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6715/646715-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1586/651586-r"
    }
]

const KidsNoramlCard = ()=>{
    return(
        <Fragment>
            <div style={{border:"0px solid green",width:"100%",height:"210px",background:"#001233",display:"flex",justifyContent:"center",}}>
                <div style={{border:"0px solid black",width:"95.5%",height:"190px",display:"flex",justifyContent:"space-between"}}>
                    {
                        CardData.map((data)=>{
                            return(
                                <Fragment>
                                    <KidsCard cardValue = {data}/>
                                </Fragment>
                            );
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default KidsNoramlCard;