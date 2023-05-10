import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import SportCard from "./SportCard";

const Slider1 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8606/1478606-h-ff74cc4ed33d",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9016/1479016-h-fc7384fd7882",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8671/1478671-h-e4d9a159ecad",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9026/1479026-h-09704951c472",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9029/1479029-h-11bb259d6b89",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9039/1479039-h-8ad938a7b714",
  },
];

const Slider2 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8590/1478590-h-3e2c419755e4",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8622/1478622-h-609d1019ede6",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8446/1478446-h-e210d79d9419",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8568/1478568-h-4848cb80f771",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8347/1478347-h-ad91cbd59434",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8545/1478545-h-8ba921d6929f",
  },
];

const Slider3 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8928/1478928-h-47beee33aa82",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8960/1478960-h-60b7364bc512",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8754/1478754-h-63b16e08773f",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8449/1478449-h-839f61c6cd0a",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8340/1478340-h-b33d7f81058c",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8538/1478538-h-bed2487aed57",
  },
];

function BestInSports() {
  return (
    <div
      style={{
        background: "#141b29",
        width: "100%",
        border: "0px solid green",
        marginTop: "-25px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "0rem",
          width: "86%",
          border: "0px solid red",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "white", width: "20%", marginLeft: "-26px" }}
        >
          Best In Sports
        </Typography>
      </div>
      <div style={{ border: "0px solid white", display: "flex" }}>
        <Carousel style={{ width: "95rem" }}>
          <Carousel.Item interva={1500}>
            <div
              style={{
                border: "0px solid red",
                height: "230px",
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
                    <SportCard CardData={data} />
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
                const { image } = data;
                return <><SportCard CardData={data}/></>;
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
                const { image } = data;
                return <><SportCard CardData={data}/></>;
              })}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default BestInSports;
