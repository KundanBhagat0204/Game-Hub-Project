import React from "react";
import { Game } from "@/Hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={"5px"} maxW={"sm"} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)} bgSize={40} />
        <Card.Body>
          <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
