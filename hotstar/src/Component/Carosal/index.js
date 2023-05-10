import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./index.css";

const CarosalData = [
  {
    img: "https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-01-31/thorbpdr_desk-02733fe9-a050-49b9-a4df-740ced57bb6a.jpg",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1087/1471087-h-c3b679581a78",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1587/1471587-h-e374d2ec5fc7",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1878/1471878-h-a60533ee7420",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1881/1471881-h-825087788aab",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4839/1064839-h-899199ee4d30",
  },
  {
    img: "https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-17/OPSalami_Desk-c9531ed2-31e1-4fe2-beff-a03b3a90626a.jpg",
  },
  {
    img: "https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-19/tnmvsrDh_desk-47c9c278-f58c-4ec5-86b6-313764d4d23e.jpg",
  },
];

function Carosal() {
  return (
    <div style={{border:"0px solid red",background: "#141b29",width:"100%",marginTop:"99px"}}>
      <Carousel slide={true}>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <img
                src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-01-31/thorbpdr_desk-02733fe9-a050-49b9-a4df-740ced57bb6a.jpg"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  border: "0px solid white",
                  display: "flex",
                  // justifyContent: "flex-end",
                  background: "#030b17",
                  borderRadius: "18px",
                  border:"1px solid green",
                  width:"100%"
                }}
              >
                <div style={{ border: "0px solid green", width: "40%" }}>
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
                        A dramatic Australia batting collaps saw india cruise to
                        a six-wicket win and retain Border-Gavsakar Trophy A
                        dramatic Australia batting collaps saw india cruise to a
                        six-wicket win and retain Border-Gavsakar Trophy A
                        dramatic Australia batting collaps saw india cruise to a
                        six-wicket win and retain Border-Gavsakar Trophy
                      </p>
                    </div>
                  </Typography>
                </div>
                <img
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1087/1471087-h-c3b679581a78"
                  alt="First slide"
                  style={{
                    width: "60%",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  border: "0px solid white",
                  display: "flex",
                  justifyContent: "flex-end",
                  background: "#030b17",
                  borderRadius: "18px",
                }}
              >
                <div style={{ border: "0px solid green", width: "40%" }}>
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
                        A dramatic Australia batting collaps saw india cruise to
                        a six-wicket win and retain Border-Gavsakar Trophy A
                        dramatic Australia batting collaps saw india cruise to a
                        six-wicket win and retain Border-Gavsakar Trophy A
                        dramatic Australia batting collaps saw india cruise to a
                        six-wicket win and retain Border-Gavsakar Trophy
                      </p>
                    </div>
                  </Typography>
                </div>

                <img
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1587/1471587-h-e374d2ec5fc7"
                  alt="First slide"
                  style={{
                    width: "60%",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div
              className="carosal_card"
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "flex-end",
                border:"0px solid green",
                width:"100%"
              }}
            >
              <div
                style={{
                  width: "20%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography sx={{ color: "gray", textAlign: "start" }}>
                  Aashiqana is Back with another season! Stay Tunded the Start
                  Watching. Please Watch and Subscribe hotstar channel........
                </Typography>
                <Button variant="outlined" sx={{ width: "90%" }}>
                  Subscribe Now
                </Button>
              </div>
              <div
                style={{
                  width: "80%",
                  height: "82%",
                  borderRadius: "1rem",
                  marginRight: "50px",
                }}
              >
                <img
                  src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-19/AashiqanaS3Dated_desk-02ce87d3-dfc5-4b66-a063-d46d8a59c253.jpg"
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  border: "0px solid white",
                  display: "flex",
                  // justifyContent: "flex-end",
                  background: "#030b17",
                  borderRadius: "18px",
                  border:"0px solid green",
                width:"100%"
                }}
              >
                <div style={{ border: "0px solid green", width: "40%" }}>
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
                        A dramatic Australia batting collaps saw india cruise to
                        a six-wicket win and retain Border-Gavsakar Trophy A
                        dramatic Australia batting collaps saw india cruise to a
                        six-wicket win and retain Border-Gavsakar Trophy A
                        dramatic Australia batting collaps saw india cruise to a
                        six-wicket win and retain Border-Gavsakar Trophy
                      </p>
                    </div>
                  </Typography>
                </div>
                <img
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1881/1471881-h-825087788aab"
                  alt="First slide"
                  style={{
                    width: "60%",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div
              className="carosal_card"
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "flex-end",
                border:"0px solid green",
                width:"100%"
              }}
            >
              <div
                style={{
                  width: "20%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography sx={{ color: "gray", textAlign: "start" }}>
                  Aashiqana is Back with another season! Stay Tunded the Start
                  Watching. Please Watch and Subscribe hotstar channel........
                </Typography>
                <Button variant="outlined" sx={{ width: "90%" }}>
                  Subscribe Now
                </Button>
              </div>
              <div
                style={{
                  width: "80%",
                  height: "82%",
                  borderRadius: "1rem",
                  marginRight: "50px",
                }}
              >
                <img
                  src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-01-30/tmddia_desk-88cae91e-1034-47b2-807a-c31ed5ee139a.jpg"
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <img
                src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-17/OPSalami_Desk-c9531ed2-31e1-4fe2-beff-a03b3a90626a.jpg"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <img
              // src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4709/1474709-h-2996c7504a9d"
                src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-19/tnmvsrDh_desk-47c9c278-f58c-4ec5-86b6-313764d4d23e.jpg"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div
              className="carosal_card"
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "flex-end",
                border:"0px solid green",
                width:"100%"
              }}
            >
              <div
                style={{
                  width: "20%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography sx={{ color: "gray", textAlign: "start" }}>
                  Aashiqana is Back with another season! Stay Tunded the Start
                  Watching. Please Watch and Subscribe hotstar channel........
                </Typography>
                <Button variant="outlined" sx={{ width: "90%" }}>
                  Subscribe Now
                </Button>
              </div>
              <div
                style={{
                  width: "80%",
                  height: "82%",
                  borderRadius: "1rem",
                  marginRight: "50px",
                }}
              >
                <img
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5119/1455119-h-2a917e92adac"
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Carosal;
