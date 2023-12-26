import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthContextValue, ResponseBody } from "../types/types";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../constants";

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token, handleSetUser } = useContext(AuthContext) as AuthContextValue;

  const navigate = useNavigate();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/auth/me`, {
          signal,
          headers: { authorization: `Bearer ${token}` },
        });
        const result: ResponseBody = await response.json();
        handleSetUser(result.data);
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
    if (token) {
      fetchData();
    } else {
      navigate("/login");
    }

    // Cleanup function to cancel the request if the component is unmounted
    return () => {
      controller.abort();
    };
  }, [token]);
  return {
    isLoading,
    error,
  };
};

export default useGetUser;
