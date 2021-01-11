import { FormEventHandler, FunctionComponent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../../components";

import { createTask, taskListState } from "../state";

export const TaskInput: FunctionComponent = () => {
  const [text, setText] = useState("");
  const setTasks = useSetRecoilState(taskListState);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const task = createTask(text);
    setText("");
    setTasks((tasks) => [...tasks, task]);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="w-full flex">
        <input
          type="text"
          placeholder="What's on your mind today?"
          className="border-2 border-blue-200 rounded p-1.5 flex-grow mr-3"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        ></input>

        <Button disabled={text.length === 0}>Add</Button>
      </form>
    </div>
  );
};
