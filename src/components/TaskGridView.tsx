import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BsThreeDotsVertical } from "react-icons/bs";
import AvatarGroup from "./common/AvatarGroup";
import { AiOutlineMessage } from "react-icons/ai";
import { Tasks } from "@/utils/data/dummyTasks";
import { cn } from "@/lib/utils";

const TaskGridView = () => {
  return (
    <div className="grid grid-cols-4 gap-4 ml-24 mr-36 mt-5">
      {Tasks.map((task) => (
        <Card
          key={task.id}
          className={cn(task.imageUrl ? "row-span-2" : "row-span-1")}
        >
          {task.imageUrl ? (
            <div className="w-full p-6">
              <img
                src={task.imageUrl}
                className="w-[inherit] object-cover rounded-lg"
              />
            </div>
          ) : (
            ""
          )}
          <CardHeader className={cn(task.imageUrl ? "" : "mt-5")}>
            <span className="bg-orange-50 rounded-lg py-1 px-4 text-md text-orange-300 font-semibold">
              {task.status}
            </span>
            <CardDescription>
              <BsThreeDotsVertical className="size-5 cursor-pointer text-gray-400" />
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-3 mb-5 border-b">
            <span className="text-xl font-medium tracking-normal">
              {task.name}
            </span>
            <span className="block mt-1 text-sm font-medium text-gray-400 tracking-normal">
              Landing page ui
            </span>
          </CardContent>
          <CardFooter>
            <AvatarGroup avatarSize={7} />
            <div className="inline-flex items-center gap-1.5">
              <AiOutlineMessage className="size-6 text-gray-400" />
              <span className="text-gray-400">3</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TaskGridView;
