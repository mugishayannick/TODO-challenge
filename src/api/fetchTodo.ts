import axios from "axios";

export const fetchTodo = async () => {
  const response = await axios.get("https://dummyjson.com/todos");
  return response.data;
};
