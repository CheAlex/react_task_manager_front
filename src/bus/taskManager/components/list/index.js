// Core
import React from "react";

// Elements
import { Task } from "../../../../elements/task";

export const List = ({ items, toggleComplete, removeTask }) => {
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
      id={id}
      toggleComplete={() => { toggleComplete(id) }}
      removeTask={() => { removeTask(id) }}
    />
  ));

  return (
    <>
      {listJSX}
    </>
  );
};
