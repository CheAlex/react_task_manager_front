// Core
import React from "react";
import { Checkbox, DefaultButton } from "@fluentui/react";

export const Task = ({ isCompleted, label, toggleComplete, removeTask }) => {
  return (
    <div>
      <Checkbox
        label={label}
        checked={isCompleted}
        onChange={toggleComplete}
      />
      <DefaultButton onClick={removeTask} text={"Delete"} />
    </div>
  )
};
