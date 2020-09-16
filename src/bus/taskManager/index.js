// Core
import React from "react";
import {
  Text,
  Spinner,
  SpinnerSize,
} from '@fluentui/react';

// Components
import { List } from "./components/list";
import { Create } from "./components/create";

// Hooks
import { useTaskManager } from "./hooks/useTaskManager";

// Other
import dotProp from "dot-prop-immutable";

export const TaskManager = () => {
  const {
    tasks,
    currentActions,
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
        currentActions={currentActions}
        markComplete={markComplete}
        unmarkComplete={unmarkComplete}
        removeTask={removeTask}
      />
      <br />
      <br />
      <Create
        createTask={createTask}
        isCreatingTaskInProgress={!!dotProp.get(currentActions, `create`)}
      />
      {!!dotProp.get(currentActions, `fetchTasks`) &&
        <Spinner size={SpinnerSize.large} style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}} />
      }
    </div>
  )
};
