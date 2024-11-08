import axios from "axios";
export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`https://dummyjson.com/todos/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
