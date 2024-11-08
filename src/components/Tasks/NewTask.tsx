import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoPlus } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addTodo } from "@/api/addTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { useTasksStore } from "@/store/useTasksStore";

const NewTaskModal = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);
  const setNewTasks = useTasksStore((state) => state.setNewTask);
  const { mutate: addTask } = useMutation({
    mutationFn: addTodo,
    onSuccess: (response) => {
      // Invalidate and refetch tasks data
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      setTaskName("");
      setCompleted(false);
      setNewTasks(response);
    },
  });

  const handleAddTask = () => {
    addTask({ todo: taskName, completed: completed, userId: 5 });
    setOpen(false);
    toast.success("Task added successfully", {
      position: "top-center",
      className: "z-50 bg-green-500",
    });
  };

  return (
    <div className="w-full md:w-auto">
      <button
        onClick={() => setOpen(true)}
        className="w-[inherit] justify-center md:justify-start flex border rounded-lg py-2 px-4 items-center gap-3"
      >
        <GoPlus className="hidden md:block size-6 text-gray-400" />
        <span>New Task</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button style={{ display: "none" }} />
        </DialogTrigger>

        <DialogContent className="max-w-lg p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-gray-800 dark:text-gray-100">
              Add New Task
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Task Name
              </label>
              <input
                type="text"
                className="mt-1 px-2 py-2 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
              />
            </div>

            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  value === "true" ? setCompleted(true) : setCompleted(false)
                }
              >
                <SelectTrigger className="w-[inherit]">
                  <SelectValue placeholder="Completed" />
                </SelectTrigger>
                <SelectContent className="dark:border-gray-500">
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="space-x-2 mt-6">
            <DialogClose asChild>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500">
                Cancel
              </button>
            </DialogClose>
            <button
              onClick={handleAddTask}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Add Task
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
};

export default NewTaskModal;
