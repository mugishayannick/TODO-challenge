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
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchTodo } from "@/api/fetchTodo";
import { Task1 } from "@/utils/data/images";
import { useNewTaskStore } from "@/store/useNewTaskStore";
import { FaTrash } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteTodo } from "@/api/deleteTodo";
import toast, { Toaster } from "react-hot-toast";

export type TasksData = {
  completed: boolean;
  todo: string;
  id?: number;
  userId: number;
};

const TaskGridView = () => {
  const [tasks, setTasks] = useState<TasksData[]>([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodo,
  });
  const { mutate: deleteTask } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (response) => {
      console.log(response);
      toast.success("Task deleted successfully!");
    },
  });

  const newTasks = useNewTaskStore((state) => state.newTasks);

  useEffect(() => {
    // Concatenate newTasks to the existing tasks from API
    const combinedTasks = (data?.todos || []).concat(newTasks);
    setTasks(combinedTasks);
  }, [data, newTasks]);

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (isError) {
    return <div>Failed to load tasks.</div>;
  }

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  return (
    <div className="grid grid-cols-4 gap-4 ml-24 mr-36 mt-5">
      {tasks?.map((task, index: number) => (
        <Card
          key={index}
          className={cn(index % 2 === 0 ? "row-span-2" : "row-span-1")}
        >
          {index % 2 === 0 ? (
            <div className="w-full p-6">
              <img
                src={Task1}
                className="w-[inherit] object-cover rounded-lg"
              />
            </div>
          ) : (
            ""
          )}
          <CardHeader className={cn(index % 2 === 0 ? "" : "mt-5")}>
            <span className="bg-orange-50 rounded-lg py-1 px-4 text-md text-orange-300 font-semibold">
              {task.completed ? "Completed" : "In progress"}
            </span>
            <CardDescription>
              <div className="flex gap-1">
                <BsThreeDotsVertical className="size-5 cursor-pointer text-gray-400" />
                <AlertDialog>
                  <AlertDialogTrigger>
                    <FaTrash className="size-5 text-gray-400 cursor-pointer" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your task and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteTask(task.id as number)}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-3 mb-5 border-b">
            <span className="text-xl font-medium tracking-normal">
              {task.todo}
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
      <Toaster />
    </div>
  );
};

export default TaskGridView;
