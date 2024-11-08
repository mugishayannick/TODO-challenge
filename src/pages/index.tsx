import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNavigation from "@/components/TopNavigation";
import TaskOverview from "@/components/TaskOverview";
import ProjectOverview from "@/components/ProjectOverview";
import { SlLockOpen } from "react-icons/sl";
import BreadCrumb from "@/components/common/BreadCrumb";
import { IoIosArrowDown } from "react-icons/io";
import AvatarGroup from "@/components/common/AvatarGroup";
import { GoPlus } from "react-icons/go";
import { RiLinkM } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";
import { MdOutlineWidgets } from "react-icons/md";

const ProjectDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 w-full">
      <Sidebar />
      <TopNavigation />

      <div className="relative flex-1 p-6 sm:p-7 overflow-y-auto">
        <div className="flex flex-wrap pl-24 pr-0 xl:pr-[360px] 2xl:pr-[390px] pt-28 justify-between">
          <div className="space-y-4">
            <BreadCrumb />
            <h1 className="text-3xl font-bold tracking-wide leading-loose">
              Website Design
            </h1>
          </div>
          <div className="py-4 sm:py-0">
            <h4 className="text-left md:text-right">From 23 April</h4>
            <span className="inline-block mr-3 size-3 rounded-full bg-green-400"></span>
            <span className="text-gray-400">Updated 12 min ago</span>
          </div>
        </div>
        <div className="flex flex-wrap space-y-6 sm:space-y-0 mt-4 pl-24 pr-0 xl:pr-[360px] 2xl:pr-[390px] items-center justify-between">
          <div className="flex flex-wrap sm:divide-x-2 sm:divide-gray-400">
            <div className="flex gap-3 items-center pr-5 pb-6 sm:pb-0">
              <SlLockOpen className="size-6 text-gray-400" />
              <span>Limited Access</span>
              <IoIosArrowDown className="size-6 text-gray-400" />
            </div>
            <div className="flex gap-6 items-center sm:pl-5">
              <AvatarGroup />
              <span className="flex mx-auto bg-purple-600 size-10 select-none items-center justify-center rounded-full align-middle">
                <GoPlus className="text-white rounded-[inherit] cursor-pointer size-7" />
              </span>
            </div>
          </div>
          <div className="flex items-center divide-x-2 divide-gray-400">
            <RiLinkM className="size-6 text-purple-600 cursor-pointer mr-5" />
            <div className="flex items-center pl-5 gap-3">
              <span className="p-2 rounded-xl bg-purple-600">
                <FaEquals className="size-6 text-white" />
              </span>
              <MdOutlineWidgets className="size-6" />
            </div>
          </div>
        </div>

        <TaskOverview />
      </div>

      <ProjectOverview />
    </div>
  );
};

export default ProjectDashboard;
