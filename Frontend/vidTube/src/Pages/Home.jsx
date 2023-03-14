import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../Components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Home.module.css";
import { getVideos } from "../Redux/videos/videoaction";

const Home = () => {
  const videos = useSelector((state) => state.reducer.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return (
    <div>
      <SimpleGrid className={Styles.show_videos}>
        {videos.length > 0 &&
          videos.map((el, i) => (
            <CardItem
              title={el.title}
              thumbnail={el.thumbnail}
              videoid={el.videoId}
              Id={el._id}
              key={el._id}
              index={i}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
