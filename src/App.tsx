import React from "react";
import { Center, Grid, Text } from "@chakra-ui/react";
import { FavoriteProvider } from "./context/FavoriteContext";
import PostList from "./components/PostList";
import "./assets/style.css";

const App: React.FC = () => {
  return (
    <div>
      <Text fontSize="5xl" color="white">
        Recent Posts
      </Text>
      <Center>
        <hr style={{ width: "10%" }} />
      </Center>
      <Grid templateColumns="repeat(1, 1fr)" gap={1} m={5}>
        <FavoriteProvider>
          <PostList />
        </FavoriteProvider>
      </Grid>
    </div>
  );
};

export default App;
