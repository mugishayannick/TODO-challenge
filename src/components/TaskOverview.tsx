import React from "react";
import { VscListFilter } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import TaskGridView from "./TaskGridView";
import NewTaskModal from "./NewTask";

const ITEM_TABS = [
  {
    itemName: "All Tasks",
    itemCount: 23,
  },
  {
    itemName: "All Tasks",
    itemCount: 3,
  },
  {
    itemName: "In Progress",
    itemCount: 6,
  },
  {
    itemName: "Completed",
    itemCount: 14,
  },
] as const;

const TaskOverview: React.FC = () => {
  return (
    <div className="mt-9">
      <div className="flex ml-24 mr-[390px] h-full justify-between rounded-xl bg-white dark:bg-gray-900">
        <div className="px-4">
          <ul className="inline-flex gap-5 h-full">
            {ITEM_TABS.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "relative py-6",
                  index === 0 ? "text-purple-600" : ""
                )}
              >
                <span className="mr-2">{item.itemName}</span>
                <span
                  className={cn(
                    "px-3 py-1.5 rounded-lg bg-gray-100 text-gray-400",
                    index === 0 ? "text-purple-600 bg-purple-50" : ""
                  )}
                >
                  {item.itemCount}
                </span>
                {index === 0 ? (
                  <span className="absolute rounded-t-lg bottom-0 left-0 w-full h-1.5 bg-purple-600"></span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 p-4">
          <button className="flex border rounded-lg py-2 px-4 gap-3">
            <VscListFilter className="size-6 text-gray-400" />
            <span>Filter & Sort</span>
          </button>
          <NewTaskModal />
        </div>
      </div>
      <TaskGridView />
    </div>
  );
};

export default TaskOverview;
