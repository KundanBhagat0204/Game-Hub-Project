import { Platform } from "@/Hooks/useGames";
import usePlatform from "@/Hooks/usePlatform";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface Props {
  onSelectPlatform: (parent_platforms: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform();

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name ? selectedPlatform.name : "Platforms"}
        </Button>
      </MenuTrigger>
      <MenuContent width={"200px"}>
        {isLoading}
        {error && <Text color={"red.500"}>Failed to load Platforms</Text>}
        {data?.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
            value={platform.id.toString()}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
