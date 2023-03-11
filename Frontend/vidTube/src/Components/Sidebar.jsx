import React from "react";
import { Box } from "@chakra-ui/react";
import { CgAddR } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TbStarFilled } from "react-icons/tb";
import { HiFolderRemove } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-around"}
      height={"800px"}
    >
      <BiHomeAlt />

      <CgAddR />
      <HiFolderRemove />
      <TbStarFilled />
      <FiSettings />
    </Box>
  );
};

export default Sidebar;
