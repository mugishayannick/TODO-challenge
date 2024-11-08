import React from "react";
import { PiCalendarDots } from "react-icons/pi";
import AvatarGroup from "./common/AvatarGroup";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical, BsExclamationCircle } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const ProjectOverview: React.FC = () => {
  return (
    <div className="fixed right-0 hidden xl:block 2xl:w-[390px] bg-white dark:bg-gray-900 z-30 h-full pt-9 px-7 shadow-md">
      <div className="flex justify-between">
        <span className="text-md font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Project Overview
        </span>
        <span className="text-md text-gray-400">See all</span>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 relative mt-4 pt-6 pb-9 pl-8  rounded-lg space-y-5">
        <span className="absolute top-1/2 translate-y-[-50%] rounded-tr-lg rounded-br-lg left-0 h-28 w-1.5 bg-purple-800"></span>
        <div className="flex gap-6">
          <div className="flex items-center gap-1.5">
            <PiCalendarDots className="size-5 text-gray-400" />
            <span className="text-gray-400 text-base">Timeline:</span>
          </div>
          <span className="text-gray-400">Apr 14 - May 7</span>
        </div>
        <div className="flex gap-11">
          <div className="flex items-center gap-1.5">
            <PiCalendarDots className="size-5 text-gray-400" />
            <span className="text-gray-400 text-base">Team:</span>
          </div>
          <div className="space-y-2">
            <AvatarGroup avatarSize={7} />
            <img
              alt="Avatar"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              className="inline-block size-7 rounded-full ring-2 ring-white"
            />
            <img
              alt="Avatar"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block size-7 rounded-full ring-2 ring-white"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center gap-1.5">
            <CiStar className="size-5 text-gray-400" />
            <span className="text-gray-400 text-base">Status:</span>
          </div>
          <span className="text-gray-400">In progress</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex px-1 py-5 items-center justify-between shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-medium">TeamChat</span>
            <span className="text-gray-400">24 April 2023</span>
          </div>
          <BsThreeDotsVertical className="size-5 cursor-pointer text-gray-400" />
        </div>
      </div>
      <div className="py-6 max-h-[390px] overflow-auto space-y-5">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-5",
                index % 2 === 0 ? "flex-row-reverse" : ""
              )}
            >
              <img
                alt="Avatar"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block size-9 rounded-full ring-2 ring-white"
              />
              <div className="w-full">
                <div className="space-x-1">
                  <span className="text-xl font-medium">Devid Mackurat</span>
                  <span className="text-sm text-gray-400">12:33 AM</span>
                </div>
                <div className="flex justify-between bg-gray-100 dark:bg-gray-700 py-5 px-4 mt-3 rounded-lg flex-1">
                  <span>Have a great working week!</span>
                  {index === 1 && (
                    <BsExclamationCircle className="size-4 text-purple-700" />
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-2 relative group">
        <input
          placeholder="Your messages.."
          className="w-full bg-gray-100 dark:bg-gray-700 px-5 py-4 rounded-lg group-hover:cursor-pointer"
          type="text"
        />
        <div className="absolute translate-y-[-50%] top-1/2 right-5 flex group-hover:cursor-pointer">
          <MdOutlineKeyboardVoice className="size-7 mr-2  text-gray-400 " />
          <FiSend className="size-8 pl-2 stroke-purple-800 border-l-2 border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
