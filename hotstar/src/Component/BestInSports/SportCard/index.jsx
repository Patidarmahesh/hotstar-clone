import React, { Fragment } from "react";
import { Card } from "@nextui-org/react";


const SportCard = (props) => {
    const {image} = props.CardData;
  return (
    <Fragment>
      <Card
        style={{
          maxWidth: "234px",
          maxHeight: "140px",
          border: "0px solid red",
          borderRadius: "4px",
        }}
      >
        <img
          src={image}
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "0rem",
          }}
        />
      </Card>
    </Fragment>
  );
};
export default SportCard;
