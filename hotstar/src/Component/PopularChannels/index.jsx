import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import ChannelCard from "./ChannelCard";

const Slider1 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1168/661168-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1171/661171-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8774/1308774-h-524cdf69effa",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1121/661121-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1133/661133-h",
  },
];

const Slider2 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1119/661119-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1103/661103-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1138/661138-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1116/661116-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1136/661136-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1105/661105-h",
  },
];

const Slider3 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1100/661100-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6970/956970-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1109/661109-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1112/661112-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1117/661117-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1167/661167-h",
  },
];

const Slider4 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1172/661172-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1180/661180-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1170/661170-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1168/661168-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1172/661172-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1117/661117-h",
  },
];


const ChannelContent = () => {
  return (
    <Fragment>
      <div
        style={{
          background: "#141b29",
          width: "100%",
          border: "0px solid green",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "1rem",
            width: "86%",
            border: "0px solid red",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "white", width: "20%", marginLeft: "-16px",marginTop:"20px"}}
          >
            Popular Channels
          </Typography>
        </div>
        <div style={{ border: "0px solid white", display: "flex"}}>
          <Carousel style={{ width: "95rem" }}>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "250px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap: "10px",
                }}
              >
                {Slider1.map((data) => {
                  return (
                    <>
                      <ChannelCard CardData={data} />
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "250px",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  gap: "10px",
                }}
              >
                {Slider2.map((data) => {
                  return (
                    <>
                      <ChannelCard CardData={data} />
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "250px",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  gap: "10px",
                }}
              >
                {Slider3.map((data) => {
                  return (
                    <>
                      <ChannelCard CardData={data} />
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "250px",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  gap: "10px",
                }}
              >
                {Slider4.map((data) => {
                  return (
                    <>
                      <ChannelCard CardData={data} />
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
export default ChannelContent;
