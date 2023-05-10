import React, { Fragment } from "react";
import TopPicks from "../Top_Pick_For_Kids";


const Slider2 = [
  {
    heading: "Top Picks For Kids",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5044/675044-v",
      id:1,
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v",
      id:2,
  },
  {
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3953/673953-v",  
      id:3,
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4831/674831-v",
      id:4,
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5206/875206-v",
      id:5,
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5021/675021-v",
      id:6,
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6",
      id:7,
  },
];

const Slider3 = [
  {
    heading: "PIRATES OF CRAIBIAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4767/674767-v",
      id:8,
  },
  {
    heading: "ALADIN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2054/1000182054/1000182054-v",
      id:9,
  },
  {
    heading: "MULAN",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4816/674816-v",
      id:10,
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4979/674979-v",
      id:11,
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6941/1036941-v-b7f0f9abf579",
      id:12,
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2003/1000192003/1000192003-v",
      id:13,
  },
  {
    heading: "ATLANTIS",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2025/1000192025/1000192025-v",
      id:14
  },
];

const Top_For_Kids = () => {
  return (
    <Fragment>
      <TopPicks KidsDataYou1={Slider2} KidsDataYou2={Slider3} />
    </Fragment>
  );
};
export default Top_For_Kids;
