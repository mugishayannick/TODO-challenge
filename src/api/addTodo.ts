import { TasksData } from "@/components/TaskGridView";
import axios from "axios";

export const addTodo = async (newTodo: TasksData) => {
  const response = await axios.post(
    "https://dummyjson.com/todos/add",
    newTodo,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};
