import React from 'react'
import { Box, Text, Input, Heading, Button } from '@chakra-ui/react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/all'
import { BsSearch } from 'react-icons/bs'
const Navbar = () => {
  return (
    <Box display={"flex"} w="100%" padding={"10px"} justifyContent={"space-between"}>
      <Box display={"flex"}>
        <Heading>VidTube</Heading>
      </Box>
      <Box display={"flex"} justifyContent="space-between" w={"25%"}>

      </Box>
      <Box display={"flex"} w="25%">
        <Input focusBorderColor={"red"} type="Search" w="100%" backgroundColor={"rgb(28,30,31)"} placeholder='Search...' border={"none"} />
        <Button focusBorderColor={"red"} backgroundColor={"black"}><BsSearch size={30} backgroundColor={"white"} /></Button>


      </Box>
      <Box display={"flex"} justifyContent="space-between" w={"25%"}>
        <HiOutlineChatBubbleOvalLeftEllipsis size={30} />
        <IoIosNotificationsOutline size={30} />
        <Text>Sandip</Text>
        <Box>Profile</Box>
      </Box>
    </Box>
  )
}

export default Navbar
