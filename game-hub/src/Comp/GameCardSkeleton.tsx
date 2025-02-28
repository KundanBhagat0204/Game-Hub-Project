import { SkeletonText } from "@/components/ui/skeleton";
import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height={"200px"} />
      <Card.Body width={"300px"} borderRadius={10} overflow={"hidden"}>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
