import { Button } from "@chakra-ui/react/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Text } from "@chakra-ui/react";
import usePlatform from "@/Hooks/usePlatform";

const SortSelector = () => {
  const { data, error, isLoading } = usePlatform();
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by : Relevance
        </Button>
      </MenuTrigger>
      <MenuContent width={"200px"}>
        {isLoading}
        {error && <Text color={"red.500"}>Failed to load Platforms</Text>}
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="DateAdded">Data Added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="ReleaseDate">Release Date</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average Rating">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
