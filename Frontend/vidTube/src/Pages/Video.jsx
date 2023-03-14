import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import Comments from "../Components/Comments";
import { getcurrVideos } from "../Redux/videos/videoaction";
import * as types from "../Redux/videos/videoactiontype"
import axios from "axios";

const Video = () => {
  const { id } = useParams();
  const currVideo = useSelector((state) => state.reducer.currvid);

  const [like, setLike] = useState(false)

  const dispatch = useDispatch();
  let { _id, likecount } = currVideo;





  const handleLike = (id, count) => {
    //console.log(id)

    axios.put(`http://localhost:8080/videos/${id}`, { likecount: likecount + count })
      .then((res) => {
        //console.log(res);
        dispatch(getcurrVideos(id))
        setLike(!like)
      })
      .catch((err) => {

        console.log(err);
      })

  }


  useEffect(() => {
    dispatch(getcurrVideos(_id))
  }, [])


  return (
    <Box padding={"20px"}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}

        autoPlay
        muted

        allowFullScreen
        width="746"
        height="420"
      ></iframe>

      <Text fontSize={"20px"}>{currVideo.title}</Text>

      <Box>

        {
          like ? < AiFillLike onClick={() => handleLike(_id, -1)} /> : <AiOutlineLike onClick={() => handleLike(_id, 1)} />
        }


        <Text>{currVideo.likecount}</Text>

      </Box>



      <Comments videoId={currVideo._id} />

    </Box>
  );
};

export default Video;
