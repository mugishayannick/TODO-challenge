import { TasksData } from "@/components/TaskGridView";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NewTasksState {
  newTasks: TasksData[];
}

interface NewTasksActions {
  setNewTask: (newTask: TasksData) => void; // updated to add one task at a time
}

export const useNewTaskStore = create<NewTasksState & NewTasksActions>()(
  persist(
    (set) => ({
      newTasks: [],
      setNewTask: (newTask) =>
        set((prevState) => ({
          newTasks: [...prevState.newTasks, newTask], // appending the new task to the array
        })),
    }),
    {
      name: "tasks",
    }
  )
);
