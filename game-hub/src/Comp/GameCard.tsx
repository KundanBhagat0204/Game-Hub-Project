import React from "react";
import { Game } from "@/Hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={"5px"} maxW={"sm"} overflow={"hidden"}>
      <Image src={game.background_image} bgSize={40} />
      <Card.Body>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <PlatformIconList
          platfroms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
