import React, { useState } from 'react'
import Styles from "./Comments.module.css"
import { useDispatch, useSelector } from "react-redux";

import { Text, Box, Image, Input, Button } from '@chakra-ui/react'
import axios from 'axios';


const Comments = ({ videoId }) => {

    const [comment, setComment] = useState("");

    const currVideo = useSelector((state) => state.reducer.currvid);
    const dispatch = useDispatch();
    console.log(currVideo, "currVidoe")


    const getVideos = () => {
        axios.get(`http://localhost:8080/videos/${videoId}`)
          .then((res) => {
            console.log(res);
            dispatch({ type: types.GET_CURRVIDEO_SUCCESS, payload: res.data })
          })
          .catch((err) => {
    
            console.log(err);
          })
      }

    const handleComment = () => {
        axios.patch(`http://localhost:8080/videos/${videoId}`, { comments: comment })
            .then((res) => {
                console.log(res);
                getVideos()
                setComment("")
            })
            .catch((err) => {

                console.log(err);
            })
    }


    return (
        <Box>
            <Text>
            {currVideo.comments.length} Comments
            </Text>
            <Box>
                <Image />
                <Input border-top-style={"hidden"} border-bottom-style={"groove"} border-left-style={"hidden"} border-right-style={"hidden"} placeholder='Add a comment' className={Styles.no_outline} onChange={(e) => setComment(e.target.value)} value={comment} border={"none"} />
            </Box>

            <Box>
                <Button onClick={()=>setComment("")}>Cancel</Button>
                <Button onClick={handleComment}>Comment</Button>
            </Box>


            <Box>
                {currVideo.comments.map((el)=>(
                    <Box>{el}</Box>
                ))}
            </Box>

        </Box>
    )
}

export default Comments
