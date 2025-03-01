import usePlatform from "@/Hooks/usePlatform";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform();

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          PlatForms
        </Button>
      </MenuTrigger>
      <MenuContent width={"200px"}>
        {isLoading}
        {error && <Text color={"red.500"}>Failed to load Platforms</Text>}
        {data?.map((platform) => (
          <MenuItem key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
