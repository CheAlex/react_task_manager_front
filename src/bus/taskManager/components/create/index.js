// Core
import React, {useState} from "react";

// Elements
import { Text, TextField, Checkbox, DefaultButton, Spinner, SpinnerSize } from "@fluentui/react";

export const Create = ({ createTask, isCreatingTaskInProgress }) => {
  // @todo: можно вынести state отсюда в redux, но не сейчас :)

  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onChangeTitle = (event: React.FormEvent<HTMLInputElement>, newValue?: string) => {
    setTitle(newValue);
  };

  const onChangeIsCompleted = (event: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    setIsCompleted(isChecked);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isDataValid()) {
      await createTask({
        title,
        isCompleted
      });

      setTitle('');
      setIsCompleted(false);
    }
  };

  const isDataValid = () => {
    return 0 < title.length;
  };

  return (
    <div style={{padding: "10px", border: "1px solid #000", margin: "2px", overflow: "auto"}}>
      <Text>Create task</Text>
      <form onSubmit={onSubmit}>
        <TextField
          label="Title"
          onChange={onChangeTitle}
          value={title}
          disabled={isCreatingTaskInProgress}
        />
        <Checkbox
          label="Is completed"
          checked={isCompleted}
          onChange={onChangeIsCompleted}
          disabled={isCreatingTaskInProgress}
        />
        <DefaultButton type="submit" text="Create" disabled={isCreatingTaskInProgress} style={{float: "left"}} />
        {isCreatingTaskInProgress &&
          <Spinner size={SpinnerSize.large} style={{float: "left"}} />
        }
      </form>
    </div>
  );
};
