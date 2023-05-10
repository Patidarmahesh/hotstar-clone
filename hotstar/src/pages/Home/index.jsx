import React from "react";
import ActionMovie from "../../Component/ActionMovie";
import BestInSports from "../../Component/BestInSports";
import Carosal from "../../Component/Carosal";
import CardOFCarosaul from "../../Component/carosalCard";
import LatestTrending from "../../Component/LatestAndTrending";
import ChannelContent from "../../Component/PopularChannels";
import ShowFrom2020 from "../../Component/ShowFrom2020";
import StarPlusShow from "../../Component/StarPlusShow";
import ThrillerShow from "../../Component/ThrillerShow";
import HorrorShow from "../../HorrorShow";
import MainLayOut from "../../MainLayOut";

const Home = () => {
  return (
    <MainLayOut>
      <Carosal />
      <CardOFCarosaul />
      <StarPlusShow />
      <ShowFrom2020 />
      <BestInSports />
      <ThrillerShow />
      <HorrorShow />
      <ChannelContent />
      <LatestTrending />
      <ActionMovie />
    </MainLayOut>
  );
};
export default Home;
