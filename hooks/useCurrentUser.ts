import fetcher from "@/lib/fetcher";
import useSWR from "swr";
const useCurrentUser = () => {
  const { data, mutate, isLoading, error } = useSWR("/api/current", fetcher);
  return { data, mutate, isLoading, error };
};

export default useCurrentUser;
