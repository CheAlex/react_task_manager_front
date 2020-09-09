// Core
import React, {useState} from "react";

// Elements
import { Text, TextField, Checkbox, DefaultButton } from "@fluentui/react";

export const Create = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onChangeTitle = (event: React.FormEvent<HTMLInputElement>, newValue?: string) => {
    setTitle(newValue);
  };

  const onChangeIsCompleted = (event: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    setIsCompleted(isChecked);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isDataValid()) {
      createTask({
        title,
        isCompleted
      });
    }
  };

  const isDataValid = () => {
    return 0 < title.length;
  };

  return (
    <>
      <Text>Create task</Text>
      <form onSubmit={onSubmit}>
        <TextField
          label="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <Checkbox
          label="Is completed"
          checked={isCompleted}
          onChange={onChangeIsCompleted}
        />
        <DefaultButton type="submit" text="Create" />
      </form>
    </>
  );
};
