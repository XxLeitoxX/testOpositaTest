import { useState } from 'react';
import {  Post, Comments } from '../interfaces';
import { getCommentsById } from '../services';


const useModal = () => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [coments, setComents] = useState<Comments[]>([]);
  
  
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