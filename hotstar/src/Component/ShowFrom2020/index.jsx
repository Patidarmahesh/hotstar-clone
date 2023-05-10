import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./show.css";
import { Card } from "@nextui-org/react";
import { Typography } from "@mui/material";

const Slider2 = [
  {
    heading: "DISCOVERY",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
    para: "Ocian Blue Well",
  },
  {
    heading: "TITANIC",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1027/1000001027/1000001027-v",
    para: "Kate WinsLet",
  },
  {
    heading: "VIKRANTA",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v",
    para: "Jaqline Franandiz",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1529/571529-v",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3669/593669-v",
    para: "The Rock",
  },
  {
    heading: "JUNGLE CRUSH",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
    para: "The Rock",
  },
];

const Slider3 = [
  {
    heading: "PIRATES OF CRAIBIAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3838/1000053838/1000053838-v",
    para: "...Jack Sparrow...",
  },
  {
    heading: "ALADIN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9217/1389217-v-c29b53bc1557",
    para: "...Hathim Of King...",
  },
  {
    heading: "MULAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6492/1316492-v-47ac456f89f2",
    para: "...Suzika...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1275/1431275-v-44de728a151b",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/4296/1000194296/1000194296-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4502/1000034502/1000034502-v",
    para: "...Alisa Allen...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/2950/1000082950/1000082950-v",
    para: "...Alisa Allen...",
  },
];

const Slider4 = [
  {
    heading: "PIRATES OF CRAIBIAN_( 2 )",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
    para: "...Jack Sparrow...",
  },
  {
    heading: "YE RISHTA KYA KAHLATA HAI",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1260/1431260-v-5c19a3531df3",
    para: "...SHRADHA...",
  },
  {
    heading: "PETS DRAGON",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4710/1474710-v-c9b28910733d",
    para: "...Finn ballor...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6675/1476675-v-582634b7d3fb",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9439/529439-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2697/1000192697/1000192697-v",
    para: "...Katty Perry...",
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3838/1000053838/1000053838-v",
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

const ShowFrom2020 = () => {
  return (
    <Fragment>
      <div style={{ background: "#141b29", border: "0px solid red",marginTop:"-20px"}}>
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
            ShowFrom2020
          </Typography>
        </div>
        <div style={{ border: "0px solid white",marginTop:"-30px"}}>
          <Carousel style={{ width: "95rem" }}>
            <Carousel.Item interva={500}>
              <div
                style={{
                  border: "0px solid gold",
                  height: "380px",
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
                      <div class="ag-courses_item">
                        <div href="#" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
                          <img
                            src={image}
                            style={{
                              width: "100%",
                              height: "240px",
                              borderRadius: "6px",
                              marginTop: "-13px",
                            }}
                            class="ag-courses-item_title"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item interva={500}>
              <div
                style={{
                  border: "1px solid green",
                  height: "380px",
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
                      <div class="ag-courses_item">
                        <div href="#" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
                          <img
                            src={image}
                            style={{
                              width: "100%",
                              height: "240px",
                              borderRadius: "6px",
                              marginTop: "-13px",
                            }}
                            // class="ag-courses-item_title"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </Carousel.Item>

            <Carousel.Item interva={500}>
              <div
                style={{
                  border: "0px solid red",
                  height: "380px",
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
                      <div class="ag-courses_item">
                        <div href="#" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
                          <img
                            src={image}
                            style={{
                              width: "100%",
                              height: "240px",
                              borderRadius: "6px",
                              marginTop: "-13px",
                            }}
                            class="ag-courses-item_title"
                          />
                        </div>
                        {/* <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date"></span>
                          </div> */}
                      </div>
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
export default ShowFrom2020;
