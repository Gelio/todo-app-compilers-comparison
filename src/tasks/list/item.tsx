import { FunctionComponent } from "react";

import { Task } from "../types";

export interface TaskItemProps {
  task: Task;
  onToggle: () => void;
}

export const TaskItem: FunctionComponent<TaskItemProps> = ({
  task,
  onToggle,
}) => {
  return (
    <li className="my-2 flex items-center">
      <CheckCircle checked={task.completed} onClick={onToggle} />
      <p className={`ml-2 flex-1 ${task.completed ? "line-through" : ""}`}>
        {task.text}
      </p>
    </li>
  );
};

const CheckCircle: FunctionComponent<{
  checked: boolean;
  onClick: () => void;
}> = ({ checked, onClick }) => {
  return (
    <button
      className="w-8 h-8 border border-blue-200 hover:border-blue-400 rounded-full p-0.5 focus:outline-none focus:ring"
      onClick={onClick}
    >
      {checked && (
        <img src="./icons/check.svg" alt="Task completed. Click to uncheck" />
      )}
    </button>
  );
};
