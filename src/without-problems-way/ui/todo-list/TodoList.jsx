import { useCallback, memo } from "react";

import { Element } from "./element";
import { Header } from "./header";

import { useListRefContext } from "../../model";
import { updateStore, useManualUpdate } from "../../lib";

export const TodoList = memo(() => {
  useManualUpdate("TodoList");

  const { listRef } = useListRefContext();

  const handleAddElement = useCallback(() => {
    listRef.data.push({ id: Date.now(), count: 0 });

    updateStore.triggerUpdate("TodoList");
  }, []);

  const handleDeleteElement = useCallback((id) => {
    listRef.data = listRef.data.filter((el) => el.id !== id);

    updateStore.triggerUpdate("TodoList");
    updateStore.triggerUpdate(`Header`);
  }, []);

  return (
    <div className="todo-list">
      <Header onAddElement={handleAddElement} />

      {listRef.data.map((el) => (
        <Element key={el.id} id={el.id} onDeleteElement={handleDeleteElement} />
      ))}
    </div>
  );
});
