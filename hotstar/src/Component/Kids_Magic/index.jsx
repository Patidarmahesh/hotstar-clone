import React, { Fragment } from "react";
import TopPicks from "../Top_Pick_For_Kids";

const Slider2 = [
  {
    id:15, 
    heading: "Magic For Kids",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6544/666544-v",
  },
  {id:16,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8667/1078667-v-f9e161fbfb7e",
  },
  {id:17,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6576/666576-v",
  },
  {id:18,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6126/686126-v",
  },
  {id:19,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5879/805879-v",
  },
  {id:20,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5199/875199-v",
  },
  {id:21,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7741/687741-v",
  },
];

const Slider3 = [
  {
     id:22, 
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4573/674573-v",
  },
  {
    id:23,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4344/674344-v",
  },
  { id:24,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/480/650480-v",
  },
  { id:25,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7850/687850-v",
  },
  { id:26,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5879/805879-v",
  },
  { id:27,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7956/687956-v",
  },
  { id:28,
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9281/1119281-v-17fc271366e0",
  },
];

const KidsMagic = () => {
  return (
    <Fragment>
      <TopPicks KidsDataYou1={Slider2} KidsDataYou2={Slider3}/>
    </Fragment>
  );
};
export default KidsMagic;
