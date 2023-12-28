import { useContext, useEffect, useState } from "react";
import { SERVER_URL } from "../constants";
import { AuthContextValue, ResponseBody } from "../types/types";
import { AuthContext } from "../context/AuthContext";

const useGetPosts = (filterPost: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { token, user } = useContext(AuthContext) as AuthContextValue;

  useEffect(() => {
    const apiUrl =
      filterPost === "myPost" && user
        ? `${SERVER_URL}/post/me/${user.id}`
        : `${SERVER_URL}/post`;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          signal,
          headers: { authorization: `Bearer ${token}` },
        });
        const result: ResponseBody = await response.json();
        if (!response.ok) {
          setError(result.message);
        } else {
          setData(result.data);
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted due to component unmount");
        } else {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if the component is unmounted
    return () => {
      controller.abort();
    };
  }, [filterPost, user]);
  return { data, isLoading, error };
};

export default useGetPosts;
