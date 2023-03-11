import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../Components/CardItem";

const Home = () => {
  const api = "AIzaSyAXGwIiUb5XCqKLJzaaSXR4vz7_t5Bi6gQ";
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trending%202&key=AIzaSyAXGwIiUb5XCqKLJzaaSXR4vz7_t5Bi6gQ`
      )
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
     getData();
  }, []);

  return (
    <div>
      <SimpleGrid>
        {data.length > 0 &&
          data.map((el, i) => (
            <CardItem
              title={el.snippet.title}
              thumbnail={el.snippet.thumbnails.high.url}
              id={el.id.videoId}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
