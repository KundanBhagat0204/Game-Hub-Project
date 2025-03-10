import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import NavBar from "./Comp/NavBar";
import GameGrid from "./Comp/GameGrid";
import GenreList from "./Comp/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Comp/PlatformSelector";
import { Platform } from "./Hooks/useGames";
import SortSelector from "./Comp/SortSelector";
import GameHeading from "./Comp/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      {isLargeScreen && (
        <Show when={isLargeScreen}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
      )}
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <Box paddingLeft={"2"}>
          <Flex gap={5} paddingLeft={"2.5"} marginBottom={5}>
            {!isLargeScreen && (
              <Box mb={5}>
                <GenreList
                  selectedGenre={gameQuery.genre}
                  onSelectGenre={(genre) =>
                    setGameQuery({ ...gameQuery, genre })
                  }
                />
              </Box>
            )}
            <Box>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </Box>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
