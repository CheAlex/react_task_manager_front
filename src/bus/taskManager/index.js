// Core
import React from "react";
import { Text } from "@fluentui/react";

// Components
import { List } from "./components/list";
import { Create } from "./components/create";

// Hooks
import { useTaskManager } from "./hooks/useTaskManager";
import { useToggleComplete } from "./hooks/useToggleComplete";
import { useRemoveTask } from "./hooks/useRemoveTask";
import { useCreateTask } from "./hooks/useCreateTask";

export const TaskManager = () => {
  const { tasks, fetchTasks } = useTaskManager();
  const toggleComplete = useToggleComplete(fetchTasks);
  const removeTask = useRemoveTask(fetchTasks);
  const createTask = useCreateTask(fetchTasks);

  return (
    <div>
      <Text variant="xLarge">
        Task Manager
      </Text>
      <br />
      <List
        items={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
      <br />
      <br />
      <Create createTask={createTask} />
    </div>
  )
};
