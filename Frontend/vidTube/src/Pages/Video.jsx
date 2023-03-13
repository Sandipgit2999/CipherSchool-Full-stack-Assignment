import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import Comments from "../Components/Comments";
import * as types from "../Redux/videos/videoactiontype"
import axios from "axios";

const Video = () => {
  const { id } = useParams();
  const currVideo = useSelector((state) => state.reducer.currvid);
  console.log(currVideo, "currVidoe")
  const [like, setLike] = useState(false)
  console.log(currVideo, like, "bidofdfj")
  const dispatch = useDispatch();
  let { _id, likecount } = currVideo;
  console.log("dkkdk", _id)


  const getVideos = () => {
    axios.get(`http://localhost:8080/videos/${_id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.GET_CURRVIDEO_SUCCESS, payload: res.data })
      })
      .catch((err) => {

        console.log(err);
      })
  }



  const handleLike = (id, count) => {
    console.log(id)

    axios.put(`http://localhost:8080/videos/${id}`, { likecount: likecount + count })
      .then((res) => {
        console.log(res);
        getVideos()
        setLike(!like)
      })
      .catch((err) => {

        console.log(err);
      })

  }


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
