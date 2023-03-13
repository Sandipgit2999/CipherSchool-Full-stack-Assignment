import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../Redux/videos/videoactiontype";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import Video from "../Pages/Video";
const CardItem = ({ title, thumbnail, videoid, Id, index }) => {

  const videos = useSelector((state) => state.reducer.videos);
  const currVideo = useSelector((state) => state.reducer.currvid);
  console.log(currVideo, "bidofdfj")
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: types.GET_CURRVIDEO_SUCCESS, payload: videos[index] })
  }



  return (
    <div>
      <Link to={`/video/${videoid}`}>
        <Card backgroundColor={"white"} onClick={handleClick} >
          <CardBody>
            <Box boxSize="sm">
              <Image
                src={thumbnail}
                alt="image not available"
              />
              <Text size="md"> {title}</Text>
            </Box>
          </CardBody>
        </Card>
      </Link>


    </div>
  );
};

export default CardItem;
