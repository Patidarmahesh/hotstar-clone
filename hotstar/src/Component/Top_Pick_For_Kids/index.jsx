import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Typography } from "@mui/material";
import KidsCard from "./Top_pick";
import {Link} from "react-router-dom"

const TopPicks = (props) => {

const {KidsDataYou1,KidsDataYou2}=props;
  
  return (
    <Fragment>
      <div style={{ background: "#001233",border:"0px solid red"}}>
        <div style={{ display: "flex", height: "2rem", marginLeft: "36px"}}>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              width: "20%",
              textAlign: "start",
            }}
          >
            {KidsDataYou1[0].heading}
          </Typography>
        </div>
        <div style={{ border: "0px solid white",display:"flex",justifyContent:"center",marginTop:"-26px"}}>
          <Carousel style={{ width: "93rem" }}>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid black",
                  height: "300px",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent:"center",
                  border: "none",
                  
                }}
              >
                {KidsDataYou1.map((data) => {
                  return (
                    <>
                        <KidsCard CardData={data}/>
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            {KidsDataYou2&&<Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid black",
                  height: "300px",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent:"center",
                  border: "none",
                  
                }}
              >
                {KidsDataYou2.map((data) => {
                  return (
                    <>
                  <KidsCard CardData={data}/>
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
          }
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};
export default TopPicks;
