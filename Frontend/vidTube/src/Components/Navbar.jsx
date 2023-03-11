import React from 'react'
import {Box,Text,Input, Heading} from '@chakra-ui/react'
 import {IoIosNotificationsOutline} from 'react-icons/io'
import {HiOutlineChatBubbleOvalLeftEllipsis} from 'react-icons/all'
import {BsSearch} from 'react-icons/bs'
const Navbar = () => {
  return (
    <Box display={"flex"} w="100%" padding={"10px"} justifyContent={"space-between"}>
      <Box display={"flex"}>
        <Heading>VidTube</Heading>
      </Box>
      <Box display={"flex"} justifyContent="space-between" w={"25%"}>
        <Text>TOP STREAMING</Text>
        <Text>GAMES</Text>
        <Text>TEAMS</Text>
      </Box>
      <Box  display={"flex"} w="25%">
        <Input type="Search" w="100%" backgroundColor={"rgb(28,30,31)"} placeholder='Search...' border={"none"}/>
        <BsSearch size={30}  />

      </Box>
      <Box display={"flex"} justifyContent="space-between" w={"25%"}>
        <HiOutlineChatBubbleOvalLeftEllipsis size={30}/>
        <IoIosNotificationsOutline size={30}/>
        <Text>Sandip</Text>
        <Box>Profile</Box>
      </Box>
    </Box>
  )
}

export default Navbar
