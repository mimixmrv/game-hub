import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav""aside main"',
      }}
    >
      <GridItem area={"nav"} bg="coral">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
