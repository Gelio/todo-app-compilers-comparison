import { FunctionComponent } from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../components";
import { taskListState } from "./state";

export const RemoveDoneTasksButton: FunctionComponent = () => {
  const setTasks = useSetRecoilState(taskListState);

  return (
    <Button
      className="w-full"
      onClick={() =>
        setTasks((tasks) => tasks.filter((task) => !task.completed))
      }
    >
      Remove done tasks
    </Button>
  );
};
