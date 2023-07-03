import { Api } from "../services";
import { Post } from "../interfaces";

export const getPosts = async () => {
    
  try {
      const { data } = await Api.get<Post>(`/posts`);
      return data;

  } catch (error) {
    return null;
  }
}