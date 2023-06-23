import { Api } from "../services";
import { Post } from "../interfaces";

export const getMorePosts = async () => {
  try {
  
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const { data } = await Api.get<Post>(`/posts?limit=60`);
      
      return data;

  } catch (error) {
    return null;
  }
}