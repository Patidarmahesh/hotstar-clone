import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carosalCard.css";
import { Card} from "@nextui-org/react";
import carsoualData from "./carosualCard.json";
import { Typography } from "@mui/material";

const Slider2 = [
  {
    heading:"DISCOVERY",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8215/928215-h",
    para:"Ocian Blue Well"
  },
  {
    heading:"TITANIC",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/815/750815-h",
    para:"Kate WinsLet"
  },
  {
    heading:"VIKRANTA",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8863/1348863-h-0d3a2927b302",
    para:"Jaqline Franandiz"
  },{
    heading:"JUNGLE CRUSH",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8687/1078687-h-029e9d313239",
    para:"The Rock"
  }
]

const Slider3 = [
  {
    heading:"PIRATES OF CRAIBIAN",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4643/674643-h",
    para:"...Jack Sparrow..."
  },
  {
    heading:"ALADIN",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4554/674554-h",
    para:"...Hathim Of King..."
  },
  {
    heading:"MULAN",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6661/846661-h",
    para:"...Suzika..."
  },{
    heading:"ATLANTIS",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4552/674552-h",
    para:"...Alisa Allen..."
  }
]

const Slider4 = [
  {
    heading:"PIRATES OF CRAIBIAN_( 2 )",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4311/674311-h",
    para:"...Jack Sparrow..."
  },
  {
    heading:"YE RISHTA KYA KAHLATA HAI",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",
    para:"...SHRADHA..."
  },
  {
    heading:"PETS DRAGON",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4365/674365-h",
    para:"...Finn ballor..."
  },{
    heading:"ATLANTIS",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074",
    para:"...Katty Perry..."
  }
]


function CardOFCarosaul() {
  return (
    <div style={{ background: "#141b29",width:"100%",border:"1px solid green"}}>
      <div style={{display:"flex",height:"2rem",width:"86%"}}>
      <Typography variant="h5" sx={{color:"white",marginTop:"20px",width:"20%"}}>Continue Watching</Typography>
      </div>
      <div style={{border:"1px solid white",display:"flex"}}>
      <Carousel style={{ width: "95rem" }}>
        <Carousel.Item interva={1500}>
          <div
            style={{
              border: "1px solid red",
              height: "250px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              border: "none",
            }}
          >
            {carsoualData.map((data) => {
              const { heading, image, para } = data;
              return (
                <>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <Card
                          style={{
                            maxWidth: "360px",
                            maxHeight: "180px",
                            border: "0px solid red",
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
                      </div>
                      <div class="flip-card-back">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "100px",
                            borderTopRightRadius: ".6rem",
                            borderTopLeftRadius: ".6rem",
                          }}
                        />
                        <h5>{heading}</h5>
                        <p style={{ color: "yellow" }}>...{para}...</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Carousel.Item>
        {/* <Carousel.Item interva={1500}>
          <div
            style={{
              border: "0px solid red",
              height: "250px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              border: "none",
            }}
          >
            {Slider2.map((data) => {
              const { heading, image, para } = data;
              return (
                <>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <Card
                          style={{
                            maxWidth: "360px",
                            maxHeight: "180px",
                            border: "0px solid red",
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
                      </div>
                      <div class="flip-card-back">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "100px",
                            borderTopRightRadius: ".6rem",
                            borderTopLeftRadius: ".6rem",
                          }}
                        />
                        <h5>{heading}</h5>
                        <p style={{ color: "yellow" }}>...{para}...</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Carousel.Item> */}
        {/* <Carousel.Item interva={1500}>
          <div
            style={{
              border: "0px solid red",
              height: "250px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              border: "none",
            }}
          >
            {Slider3.map((data) => {
              const { heading, image, para } = data;
              return (
                <>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <Card
                          style={{
                            maxWidth: "360px",
                            maxHeight: "180px",
                            border: "0px solid red",
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
                      </div>
                      <div class="flip-card-back">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "100px",
                            borderTopRightRadius: ".6rem",
                            borderTopLeftRadius: ".6rem",
                          }}
                        />
                        <h5>{heading}</h5>
                        <p style={{ color: "yellow" }}>...{para}...</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Carousel.Item> */}
        {/* <Carousel.Item interva={1500}>
          <div
            style={{
              border: "0px solid red",
              height: "250px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              border: "none",
            }}
          >
            {Slider4.map((data) => {
              const { heading, image, para } = data;
              return (
                <>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <Card
                          style={{
                            maxWidth: "360px",
                            maxHeight: "180px",
                            border: "0px solid red",
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
                      </div>
                      <div class="flip-card-back">
                        <img
                          src={image}
                          style={{
                            width: "100%",
                            height: "100px",
                            borderTopRightRadius: ".6rem",
                            borderTopLeftRadius: ".6rem",
                          }}
                        />
                        <h5>{heading}</h5>
                        <p style={{ color: "yellow" }}>...{para}...</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Carousel.Item> */}
      </Carousel>
      </div>
    </div>
  );
}

export default CardOFCarosaul;
