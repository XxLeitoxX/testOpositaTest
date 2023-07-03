import React, { useState, useEffect } from "react";
import { Alert, AlertIcon, GridItem, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@chakra-ui/react";
import PostItem from "./PostItem";
import PostModal from "./PostModal";
import usePosts from "../hooks/usePosts";
import { Post } from "../interfaces";
import { useFavoriteContext } from "../context/FavoriteContext";
import useModal from "../hooks/useModal";

const PostList: React.FC = () => {
  const { posts, listMorePosts, error, listPosts } = usePosts();
  const { favorites } = useFavoriteContext();
  const { openModal, closeModal, selectedPost, coments } = useModal();
  const [hasMore, setHasMore] = useState(true);

  const postFavorites: (Post & { favorite: boolean })[] = posts.map((post) => ({
    ...post,
    favorite: favorites.includes(post.id),
  }));

  //Ordena los favoritos primero
  postFavorites.sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0));

  useEffect(() => {
    listPosts();
  }, []);

  useEffect(() => {
    setHasMore(true);
    if (postFavorites.length >= 60) {
      setHasMore(false);
    }
  }, [postFavorites]);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request.
      </Alert>
    );
  }

  return (
    <>
      <InfiniteScroll
        dataLength={postFavorites.length}
        next={listMorePosts}
        hasMore={hasMore}
        loader={<Spinner color="#285e61" />}
        endMessage={
          <Text textAlign={"center"} color="#fff">
            <b>Yay! You have seen it all</b>
          </Text>
        }
      >
        {postFavorites.map((post) => (
          <GridItem key={post.id} onClick={() => openModal(post)} h="300">
            <PostItem
              title={post.title}
              tags={post.tags}
              body={post.body}
              reactions={post.reactions}
              id={post.id}
            />
          </GridItem>
        ))}
      </InfiniteScroll>
      <PostModal
        isOpen={selectedPost !== null}
        onClose={closeModal}
        title={selectedPost?.title || ""}
        body={selectedPost?.body || ""}
        tags={selectedPost?.tags || []}
        reactions={selectedPost?.reactions || 0}
        id={selectedPost?.id || 0}
        comment={coments}
      />
    </>
  );
};

export default PostList;
