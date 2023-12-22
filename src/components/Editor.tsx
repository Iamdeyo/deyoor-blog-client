import { useState } from "react";
import TipTapEditor from "./editor/TipTapEditor";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Editor = () => {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [coverImg, setCoverImg] = useState<any>(null);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const addTag = () => {
    if (tag.length > 1) {
      if (tag.trim() !== "") {
        setTags([...tags, tag.trim()]);
        setTag(""); // Clear the input after adding a tag
      }
    }
  };
  const handleSetContent = (content: string) => {
    setContent(content);
  };
  return (
    <>
      <div className="pb-10 bg-white">
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {" "}
          Title{" "}
        </label>
        <div className="title-container relative w-full h-fit">
          <h1 className="w-full m-0 htitle">{title}</h1>
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
            autoFocus
            className="w-full h-full absolute left-0 top-0 bottom-0 right-0 bg-transparent resize-none outline-none px-2 border-0 m-0 p-0"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {" "}
            Tags{" "}
          </label>
          <div className="mt-2 flex flex-wrap px-2 items-center border-0 ring-1 ring-inset rounded-md py-1.5 gap-4 min-h-[2.5rem] hover:ring-pri-hover focus-within:ring-2   focus-within:ring-pri transition-all duration-300">
            {tags.map((tg, i) => (
              <div
                key={i}
                className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 gap-2"
              >
                <span>{tg}</span>
                <span
                  onClick={() => removeTag(tg)}
                  className="text-red-300 hover:text-red-500 cursor-pointer"
                >
                  <MinusCircleIcon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
            ))}

            <input
              type="text"
              id="tags"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              className="flex-1 outline-none focus:border-b-text-dark text-text-dark "
              placeholder="Tags"
            />
            <button
              className="hover:text-green-400 focus:text-green-500 text-green-300"
              onClick={addTag}
            >
              <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="tiptap-editor">
          <TipTapEditor content={content} handleSetContent={handleSetContent} />
        </div>

        <div className="mt-4 w-full relative flex gap-4 items-center">
          {coverImg && (
            <div className="aspect-video max-w-[200px]">
              <img
                src={URL.createObjectURL(coverImg)}
                alt="cover photo"
                className="w-full h-full object-scale-down"
              />
            </div>
          )}
          <label
            htmlFor="cover-photo"
            className="block text-sm h-10 leading-9 font-medium border-0 ring-1 w-fit px-2 rounded-md hover:ring-pri-hover ring-inset transition-all duration-300 focus:ring-2 focus:ring-pri active:ring-pri text-gray-900 cursor-pointer"
          >
            {coverImg ? <span>Change</span> : <span>Add a cover photo</span>}
            <input
              type="file"
              name="cover-photo"
              id="cover-photo"
              onChange={(e) => setCoverImg(e.target.files && e.target.files[0])}
              accept="image/png, image/jpeg, image/gif"
              className="absolute left-0 top-0 opacity-0 w-full h-full "
            />
          </label>
          {coverImg && (
            <button
              className="text-red-400 hover:text-red-500 ring-inset ring-1 ring-transparent border-0 hover:ring-red-500 rounded-md focus:ring-2 focus:ring-red-500 relative font-medium  text-sm h-10 leading-9 px-2 transition-all duration-300"
              onClick={() => setCoverImg(null)}
            >
              Remove
            </button>
          )}
        </div>

        <button
          className=" px-3 py-2 w-full sm:max-w-[120px] text-center bg-pri mt-10 text-white rounded-md hover:bg-pri-hover"
          onClick={() => console.log(content)}
        >
          save
        </button>

        {/* drag & drop */}
        {/* <div className="mb-10 relative w-full aspect-video">
          <label
            htmlFor="coverPhoto"
            className="w-full h-full absolute top-0 left-0  border-4 border-dashed rounded-xl flex justify-center items-center gap-2 flex-col text-text-light"
          >
            <p className="text-xl">Upload a cover photo</p>
            <span className="w-10 inline-block">
              <PhotoIcon />
            </span>
            <p>
              Drag & Drop or{" "}
              <span className="text-pri underline font-medium">Browse</span>
            </p>
            <p className="text-sm">Supports: JPEG, JPG, & PNG</p>
          </label>
          <input
            type="file"
            name="coverPhoto"
            id="coverPhoto"
            className="absolute left-0 top-0 opacity-0 w-full h-full"
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Xy9WLepJJhB3EIn-QsiwOg.jpeg"
            alt="coverPhoto"
            className="w-full absolute left-0 top-0 h-full object-cover"
          />
          <button className="absolute top-4 right-4 w-10 text-red-400 hover:text-red-500">
            <MinusCircleIcon />
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Editor;
