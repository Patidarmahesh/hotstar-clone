import React, { Fragment } from "react";
import { Card } from "@nextui-org/react";
import { Link } from "react-router-dom";

const KidsCard = (props) => {
    const {image} = props.CardData;
  return (
    
      <Card className="zoom">
        <Link to={`/Kids/${props.CardData.id}`}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "241px",
          }}
        />
         </Link>
      </Card>
  );
};
export default KidsCard;
