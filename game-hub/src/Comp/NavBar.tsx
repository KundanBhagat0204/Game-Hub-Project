import { Button, HStack, Image } from "@chakra-ui/react";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";
import { MdOutlineDarkMode } from "react-icons/md";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <Button variant="outline" onClick={toggleColorMode}>
        <MdOutlineDarkMode />
      </Button>
    </HStack>
  );
};

export default NavBar;
