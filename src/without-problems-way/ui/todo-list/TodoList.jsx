import { useCallback, useState } from "react";

import { Element } from "./element";
import { Header } from "./header";

export function TodoList() {
  const [list, setList] = useState([]);

  const handleAddElement = useCallback(() => {
    setList((prev) => [...prev, { id: Date.now(), count: 0 }]);
  }, []);

  const handleDeleteElement = useCallback((id) => {
    setList((prev) => prev.filter((el) => el.id !== id));
  }, []);

  const handleChangeCount = useCallback((id, value) => {
    setList((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return { ...el, count: el.count + value };
        }

        return el;
      })
    );
  }, []);

  const handleGetTotalCount = useCallback(() => {
    return list.reduce((acc, curr) => (acc += curr.count), 0);
  }, [list]);

  return (
    <div className="todo-list">
      <Header
        onChangeTotalCount={handleGetTotalCount}
        onAddElement={handleAddElement}
      />

      {list.map((el) => (
        <Element
          key={el.id}
          id={el.id}
          count={el.count}
          onChangeCount={handleChangeCount}
          onDeleteElement={handleDeleteElement}
        />
      ))}
    </div>
  );
}
