import React, { Fragment } from "react";
import { Card } from "@nextui-org/react";
import { Typography } from "@mui/material";

const LatestCard = (props) => {
  const { image ,heading} = props.CardData;
  return (
    <Fragment>
        <div class="card">
          <div class="slide slide1">
            <div class="content">
              <div class="icon">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  color={"white"}
                  style={{ textDecoration: "underline" }}
                >
                  {heading}
                </Typography>
                <Typography color={"gold"} style={{ textAlign: "center" }}>
                  Hotstar Special Aarya Season 2 Please CheckOut..
                </Typography>
              </div>
            </div>
          </div>
          <div class="slide slide2">
            <div class="content">
              <img src={image} style={{borderRadius:"4px"}}/>
            </div>
          </div>
        </div>
    </Fragment>
  );
};
export default LatestCard;
