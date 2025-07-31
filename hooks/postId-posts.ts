import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const postIdPosts = (postId: string) => {
  const { data, mutate, isLoading, error } = useSWR(
    postId ? `/api/post/${postId}` : null,
    fetcher
  );
  return { data, mutate, isLoading, error };
};

export default postIdPosts;
