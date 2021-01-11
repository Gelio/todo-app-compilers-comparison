import { Task } from "./types";

const key = "tasks";

export const getTasksFromStorage = (): Task[] => {
  const rawTasks = localStorage.getItem(key);

  if (rawTasks === null) {
    return [];
  }

  let tasks: Task[];
  try {
    tasks = JSON.parse(rawTasks);
  } catch (error) {
    console.error("Error when parsing tasks", error);
    return [];
  }

  if (!Array.isArray(tasks)) {
    return [];
  }

  return tasks;
};

export const saveTasksToStorage = (tasks: Task[]) => {
  localStorage.setItem(key, JSON.stringify(tasks));
};
