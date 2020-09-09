// API
import { api } from "../../api";

export const useToggleComplete = (fetchTasks) => {
  return async (id) => {
    await api.tasks.toggleComplete(id);

    fetchTasks();
  };
};
