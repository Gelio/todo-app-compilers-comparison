import { FunctionComponent, useCallback } from "react";
import { selector, useRecoilState, useSetRecoilState } from "recoil";
import { Button } from "../components";
import { taskListState } from "./state";

export const RemoveDoneTasksButton: FunctionComponent = () => {
  const [tasks, setTasks] = useRecoilState(taskListState);

  const completedTasks = tasks.filter((task) => task.completed);

  const removeCompletedTasks = useCallback(
    () => setTasks((t) => t.filter((task) => !task.completed)),
    [setTasks],
  );

  return (
    <Button
      className="w-full"
      disabled={completedTasks.length === 0}
      onClick={removeCompletedTasks}
    >
      Remove done tasks
    </Button>
  );
};
