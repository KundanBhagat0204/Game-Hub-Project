import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./Comp/NavBar";
import GameGrid from "./Comp/GameGrid";
import GenreList from "./Comp/GenreList";
function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {isLargeScreen && (
        <Show when={isLargeScreen}>
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
      )}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
