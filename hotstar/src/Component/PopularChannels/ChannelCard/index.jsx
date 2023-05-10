import React, { Fragment } from "react";
import { Card } from "@mui/material";
import "./channels.css";

const ChannelCard = (props) => {
  const { image } = props.CardData;
  return (
    <Fragment>
      <Card className="hellow_hover">
        <img
          src={image}
          style={{
            width: "100%",
            height: "140px",
            borderRadius: "4px",
          }}
        />
      </Card>
    </Fragment>
  );
};
export default ChannelCard;
