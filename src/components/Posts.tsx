import { SetStateAction, useContext, useState } from "react";
import Post from "./Post";
import useGetPosts from "../hooks/useGetPosts";
import { AuthContext } from "../context/AuthContext";
import { AuthContextValue } from "../types/types";

const Posts = () => {
  const [filterPost, setFilterPost] = useState<"allPost" | "myPost">("allPost");
  const handleFilterPost = (filter: SetStateAction<"allPost" | "myPost">) => {
    // do other things
    setFilterPost(filter);
  };
  const { data, isLoading, error } = useGetPosts(filterPost);
  const { user } = useContext(AuthContext) as AuthContextValue;
  return (
    <>
      <main className="mx-auto max-w-7xl pt-6 px-2 sm:px-6 lg:px-8">
        <div className="flex relative gap-4 text-sm text-text-light">
          <div
            onClick={() => handleFilterPost("allPost")}
            className={`pb-4 border-b cursor-pointer transition-all ${
              filterPost === "allPost"
                ? "border-b-text-dark text-text-dark"
                : "border-b-transparent"
            }`}
          >
            <p className="hover:text-text-dark">All Post</p>
          </div>
          {user && (
            <div
              onClick={() => handleFilterPost("myPost")}
              className={`pb-4 border-b cursor-pointer transition-all ${
                filterPost === "myPost"
                  ? "border-b-text-dark text-text-dark"
                  : "border-b-transparent"
              }`}
            >
              <p className="hover:text-text-dark">My Post</p>
            </div>
          )}
          <div className="border-b w-full absolute bottom-0 -z-[1] left-0"></div>
        </div>
        <section>
          {data?.map((item) => (
            <div key={item.id}>
              <Post data={item} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Posts;
