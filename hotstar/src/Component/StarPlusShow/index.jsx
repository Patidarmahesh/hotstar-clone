import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./star.css";
import { Card } from "@nextui-org/react";
import { Typography } from "@mui/material";

const Slider2 = [
  {
    heading: "DISCOVERY",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7527/267527-v",
    para: "Ocian Blue Well",
  },
  {
    heading: "TITANIC",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7220/1467220-v-b63ce1315786",
    para: "Kate WinsLet",
  },
  {
    heading: "VIKRANTA",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a",
    para: "Jaqline Franandiz",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/6363/6363/6363-v",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5529/1435529-v-d69a466870a4",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3569/1443569-v-9dd281391af9",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c",
    para: "The Rock",
  },
];

const Slider3 = [
  {
    heading: "PIRATES OF CRAIBIAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1992/311992-v",
    para: "...Jack Sparrow...",
  },
  {
    heading: "ALADIN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4275/1364275-v-228803576b85",
    para: "...Hathim Of King...",
  },
  {
    heading: "MULAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4327/734327-v",
    para: "...Suzika...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/152/152/152-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2028/552028-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/655/10655/10655-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3118/1023118-v-37c628e38897",
    para: "...Alisa Allen...",
  },
];

const Slider4 = [
  {
    heading: "PIRATES OF CRAIBIAN_( 2 )",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v",
    para: "...Jack Sparrow...",
  },
  {
    heading: "YE RISHTA KYA KAHLATA HAI",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/1654/1654/1654-v",
    para: "...SHRADHA...",
  },
  {
    heading: "PETS DRAGON",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4790/294790-v",
    para: "...Finn ballor...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8056/1308056-v-b52e223ef46d",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/3307/13307/13307-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8803/1308803-v-92e2188d682a",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7183/537183-v",
    para: "...Katty Perry...",
  },
];

const Slider5 = [
  {
    heading: "PIRATES OF CRAIBIAN_( 2 )",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/440/1430440-v-a4752401320e",
    para: "...Jack Sparrow...",
  },
  {
    heading: "YE RISHTA KYA KAHLATA HAI",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8059/1308059-v-db2c7f4e505d",
    para: "...SHRADHA...",
  },
  {
    heading: "PETS DRAGON",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9287/1449287-v-3dd82ab57e8d",
    para: "...Finn ballor...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8798/1308798-v-461e20951a54",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2672/582672-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2229/542229-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6817/1086817-v-02a35cda1332",
    para: "...Katty Perry...",
  },
];

const StarPlusShow = () => {
  return (
    <Fragment>
      <div style={{ background: "#141b29",width:"100%",border:"0px solid red",marginTop:"-14px"}}>
        <div style={{ display: "flex", height: "2rem", marginLeft: "22px" }}>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              // marginTop: "30px",
              width: "20%",
              textAlign: "start",
            }}
          >
            StarPlus Show
          </Typography>
        </div>
        <div style={{ border: "0px solid white",marginTop:"-30px"}}>
          <Carousel style={{ width: "95rem" }}>
            <Carousel.Item interva={1500}>
              <div
                style={{
                  border: "1px solid red",
                  height: "340px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: "5px",
                  border: "none",
                }}
              >
                {Slider2.map((data) => {
                  const { heading, image, para } = data;
                  return (
                    <>
                      <Card className="zoom">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "240px",
                            //  borderRadius: "0rem",
                          }}
                        />
                      </Card>
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
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: "5px",
                  border: "none",
                }}
              >
                {Slider3.map((data) => {
                  const { heading, image, para } = data;
                  return (
                    <>
                      <Card className="zoom">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "240px",
                          }}
                        />
                      </Card>
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
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: "5px",
                  border: "none",
                }}
              >
                {Slider4.map((data) => {
                  const { heading, image, para } = data;
                  return (
                    <>
                      <Card className="zoom">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "240px",
                            borderRadius: "0rem",
                          }}
                        />
                      </Card>
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
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: "5px",
                  border: "none",
                }}
              >
                {Slider5.map((data) => {
                  const { heading, image, para } = data;
                  return (
                    <>
                      <Card className="zoom">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "240px",
                            borderRadius: "0rem",
                          }}
                        />
                      </Card>
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
export default StarPlusShow;
