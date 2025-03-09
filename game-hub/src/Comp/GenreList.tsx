import useGenres, { Genre } from "../Hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useBreakpointValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const showHeading = useBreakpointValue({ base: false, md: false, lg: true });

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      {showHeading && (
        <Heading as="h1" fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
      )}
      {isMobile ? (
        <MenuRoot>
          <MenuTrigger>
            <Button as={"div"} variant="outline" size="sm">
              {selectedGenre ? selectedGenre.name : "Select Genre"}
            </Button>
          </MenuTrigger>
          <MenuContent
            {...({ width: "200px" } as any)}
            maxHeight="500px"
            overflowY="auto"
          >
            {isLoading}
            {error && <Text color={"red.500"}>Failed to load Platforms</Text>}
            {data?.map((genre) => (
              <MenuItem
                {...({} as any)}
                key={genre.id}
                value={genre.id.toString()}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      ) : (
        <List.Root listStyleType={"none"}>
          {data?.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <>
                <HStack gap={2} width={"100%"}>
                  <Image
                    boxSize={"32px"}
                    objectFit={"cover"}
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                  ></Image>
                  <Button
                    onClick={() => onSelectGenre(genre)}
                    fontSize={"md"}
                    variant={"ghost"}
                    flex={"1"}
                    whiteSpace={"normal"}
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </>
            </ListItem>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;
