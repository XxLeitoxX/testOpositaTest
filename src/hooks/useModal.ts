import { useState } from 'react';
import {  Post } from '../interfaces';
import usePosts from "./usePosts";


const useModal = () => {
    const {  listCommentById, coments } = usePosts();
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  
  
  const openModal = async (post: Post) => {
    setSelectedPost(post);
    await listCommentById(post.id);

    setSelectedPost((prevPost) => {
      if (prevPost) {
        return { ...prevPost, coments };
      }
      return null;
    });
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return { openModal, closeModal, selectedPost, coments };
};

export default useModal;