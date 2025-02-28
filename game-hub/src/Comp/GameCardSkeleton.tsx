import { SkeletonText } from "@/components/ui/skeleton";
import { Card, Skeleton } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height={"250px"} width={"100%"} borderRadius={"10px"} />
      <GameCardContainer>
        <Card.Body>
          <SkeletonText mt="4" noOfLines={2} />
        </Card.Body>
      </GameCardContainer>
    </Card.Root>
  );
};

export default GameCardSkeleton;
