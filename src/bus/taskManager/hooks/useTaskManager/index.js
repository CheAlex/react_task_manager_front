// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Other
// import { api } from "../../api";
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.taskManager);
  
  useEffect(() => {
    dispatch(taskManagerActions.fetchTasksAsync());
  }, [dispatch]);

  const createTask = async (task) => {
    // await api.tasks.create(task);
    // fetchTasks();
  }

  const toggleComplete = async (id) => {
    // await api.tasks.toggleComplete(id);
    // fetchTasks();
  }

  const removeTask = async (id) => {
    // await api.tasks.remove(id);
    // fetchTasks();
  };

  // const createTask = async (task) => {}

  // const fetchTasks = async () => {
  //   const tasks = await api.tasks.getAll();
  //
  //   setTasks(tasks);
  // };

  return {
    tasks,
    fetchTasks: () => {},

    createTask: () => {},
    toggleComplete: () => {},
    removeTask: () => {},
  }
};
