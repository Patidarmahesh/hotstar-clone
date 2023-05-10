import React, { Fragment } from "react";
import TopPicks from "../Top_Pick_For_Kids";

const Slider2 = [
  {
    heading: "Feeatured",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3047/1413047-v-c1ad3dd8ea81",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9700/1289700-v-606bd48d21ab",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9533/1289533-v-5aeb53904d21",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9246/1159246-v-aa1c2a050bc8",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9568/1289568-v-54d3b892ac8c",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9063/1279063-v-4ebb6d8f0c48",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3135/1293135-v-1c73bceda2cd",
  },
];

const Slider3 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3933/1273933-v-0b6a3e279b5e",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9882/1239882-v-1283dc597885",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6406/1166406-v-c021b2d36449",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5330/1145330-v-b443e88da1d0",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8669/1078669-v-12abb4764618",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7698/1037698-v-5918220faceb",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7839/677839-v",
  },
];

const KidsFeatured = () => {
  return (
    <Fragment>
      <TopPicks KidsDataYou1={Slider2} KidsDataYou2={Slider3}/>
    </Fragment>
  );
};
export default KidsFeatured;
