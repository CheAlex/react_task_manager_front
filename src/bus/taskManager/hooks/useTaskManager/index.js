// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Other
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.taskManager);
  
  useEffect(() => {
    dispatch(taskManagerActions.fetchTasksAsync());
  }, [dispatch]);

  const markComplete = (id) => {
    dispatch(taskManagerActions.markCompleteAsync(id));
  };

  const unmarkComplete = (id) => {
    dispatch(taskManagerActions.unmarkCompleteAsync(id));
  };

  const removeTask = (id) => {
    dispatch(taskManagerActions.removeAsync(id));
  };

  const createTask = (task) => {
    dispatch(taskManagerActions.createAsync(task));
  };

  return {
    tasks,
    markComplete,
    unmarkComplete,
    removeTask,
    createTask,
  }
};
