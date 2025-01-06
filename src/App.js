import { TodoList } from "./classic-way/ui/todo-list";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
