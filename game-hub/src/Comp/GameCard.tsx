import React from "react";
import { Game } from "@/Hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image src={getCroppedImageUrl(game.background_image)} bgSize={40} />
        <Card.Body>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Card.Title fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top}></Emoji>
          </Card.Title>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
