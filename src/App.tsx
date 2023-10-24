import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";
import PlotformSelector from "./components/PlotformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGenres] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav""aside main"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        {/* <GridItem area="aside">
          <GenreList
            onSelectGenre={(genre) => setSelectedGenres(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem> */}
        <GridItem area="aside">
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({
                ...gameQuery,
                genre,
              })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        {/* <PlotformSelector
          setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        /> */}
        <PlotformSelector
          setSelectedPlatform={(platform) =>
            setGameQuery({
              ...gameQuery,
              platform,
            })
          }
          selectedPlatform={gameQuery.platform}
        />
        {/* <GameGrid
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
        />
      </GridItem> */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
