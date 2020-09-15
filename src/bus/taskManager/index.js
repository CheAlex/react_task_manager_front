// Core
import React from "react";
import { Text } from "@fluentui/react";

// Components
import { List } from "./components/list";
import { Create } from "./components/create";

// Hooks
import { useTaskManager } from "./hooks/useTaskManager";

export const TaskManager = () => {
  const {
    tasks,
    markComplete,
    unmarkComplete,
    removeTask,
    createTask
  } = useTaskManager();

  return (
    <div>
      <Text variant="xLarge">
        Task Manager
      </Text>
      <br />
      <List
        items={tasks}
        markComplete={markComplete}
        unmarkComplete={unmarkComplete}
        removeTask={removeTask}
      />
      <br />
      <br />
      <Create createTask={createTask} />
    </div>
  )
};
