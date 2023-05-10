import React, { Fragment } from "react";
import { Card } from "@nextui-org/react";

const ThrillerCard = (props) => {
    const {image} = props.CardData;
  return (
    <Fragment>
      <Card className="zoom">
        <img
          src={image}
          style={{
            width: "100%",
            height: "240px",
          }}
        />
      </Card>
    </Fragment>
  );
};
export default ThrillerCard;
