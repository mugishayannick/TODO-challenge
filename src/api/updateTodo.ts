import axios from "axios";
import { TasksData } from "@/components/TaskGridView";

export const updateTodo = async (
  id: number,
  updatedTodo: Partial<TasksData>
) => {
  const response = await axios.put(
    `https://dummyjson.com/todos/${id}`,
    updatedTodo,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};
