// Core
import React from "react";
import { useEffect, useState } from "react";
import { Checkbox, DefaultButton } from "@fluentui/react";

// API
import { api } from "../../bus/taskManager/api/index";

export const Task = ({ id, isCompleted, label, toggleComplete, removeTask }) => {
  // const [isCompletedState, setIsCompletedState] = useState(isCompleted);
  //
  // function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  //   console.log(`The option has been changed to ${isChecked}.`);
  //   // setIsCompletedState(!isChecked);
  //
  //   (async () => {
  //     await api.tasks.toggleComplete(id);
  //   })();
  // }

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //
  //   // Указываем, как сбросить этот эффект:
  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

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
