import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useAllUsers = () => {
  const { data, mutate, isLoading, error } = useSWR(
    "/api/user/getAll-Users",
    fetcher
  );
  return { data, mutate, isLoading, error };
};

export default useAllUsers;
