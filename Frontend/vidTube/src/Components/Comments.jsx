import React, { useState } from 'react'
import Styles from "./Comments.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getcurrVideos } from '../Redux/videos/videoaction';

import { Text, Box, Image, Input, Button } from '@chakra-ui/react'
import axios from 'axios';


const Comments = ({ videoId }) => {

    const [comment, setComment] = useState("");
    const [show, setShow] = useState(false)
    console.log(comment.length)

    const currVideo = useSelector((state) => state.reducer.currvid);
    const dispatch = useDispatch();
    //console.log(currVideo, "currVidoe")



    const handleComment = () => {
        axios.patch(`http://localhost:8080/videos/${videoId}`, { comments: comment })
            .then((res) => {
                //console.log(res);
                dispatch(getcurrVideos(videoId))
                setComment("")
            })
            .catch((err) => {

                console.log(err);
            })
    }


    const handleChange = () => {
        setShow(true)
    }


    return (
        <Box>
            <Text>
                {currVideo.comments.length} Comments
            </Text>
            <Box>
                <Image />
                <Input focusBorderColor={"red"} placeholder='Add a comment' onFocus={handleChange} onChange={(e) => setComment(e.target.value)} value={comment} border={"none"} />
                <Box borderBottom={"1px solid gray"}></Box>
            </Box>

            {
                show ? <Box mt={"10px"}>
                    <Button color={"black"} ml="10px" onClick={() => { setComment(""); setShow(false) }}>Cancel</Button>
                    <Button color={"black"} ml="10px" isDisabled={comment.length === 0} onClick={handleComment}>Comment</Button>
                </Box> : ""
            }




            <Box>
                {currVideo.comments.map((el, i) => (
                    <Box key={i} >{el}</Box>
                ))}
            </Box>

        </Box>
    )
}

export default Comments
