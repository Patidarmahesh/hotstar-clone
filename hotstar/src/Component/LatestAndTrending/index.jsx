import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./latest.css";
import { Typography } from "@mui/material";
import LatestCard from "./TrendingCard";

const Slider2 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8478/1478478-v-3a45a2ae5b3e",
    heading:"Robort_2",  
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6677/1476677-v-afe46e2c17e2",
    heading:"Aahiqana",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9263/1089263-v-13f4d7e9411b",
      heading:"Sushmita Sen",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4710/1474710-v-c9b28910733d",
      heading:"Night Manager",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7897/1467897-v-9f1308adfa31",
      heading:"Hansika Love",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9847/1469847-v-8ccfe08829e1",
      heading:"MalikaPurama",
  },
];

const Slider3 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9917/1459917-v-159f6fd1719a",
      heading:"Saturday Night",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5120/1455120-v-114e62176f39",
      heading:"Black Panthar",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7220/1467220-v-b63ce1315786",
      heading:"Dear Ishq",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7257/1467257-v-9cdcdf57beca",
      heading:"Jhansi",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1972/1441972-v-5e26afdc2ef7",
      heading:"Aar Ya paar",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6479/1436479-v-3bd70e9e2b4d",
      heading:"Jaya Jaya Jaya",
  },
  
];

const Slider4 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4789/1434789-v-1452aa371a60",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9490/1429490-v-b6665ae9e72f",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9264/1319264-v-0bd71e83df13",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1965/1441965-v-6561f230c549",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8178/1468178-v-2293b6492fbb",
      heading:"",
  },
  
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5669/1475669-v-48219f9efcf1",
      heading:"",
  },
];

const Slider5 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4452/1444452-v-aff8aea93f8e",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6497/1446497-v-ffb21d244133",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3639/1433639-v-4667d2acb4c6",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2835/742835-v",
      heading:"",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5389/875389-v",
      heading:"",
  },
  
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3034/1103034-v-afeac4412b5d",
      heading:"",
  },
];

const LatestTrending = () => {
  return (
    <Fragment>
      <div
        style={{
          background: "#141b29",
          border: "0px solid red",
          marginTop: "-20px",
        }}
      >
        <div style={{ display: "flex", height: "2rem", marginLeft: "22px" }}>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              width: "20%",
              textAlign: "start",
            }}
          >
            Latest & Trending
          </Typography>
        </div>
        <div
          style={{
            border: "0px solid white",
            marginTop: "-5px",
            justifyContent: "center",
          }}
        >
          <Carousel style={{ width: "95rem" ,height:"380px"}}>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "1px solid black",
                  height: "340px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap:"54px"
                }}
              >
                {Slider2.map((data) => {
                  return (
                    <>
                      <LatestCard CardData={data} />
                    </>
                  );
                })}

            </div>    

            </Carousel.Item>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "340px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap:"54px"
                }}
              >
                {Slider3.map((data) => {
                  return (
                    <>
                      <LatestCard CardData={data} />
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "340px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap:"54px"
                }}
              >
                {Slider4.map((data) => {
                  return (
                    <>
                      <LatestCard CardData={data} />
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "340px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap:"54px"
                }}
              >
                {Slider5.map((data) => {
                  return (
                    <>
                      <LatestCard CardData={data} />
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};
export default LatestTrending;
