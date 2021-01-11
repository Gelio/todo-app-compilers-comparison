import { RecoilRoot } from "recoil";
import { RemoveDoneTasksButton, TaskInput, TaskList } from "./tasks";

export function App() {
  return (
    <RecoilRoot>
      <div className="container mx-auto mt-16 px-3">
        <div className="mb-4">
          <TaskInput />
        </div>
        <div className="w-48 mx-auto">
          <RemoveDoneTasksButton />
        </div>

        <TaskList />
      </div>
    </RecoilRoot>
  );
}
