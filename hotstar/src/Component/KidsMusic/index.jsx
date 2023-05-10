import React, { Fragment } from "react";
import TopPicks from "../Top_Pick_For_Kids";

const Slider2 = [
  {
    heading: "Music And Dance",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8667/1078667-v-f9e161fbfb7e",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6336/656336-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4527/674527-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4553/674553-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6334/656334-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6332/656332-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8669/1078669-v-12abb4764618",
  },
];

const Slider3 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/236/650236-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4519/674519-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5595/675595-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4676/674676-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4346/674346-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5199/875199-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4423/674423-v",
  },
];

const KidsMusic = () => {
  return (
    <Fragment>
      <TopPicks KidsDataYou1={Slider2} KidsDataYou2={Slider3}/>
    </Fragment>
  );
};
export default KidsMusic;
