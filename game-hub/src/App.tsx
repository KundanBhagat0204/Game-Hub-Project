import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./Comp/NavBar";
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
          <GridItem area="aside" bg={"gray"}>
            Aside
          </GridItem>
        </Show>
      )}
      <GridItem area="main" bg={"salmon"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
