import { Link } from "react-router-dom";
import { PostType } from "../types/types";
import useGetAUser from "../hooks/useGetAUser";

const Post = ({ data }: { data: PostType }) => {
  const updatedDate = new Date(data.updatedAt);
  const formattedDate = updatedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const { data: user } = useGetAUser(data?.authorId!);
  return (
    <Link
      to={`/post/${data.slug}`}
      className="flex flex-col text-text-dark pt-6"
    >
      <div className="text-sm flex items-center mb-2">
        <span className="mr-2">
          {user?.displayPhoto ? (
            <img
              src={user.displayPhoto}
              alt="profile pix"
              width="24"
              height="24"
              className="rounded-full aspect-square bg-[#ebe4e0] object-cover"
            />
          ) : (
            <span className="h-6 w-6 rounded-full text-white font-bold leading-8 text-sm">
              {user?.username.slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>
        <p className="capitalize">{user?.username}</p>
        <span className="mx-2 border border-black"></span>
        <span className="text-text-light">{formattedDate}</span>
      </div>
      <div className="flex gap-4 md:gap-12">
        <div className="w-full">
          <p className="line-clamp-2 leading-5 font-bold w-full text-ellipsis h-fit md:mb-2">
            {data.title}
          </p>
          <p className="hidden md:!line-clamp-3 leading-6 text-ellipsis h-fit">
            {data.content.replace(/<[^>]+>/g, "")}
          </p>
        </div>
        <span className="flex-none">
          <img
            src={data.image}
            alt="post cover image"
            className="w-20 h-14 md:w-28 md:h-28 object-cover"
          />
        </span>
      </div>
      <div className="flex gap-2 items-center py-4 md:py-8">
        {data.tags.map((tag) => (
          <span
            key={Math.random() + tag + Math.random()}
            className="inline-block py-[2px] rounded-full bg-gray-200 px-2 text-[0.8125rem]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full border"></div>
    </Link>
  );
};

export default Post;
