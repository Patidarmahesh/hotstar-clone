import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./kids.css";
import KidsCard from "./KidsCard";
import { Fragment } from "react";
import { height } from "@mui/system";



const CarosalData1 = {
  img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7728/1297728-h-6d8cc103a144",
};

const CarosalData2 = {
  img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3788/673788-h",
};

const CarosalData3 = {
  img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3422/753422-v",
};

const CarosalData4 = {
  img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3555/753555-h",
};

const CarosalData5 = {
  img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3733/673733-h",
};

function KidsCarosal() {
  return (
    <div
      style={{
        border: "0px solid red",
        background: "#002159",
        width: "100%",
        marginTop: "66px",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  display: "flex",
                  borderRadius: "18px",
                  border: "0px solid green",
                  width: "100%",
                  background: "#030b17",
                }}
              >
                <KidsCard CarosalData={CarosalData1} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  display: "flex",
                  borderRadius: "18px",
                  border: "0px solid green",
                  width: "100%",
                  background: "#030b17",
                }}
              >
                <KidsCard CarosalData={CarosalData2} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  display: "flex",
                  borderRadius: "18px",
                  border: "0px solid green",
                  width: "100%",
                  background: "#030b17",
                }}
              >
                <KidsCard CarosalData={CarosalData3} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosal">
            <div className="carosal_card">
              <div
                style={{
                  display: "flex",
                  borderRadius: "18px",
                  border: "0px solid green",
                  width: "100%",
                  background: "#030b17",
                }}
              >
                <KidsCard CarosalData={CarosalData4} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default KidsCarosal;
