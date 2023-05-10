import React, { Fragment } from "react";
import TopPicks from "../Top_Pick_For_Kids";


const Slider2 = [
  {
    heading: "Spider-Verse",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7729/1297729-v-3eb0167d70bf",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7807/1297807-v-d793a5595a86",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7779/1297779-v-814aebc63d09",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4813/654813-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4717/654717-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4810/654810-v",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4819/654819-v",
  },
];


const KidsSpider = () => {
  return (
    <Fragment>
      <TopPicks KidsDataYou1={Slider2} />
    </Fragment>
  );
};
export default KidsSpider;
