import { useState } from 'react';
import {  Post } from '../interfaces';
import { getPosts, getMorePosts } from '../services';


const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null | unknown>(null);
  
  const listPosts = async () => {

      const data = await getPosts();
      
      if (data !== null && data.posts !== undefined) {
        setPosts(data.posts);
      } else {
        setError(true)
      }
  };

  const listMorePosts = async () => {
    try {
      const data = await getMorePosts();
      
      if (data !== null && data.posts !== undefined) {
        setPosts(data.posts);
      }

    } catch (error) {
      console.error('Error fetching more posts:', error);
    }
  };

  return { posts, listPosts, listMorePosts, error };
};

export default usePosts;