import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      bg={color}
      color="white"
      fontSize={"14px"}
      padding={1}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
