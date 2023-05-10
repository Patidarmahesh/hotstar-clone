import { Typography } from "@mui/material";
import React, { Fragment } from "react";

const KidsCard = (props) => {
    const {img} = props.CarosalData;
  return (
    <Fragment>
      <div style={{ border: "0px solid green", width: "40%", height: "390px" }}>
        <Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginTop: "6rem",
            }}
          >
            India Knock Australia Out Cold To Go 0-2 Up
          </Typography>
          <div
            style={{
              border: "0px solid yellow",
              width: "80%",
              margin: "auto",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Australia Tour Of India 2023
            </p>
            <p style={{ color: "yellow" }}>
              A dramatic Australia batting collaps saw india cruise to a
              six-wicket win and retain Border-Gavsakar Trophy A dramatic
              Australia batting collaps saw india cruise to a six-wicket win and
              retain Border-Gavsakar Trophy A
            </p>
          </div>
        </Typography>
      </div>
      <img
        src={img}
        alt="First slide"
        style={{
          width: "60%",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          border: "none",
        }}
      />
    </Fragment>
  );
};
export default KidsCard;
