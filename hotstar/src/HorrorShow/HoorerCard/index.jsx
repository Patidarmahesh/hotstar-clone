import React, { Fragment } from "react";
import "./card.css";

const HoorerCard = (props) => {
  const { image1, image2, image3 } = props.CardData;
  return (
    <Fragment>
      <div>
        <div
          class="card"
          style={{ background: "#191c29", border: "0px solid gold" }}
        >
          <div className="wrapper">
            <img src={image1} className="cover-image" />
          </div>
          <img src={image2} className="title" />
          <img src={image3} className="character" />
        </div>
      </div>
    </Fragment>
  );
};
export default HoorerCard;
