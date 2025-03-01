import {
  Box,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./Comp/NavBar";
import GameGrid from "./Comp/GameGrid";
import GenreList from "./Comp/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Comp/PlatformSelector";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <NavBar />
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
        <Box>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
