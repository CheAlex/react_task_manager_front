// Core
import { useEffect, useState } from "react";

// API
import { api } from "../../api";

export const useRemoveTask = (fetchTasks) => {
  return async (id) => {
    await api.tasks.remove(id);

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
