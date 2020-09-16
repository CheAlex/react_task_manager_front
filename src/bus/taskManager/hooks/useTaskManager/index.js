// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Other
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
  const dispatch = useDispatch();
  const { tasks, currentActions } = useSelector((state) => state.taskManager);

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

  const createTask = async (task) => {
    return dispatch(taskManagerActions.createAsync(task));
  };

  return {
    tasks,
    currentActions,
    markComplete,
    unmarkComplete,
    removeTask,
    createTask,
  }
};
