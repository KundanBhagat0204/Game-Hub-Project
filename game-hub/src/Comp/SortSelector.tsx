import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Text } from "@chakra-ui/react";
import usePlatform from "@/Hooks/usePlatform";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
  width?: string;
}

const SortSelector = ({ onSelectOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  const { data, error, isLoading } = usePlatform();
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button as={"div"} variant="outline" size="sm">
          Order by : {currentSortOrder?.label || "Relevance"}
        </Button>
      </MenuTrigger>
      <MenuContent {...({ width: "200px" } as any)}>
        {isLoading}
        {error && <Text color={"red.500"}>Failed to load Platforms</Text>}
        {sortOrders?.map((order) => (
          <MenuItem
            {...({} as any)}
            key={order.value}
            value={order.value.toString()}
            onClick={() => onSelectOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
