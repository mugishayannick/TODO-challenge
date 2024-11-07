import RandomLogo from "@/assets/logo/logoAcademi.webp";
import { GoHome, GoPlus } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegFileLines } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import { LuFileLineChart } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 z-20 left-0 flex flex-col w-24 bg-white dark:bg-gray-900 h-screen py-5 shadow-sm">
      <img src={RandomLogo} alt="logo" className="size-16 mx-auto" />
      <div className="mt-11">
        <ul className="space-y-7">
          <li className="relative rounded-sm p-2">
            <span className="absolute inset-0 h-11 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg z-50"></span>
            <span className="absolute inset-0 h-11 w-9 bg-gradient-to-r from-purple-100 to-white z-10"></span>
            <GoHome className="text-purple-600 size-7 mx-auto cursor-pointer" />
          </li>
          <li>
            <HiOutlineMail className="text-gray-400 size-7 mx-auto cursor-pointer" />
          </li>
          <li>
            <FaRegFileLines className="text-gray-400 size-7 mx-auto cursor-pointer" />
          </li>
          <li>
            <GrDocument className="text-gray-400 size-7 mx-auto cursor-pointer" />
          </li>
          <li>
            <LuFileLineChart className="text-gray-400 size-7 mx-auto cursor-pointer" />
          </li>
        </ul>
        <div className="mt-11 py-9 space-y-4 w-full border-y-2 border-gray-200">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Avatar
                key={index}
                className="block size-10 mx-auto select-none items-center justify-center overflow-hidden rounded-full align-middle"
              >
                <AvatarImage
                  className="size-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          <span className="flex mx-auto border border-gray-400 border-dashed size-10 select-none items-center justify-center rounded-full align-middle">
            <GoPlus className="text-gray-400 rounded-[inherit]  cursor-pointer size-7" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-auto mx-auto">
        <span>
          <IoSettingsOutline className="text-gray-400 size-7 cursor-pointer" />
        </span>
        <span>
          <CgProfile className="text-gray-400 size-7 cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
