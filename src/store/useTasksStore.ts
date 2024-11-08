import { TasksData } from "@/components/TaskGridView";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface tasksState {
  allTasks: TasksData[];
  newTasks: TasksData[];
}

interface tasksActions {
  setNewTask: (newTask: TasksData) => void;
  setAllTasks: (tasks: TasksData[]) => void;
}

export const useTasksStore = create<tasksState & tasksActions>()(
  persist(
    (set) => ({
      allTasks: [],
      newTasks: [],
      setNewTask: (newTask) =>
        set((prevState) => ({
          newTasks: [...prevState.newTasks, newTask],
        })),
      setAllTasks(tasks) {
        set({
          allTasks: tasks,
        });
      },
    }),
    {
      name: "tasks",
    }
  )
);
