import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useAllPost = () => {
  const { data, mutate, isLoading, error } = useSWR(
    "/api/post/all-posts",
    fetcher
  );
  return { data, mutate, isLoading, error };
};

export default useAllPost;
