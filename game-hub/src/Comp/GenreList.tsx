import useData from "@/Hooks/useData";
import useGenres, { Genre } from "../Hooks/useGenres";
import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <List.Root>
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
