// Core
import { useEffect, useState } from "react";

// API
import { api } from "../../api";

export const useToggleComplete = (fetchTasks) => {
  return async (id) => {
    await api.tasks.toggleComplete(id);

    fetchTasks();
  };
  
  // useEffect(() => {
  //   (async () => {
  //     const tasks = await api.tasks.getAll();
  //
  //     setTasks(tasks);
  //   })();
  // }, []);
  //
  // return {
  //   tasks,
  // }
};
