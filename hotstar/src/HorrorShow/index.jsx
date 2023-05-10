import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import HoorerCard from "./HoorerCard";

const HorrerShow = [
    {
        image1:"https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
        image2:"https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
        image3:"https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    },
    {
        image1:"https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
        image2:"https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
        image3:"https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
    {
        image1:"https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
        image2:"https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
        image3:"https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    },
    {
        image1:"https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
        image2:"https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
        image3:"https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
    {
        image1:"https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
        image2:"https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
        image3:"https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    },
    {
        image1:"https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
        image2:"https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
        image3:"https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
   
]

const HorrorShow = () => {
  return (
    <Fragment>
      <div style={{ background: "#191c29",border:"0px solid red",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"-20px"}}>
        <Typography variant="h5" style={{width:"98%",border:"0px solid green",color:"white",marginLeft:"30px",margin:"10px",textAlign:"start",marginBottom:"20px"}}>Horror Show</Typography>
        <div style={{border:"0px solid green",width:"98%",display:"flex",justifyContent:"center",gap:"56px"}}>
            {
                HorrerShow.map((data)=>{
                    return(
                        <Fragment>
                            <HoorerCard CardData = {data}/>
                        </Fragment>
                    )
                })
            }
        </div>
      </div>
    </Fragment>
  );
};
export default HorrorShow;
