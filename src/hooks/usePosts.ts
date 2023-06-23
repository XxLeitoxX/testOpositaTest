import { useState, useEffect } from 'react';
import { Comments, Post } from '../interfaces';
import { getPosts, getCommentsById, getMorePosts } from '../utils';


const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [coments, setComents] = useState<Comments[]>([]);
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


  const listCommentById = async (postId: number) => {
    try {

      const data = await getCommentsById(postId);
      if (data !== null && data.comments !== undefined) {
        setComents(data.comments);
      }

    } catch (error) {
      console.error('Error fetching post comments:', error);
      return '';
    }
  };

  useEffect(() => {
    listPosts();
  }, []);

  return { posts, listPosts, listCommentById, coments, listMorePosts, error };
};

export default usePosts;