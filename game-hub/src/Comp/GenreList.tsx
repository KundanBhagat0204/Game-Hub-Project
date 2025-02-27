import useData from "@/Hooks/useData";
import useGenres, { Genre } from "../Hooks/useGenres";
import {
  Button,
  HStack,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  return (
    <List.Root>
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <>
            <HStack gap={2} width={"100%"}>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize={"md"}
                variant={"ghost"}
                flex={"1"}
                whiteSpace={"normal"}
                wordBreak={"break-word"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
