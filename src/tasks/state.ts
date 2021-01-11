import { atom, DefaultValue } from "recoil";
import { getTasksFromStorage, saveTasksToStorage } from "./storage";
import { Task } from "./types";

export const taskListState = atom<Task[]>({
  key: "taskListState",
  default: getTasksFromStorage(),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newTasks) => {
        if (!(newTasks instanceof DefaultValue)) {
          saveTasksToStorage(newTasks);
        }
      });
    },
  ],
});

export const createTask = (text: string): Task => ({
  text,
  id: `${Date.now()}-${Math.random()}`,
  completed: false,
});
