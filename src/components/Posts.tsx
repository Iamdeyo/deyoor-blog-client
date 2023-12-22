import { SetStateAction, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [filterPost, setFilterPost] = useState<"allPost" | "myPost">("myPost");
  const handleFilterPost = (filter: SetStateAction<"allPost" | "myPost">) => {
    // do other things
    setFilterPost(filter);
  };
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
          <div className="border-b w-full absolute bottom-0 -z-[1] left-0"></div>
        </div>
        <section>
          <Post />
        </section>
      </main>
    </>
  );
};

export default Posts;
