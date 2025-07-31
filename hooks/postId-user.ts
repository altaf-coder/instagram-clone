import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const postIdUser = (postId: string) => {
  const { data, mutate, isLoading, error } = useSWR(
    postId ? `/api/user/${postId}` : null,
    fetcher
  );
  return { data, mutate, isLoading, error };
};

export default postIdUser;
