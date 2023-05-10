import React, { Fragment } from "react";
import TopPicks from "../Top_Pick_For_Kids";

const Slider2 = [
  {
    heading: "Micky And Friends",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3700/673700-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3047/1413047-v-c1ad3dd8ea81",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9700/1289700-v-606bd48d21ab",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9246/1159246-v-aa1c2a050bc8",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9389/1119389-v-8d06625813a0",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7698/1037698-v-5918220faceb",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3761/673761-v",
  },
];

const Slider3 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4562/674562-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3702/673702-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3753/673753-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6431/656431-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4420/674420-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/265/650265-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4420/674420-v",
  },
];

const MickeyKids = () => {
  return (
    <Fragment>
      <TopPicks KidsDataYou1={Slider2} KidsDataYou2={Slider3}/>
    </Fragment>
  );
};
export default MickeyKids;
