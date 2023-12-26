import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";
import { ResponseBody } from "../types/types";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/post`, { signal });
        const result: ResponseBody = await response.json();
        setData(result.data);
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
  }, []);
  return { data, isLoading, error };
};

export default useGetPosts;
