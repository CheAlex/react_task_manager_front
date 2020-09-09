// API
import { api } from "../../api";

export const useCreateTask = (fetchTasks) => {
  return async (task) => {
    await api.tasks.create(task);

    fetchTasks();
  };
};
