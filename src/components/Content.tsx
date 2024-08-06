import React from "react";
import VisitUsDropdown from "./Dropdown";
import UpvoteButton from "./Upvote";

const Content = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full md:w-3/5 space-y-3">
        <div className="text-2xl font-bold">
          VideoDubber - Fast Video Translator
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-3 md:gap-y-0 md:gap-x-7">
          <div className="font-extralight text-lg sm:text-xl md:text-2xl">
            Translate videos in your own voice, globalize in a click!
          </div>
          <div className="flex gap-x-4">
            <VisitUsDropdown />
            <UpvoteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
