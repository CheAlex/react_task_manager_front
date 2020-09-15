// Core
import React from "react";

// Elements
import { Task } from "../../../../elements/task";

export const List = ({ items, markComplete, unmarkComplete, removeTask }) => {
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
    />
  ));

  return (
    <>
      {listJSX}
    </>
  );
};
