import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm relative ">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain p-1 mr-3 border"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 " />
      </div>

      {/* img */}
      <img className="object-cover w-full  " src={img} alt="" />
      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post </button>
      </form>
    </div>
  );
}

export default Post;
