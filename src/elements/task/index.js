// Core
import React from "react";
import { Checkbox, DefaultButton } from "@fluentui/react";

export const Task = ({ label, isCompleted, removeTask, markComplete, unmarkComplete }) => {
  const onCompletionChanged = (ev: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    if (isChecked) {
      markComplete();
    } else {
      unmarkComplete();
    }
  };

  return (
    <div>
      <Checkbox
        label={label}
        checked={isCompleted}
        onChange={onCompletionChanged}
      />
      <DefaultButton onClick={removeTask} text={"Delete"} />
    </div>
  )
};
