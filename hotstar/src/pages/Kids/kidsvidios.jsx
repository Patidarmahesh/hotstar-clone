import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import MainLayOut from "../../MainLayOut";
import { Typography } from "@mui/material";

const vidiosData = [
  {
    name: "doremon",
    year: "2000",
    channel: "CN",
    id: 1,
    vodios: "https://youtu.be/RjW-yjUJ58A",
  },
  {
    name: "ShinChain",
    year: "2000",
    channel: "CN",
    id: 2,
    vodios: "https://youtu.be/MtAuFyA-q30",
  },
  {
    name: "Doremon",
    year: "2005",
    channel: "CN",
    id: 3,
    vodios: "https://youtu.be/BxYUrb1plKY",
  },
  {
    name: "Jungle Book",
    year: "2000",
    channel: "CN",
    id: 4,
    vodios: "https://youtu.be/C4qgAaxB_pc",
  },
  {
    name: "Frozen 11",
    year: "2023",
    channel: "CN",
    id: 5,
    vodios: "https://youtu.be/gFMsgA2LY18",
  },
  {
    name: "Frozen Fight",
    year: "2022",
    channel: "CN",
    id: 6,
    vodios: "https://youtu.be/puekacuy8GQ",
  },
  {
    name: "chin chain",
    year: "2000",
    channel: "CN",
    id: 7,
    vodios: "https://www.youtube.com/watch?v=J-stdAfmk34",
  },
  {
    name: "tom",
    year: "2000",
    channel: "CN",
    id: 8,
    vodios: "https://youtu.be/zY7N19rytrg",
  },
  {
    name: "Hanuman",
    year: "2021",
    channel: "CN",
    id: 9,
    vodios: "https://youtu.be/Hp_5OIBRouY",
  },
  {
    name: "Tangled",
    year: "2023",
    channel: "CN",
    id: 10,
    vodios: "https://youtu.be/gsYKF8ecC8g",
  },
  {
    name: "Moana",
    year: "2021",
    channel: "CN",
    id: 11,
    vodios: "https://youtu.be/cPAbx5kgCJo",
  },
  {
    name: "Raya",
    year: "2022",
    channel: "CN",
    id: 12,
    vodios: "https://youtu.be/1VIZ89FEjYI",
  },

  {
    name: "Little Krishna",
    year: "2000",
    channel: "CN",
    id: 13,
    vodios: "https://youtu.be/CQOiuZCTdq4",
  },
  {
    name: "dev",
    year: "2000",
    channel: "CN",
    id: 14,
    vodios: "https://youtu.be/dnvskgghUdA",
  },

  {
    name: "doremon",
    year: "2000",
    channel: "CN",
    id: 15,
    vodios: "https://youtu.be/RjW-yjUJ58A",
  },
  {
    name: "nobitra",
    year: "2000",
    channel: "CN",
    id: 16,
    vodios: "https://youtu.be/RjW-yjUJ58A",
  },
  {
    name: "suzyka",
    year: "2000",
    channel: "CN",
    id: 17,
    vodios: "https://www.youtube.com/watch?v=_KqNCnd8AN4",
  },
  {
    name: "hatodi",
    year: "2000",
    channel: "CN",
    id: 18,
    vodios: "https://youtu.be/20DF6U1HcGQ",
  },
  {
    name: "yumiko",
    year: "2000",
    channel: "CN",
    id: 19,
    vodios: "https://youtu.be/iQXmlf3Sefg",
  },
  {
    name: "chota bheam",
    year: "2000",
    channel: "CN",
    id: 20,
    vodios: "https://youtu.be/TbQm5doF_Uc",
  },
  {
    name: "chin chain",
    year: "2000",
    channel: "CN",
    id: 21,
    vodios: "https://www.youtube.com/watch?v=J-stdAfmk34",
  },
  {
    name: "tom",
    year: "2000",
    channel: "CN",
    id: 22,
    vodios: "https://youtu.be/zY7N19rytrg",
  },
  {
    name: "jerry",
    year: "2000",
    channel: "CN",
    id: 23,
    vodios: "https://youtu.be/zY7N19rytrg",
  },
  {
    name: "motu",
    year: "2000",
    channel: "CN",
    id: 24,
    vodios: "https://youtu.be/Zi4LMpSDccc",
  },
  {
    name: "Thinker Bell 1",
    year: "2022",
    channel: "CN",
    id: 25,
    vodios: "https://youtu.be/gIOyB9ZXn8s",
  },
  {
    name: "dev",
    year: "2000",
    channel: "CN",
    id: 26,
    vodios: "https://youtu.be/dnvskgghUdA",
  },
  {
    name: "Thinker Bell 2",
    year: "2023",
    channel: "CN",
    id: 27,
    vodios: "https://youtu.be/Et4zsoUNb_0",
  },
];

export default function Kidsvidios() {
  const vidio = useParams();
  const [currentVidio, setVidio] = useState([{}]);
  const upd = () => {
    let temp = vidiosData.find((val) => val.id == vidio.id);
    setVidio(temp);
  };

  useEffect(() => {
    upd();
  }, [vidio]);

  const { name, year, channel, vodios } = currentVidio;

  return (
    <MainLayOut>
      <div
        style={{
          width: "100%",
          height: "44.6rem",
          background: "#002159",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "dotted",
            padding: "30px",
            borderRadius: "18px 0px",
            color: "#002159",
            background: "white",
          }}
        >
          <ReactPlayer
            url={vodios}
            style={{ border: "4px solid gold", borderRadius: "4px" }}
          />
          <div
            style={{
              border: "0px solid red",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Name: {name}</Typography>
            <Typography variant="h5">Year: {year}</Typography>
            <Typography variant="h5">Channel: {channel}</Typography>
          </div>
        </div>
      </div>
    </MainLayOut>
  );
}
