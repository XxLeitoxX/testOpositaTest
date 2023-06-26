import { Api } from "../services";
import { Post } from "../interfaces";

export const getMorePosts = async () => {
  try {

      //Con este setTime se nota como cargan los post de forma perezosa
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const { data } = await Api.get<Post>(`/posts?limit=60`);
      
      return data;

  } catch (error) {
    return null;
  }
}