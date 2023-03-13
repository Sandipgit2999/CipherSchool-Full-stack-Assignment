import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../Components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Home.module.css"
import { getVideos } from "../Redux/videos/videoaction";

const Home = () => {

  const [data, setData] = useState([]);




  const videos = useSelector((state) => state.reducer.videos);
  console.log(videos, "bidofdfj")
  const dispatch = useDispatch();

  // const getData = () => {
  //   axios
  //     .get(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trending%202&key=AIzaSyAXGwIiUb5XCqKLJzaaSXR4vz7_t5Bi6gQ`
  //     )
  //     .then((res) => {
  //       console.log(res.data.items);
  //       setData(res.data.items);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
              index={i}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
