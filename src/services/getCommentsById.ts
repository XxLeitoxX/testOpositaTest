import { Api } from ".";
import { Comments } from "../interfaces";

export const getCommentsById = async (postId: number) => {
  try {
    
      const { data } = await Api.get<Comments>(`/posts/${postId}/comments`);
      return data;

  } catch (error) {
    return null;
  }
}