import React, { useState } from "react";
import { Link } from "react-router-dom";

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
const CardItem = ({ title, thumbnail, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <Link to={`/video/${id}`}>
        <Card onClick={handleThumbnailClick}>
          <CardBody>
            <Box boxSize="sm">
              <Image
                src="https://i.ytimg.com/an_webp/EwSD4uCSX_M/mqdefault_6s.webp?du=3000&sqp=CK7LsaAG&rs=AOn4CLCh5WfildVniJzRWfPZk_loJLKuuw"
                alt="image not available"
              />
              <Text size="md"> Hello</Text>
            </Box>
          </CardBody>
        </Card>
      </Link>

      <Video isPlaying={isPlaying} />
    </div>
  );
};

export default CardItem;
