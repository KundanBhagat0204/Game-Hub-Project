import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={"100%"}
      maxW={"300px"}
      borderRadius={"lg"}
      overflow={"hidden"}
      boxShadow={"md"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
