import produce, { current } from "immer";
import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import { taskListState } from "../state";
import { TaskItem } from "./item";

export const TaskList: FunctionComponent = () => {
  const [tasks, setTasks] = useRecoilState(taskListState);

  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => {
                setTasks((currentTasks) =>
                  produce(currentTasks, (draft) => {
                    draft[index].completed = !draft[index].completed;
                  }),
                );
              }}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-5">Use the input above to add your first task</p>
      )}
    </div>
  );
};
