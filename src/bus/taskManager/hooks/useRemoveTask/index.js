// API
import { api } from "../../api";

export const useRemoveTask = (fetchTasks) => {
  return async (id) => {
    await api.tasks.remove(id);

    fetchTasks();
  };
};
