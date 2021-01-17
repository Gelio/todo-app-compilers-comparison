import { RecoilRoot } from "recoil";
import { RemoveDoneTasksButton, TaskInput, TaskList } from "./tasks";

export function App() {
  return (
    <RecoilRoot>
      <div className="flex flex-col w-full h-full">
        <div className="container mx-auto pt-16 px-3 h-full overflow-hidden flex-grow flex flex-col">
          <div className="mb-4">
            <TaskInput />
          </div>
          <div className="w-48 mx-auto">
            <RemoveDoneTasksButton />
          </div>

          <div className="overflow-y-auto flex-grow px-1 mt-5">
            <TaskList />
          </div>
        </div>

        <div className="my-4 ml-2">Compiled using snowpack</div>
      </div>
    </RecoilRoot>
  );
}
