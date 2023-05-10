import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./thriller.css";
import { Typography } from "@mui/material";
import ThrillerCard from "./ThrillerCard";

const Slider2 = [
  {
    heading: "DISCOVERY",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2023/552023-v",
    para: "Ocian Blue Well",
  },
  {
    heading: "TITANIC",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4710/1474710-v-c9b28910733d",
    para: "Kate WinsLet",
  },
  {
    heading: "VIKRANTA",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5448/515448-v",
    para: "Jaqline Franandiz",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4352/1034352-v-e89aad32a565",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6675/1476675-v-582634b7d3fb",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3877/273877-v",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8018/1098018-v-7b54836e2d09",
    para: "The Rock",
  },
];

const Slider3 = [
  {
    heading: "PIRATES OF CRAIBIAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8008/1098008-v-d910d3431853",
    para: "...Jack Sparrow...",
  },
  {
    heading: "ALADIN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5420/1445420-v-50e5c9e5afc8",
    para: "...Hathim Of King...",
  },
  {
    heading: "MULAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1891/311891-v",
    para: "...Suzika...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1972/1441972-v-5e26afdc2ef7",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7645/917645-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/1470/1470/1470-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/419/1410419-v-e89851248495",
    para: "...Alisa Allen...",
  },
];

const Slider4 = [
  {
    heading: "PIRATES OF CRAIBIAN_( 2 )",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
    para: "...Jack Sparrow...",
  },
  {
    heading: "YE RISHTA KYA KAHLATA HAI",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8006/1098006-v-e972602548ce",
    para: "...SHRADHA...",
  },
  {
    heading: "PETS DRAGON",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1299/1351299-v-8d0bbbc730da",
    para: "...Finn ballor...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1714/1121714-v-fd6318f27562",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9071/509071-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7822/957822-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7461/1397461-v-a3caca36d6c8",
    para: "...Katty Perry...",
  },
];

const Slider5 = [
  {
    heading: "PIRATES OF CRAIBIAN_( 2 )",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5980/1425980-v-211ae5b2e668",
    para: "...Jack Sparrow...",
  },
  {
    heading: "YE RISHTA KYA KAHLATA HAI",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a",
    para: "...SHRADHA...",
  },
  {
    heading: "PETS DRAGON",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7393/1000087393/1000087393-v",
    para: "...Finn ballor...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/14/14/14-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5843/1000055843/1000055843-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/3273/13273/13273-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9811/1239811-v-00c0b7b04e0a",
    para: "...Katty Perry...",
  },
];

const ThrillerShow = () => {
  return (
    <Fragment>
      <div style={{ background: "#141b29",border:"0px solid red",marginTop:"-20px"}}>
        <div style={{ display: "flex", height: "2rem", marginLeft: "22px" }}>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              width: "20%",
              textAlign: "start",
            }}
          >
            Thriller Shows
          </Typography>
        </div>
        <div style={{ border: "0px solid white",marginTop:"-34px",justifyContent:"center"}}>
          <Carousel style={{ width: "95rem" }}>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "1px solid black",
                  height: "340px",
                  display: "flex",
                  width: "100%",
                  justifyContent:"center",
                  alignItems: "center",
                  border: "none",
                }}
              >
                {Slider2.map((data) => {
                  return (
                    <>
                      <ThrillerCard CardData={data}/>
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
                }}
              >
                {Slider3.map((data) => {
                  return (
                    <>
                      <ThrillerCard CardData={data} />
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
                }}
              >
                {Slider4.map((data) => {
                  return (
                    <>
                      <ThrillerCard CardData={data} />
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
                }}
              >
                {Slider5.map((data) => {
                  return (
                    <>
                      <ThrillerCard CardData={data} />
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
export default ThrillerShow;
