// Core
import React from "react";
import { Checkbox, DefaultButton, Spinner, SpinnerSize } from "@fluentui/react";

export const Task = ({
  label,

  isCompleted,
  isCompletionChangeInProgress,
  markComplete,
  unmarkComplete,

  removeTask,
  isRemovingTaskInProgress
 }) => {
  const onCompletionChanged = (ev: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    if (isChecked) {
      markComplete();
    } else {
      unmarkComplete();
    }
  };

  return (
    <div style={{padding: "10px", border: "1px solid #000", margin: "2px"}}>
      <Checkbox
        label={label}
        checked={isCompleted}
        onChange={onCompletionChanged}
        disabled={isCompletionChangeInProgress}
      />
      {isCompletionChangeInProgress &&
        <Spinner size={SpinnerSize.small} /*style={{float: "left"}}*/ />
      }
      <br/>
      <DefaultButton onClick={removeTask} text={"Delete"} disabled={isRemovingTaskInProgress} />
      {isRemovingTaskInProgress &&
        <Spinner size={SpinnerSize.small} /*style={{float: "left"}}*/ />
      }
    </div>
  )
};
