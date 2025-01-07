import { TodoListClassic } from "./classic-way/ui/todo-list";
import { TodoListWithoutProblems } from "./without-problems-way/ui/todo-list";

import { ListRefProvider } from "./without-problems-way/model";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        {/* <TodoListClassic /> */}

        <ListRefProvider data={[]}>
          <TodoListWithoutProblems />
        </ListRefProvider>
      </header>
    </div>
  );
}

export default App;
