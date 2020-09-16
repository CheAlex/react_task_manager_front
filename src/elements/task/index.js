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
    <div style={{padding: "10px", border: "1px solid #000", margin: "2px", overflow: "auto"}}>
      <Checkbox
        label={label}
        checked={isCompleted}
        onChange={onCompletionChanged}
        disabled={isCompletionChangeInProgress}
        styles={{root: {float: "left"}}}
      />
      {isCompletionChangeInProgress &&
        <Spinner size={SpinnerSize.small} style={{float: "left"}} />
      }
      <br style={{clear: "both"}} />
      <DefaultButton onClick={removeTask} text={"Delete"} disabled={isRemovingTaskInProgress} style={{float: "left"}} />
      {isRemovingTaskInProgress &&
        <Spinner size={SpinnerSize.large} style={{float: "left"}} />
      }
    </div>
  )
};
