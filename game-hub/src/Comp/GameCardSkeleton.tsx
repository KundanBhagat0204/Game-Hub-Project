import { SkeletonText } from "@/components/ui/skeleton";
import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height={"200px"} />
      <GameCardContainer>
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </GameCardContainer>
    </Card.Root>
  );
};

export default GameCardSkeleton;
