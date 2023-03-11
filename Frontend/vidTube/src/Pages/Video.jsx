import React from "react";
import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
       
        autoPlay
        muted
        hidden={!isPlaying}
        allowFullScreen
        width="560"
        height="315"
      ></iframe>
      
    </div>
  );
};

export default Video;
