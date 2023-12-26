import { PostType } from "../types/types";

const Post = ({ data }: { data: PostType }) => {
  return (
    <div className="flex flex-col text-text-dark pt-6">
      <div className="text-sm flex items-center mb-2">
        <span className="mr-2">
          <img
            src="https://miro.medium.com/v2/resize:fill:24:24/1*AOZn6yl67fqJ3rpfKwJK6w.jpeg"
            alt="profile-pix"
            className="object-cover w-6 h-6 rounded-full"
          />
        </span>
        <p>Jason Yip</p>
        <span className="mx-2 border border-black"></span>
        <span className="text-text-light">Oct 5, 2022</span>
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
    </div>
  );
};

export default Post;
