// Core
import React from "react";

// Elements
import { Task } from "../../../../elements/task";

// Other
import dotProp from "dot-prop-immutable";

export const List = ({ items, currentActions, markComplete, unmarkComplete, removeTask }) => {
  const listJSX = items.map((
    {
      id,
      title,
      isCompleted
    }
  ) => (
    <Task 
      key={id}
      label={title}
      isCompleted={isCompleted}
      removeTask={() => { removeTask(id) }}
      markComplete={() => { markComplete(id) }}
      unmarkComplete={() => { unmarkComplete(id) }}
      isCompletionChangeInProgress={!!dotProp.get(currentActions, `completionChange.${id}`)}
      isRemovingTaskInProgress={!!dotProp.get(currentActions, `remove.${id}`)}
    />
  ));

  return (
    <>
      {listJSX}
    </>
  );
};
