// Core
import { useEffect, useState } from "react";

// API
import { api } from "../../api";

export const useTaskManager = () => {
  const [ tasks, setTasks] = useState([]);
  
  useEffect(() => {
    (async () => {
      const tasks = await api.tasks.getAll();

      setTasks(tasks);
    })();
  }, []);
  
  const fetchTasks = async () => {
    const tasks = await api.tasks.getAll();

    console.log(tasks);

    setTasks(tasks);
  };

  return {
    tasks,
    fetchTasks
  }
};
