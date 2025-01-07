import { useCallback, memo } from "react";

import { useListRefContext } from "../../../model";
import { updateStore, useManualUpdate } from "../../../lib";

export const Element = memo(({ id, onDeleteElement }) => {
  useManualUpdate(`Element-${id}`);

  const { listRef } = useListRefContext();

  const getCount = useCallback(() => {
    return listRef.data.find((el) => el.id === id)?.count;
  }, []);

  const handleChangeCount = useCallback((id, value) => {
    listRef.data.forEach((el) => {
      if (el.id === id) {
        el.count += value;
      }
    });

    updateStore.triggerUpdate(`Element-${id}`);
    updateStore.triggerUpdate(`Header`);
  }, []);

  const handlePlusOne = useCallback(() => {
    handleChangeCount(id, 1);
  }, [id, handleChangeCount]);

  const handleMinusOne = useCallback(() => {
    handleChangeCount(id, -1);
  }, [id, handleChangeCount]);

  const handleDeleteElement = useCallback(() => {
    onDeleteElement(id);
  }, [id, onDeleteElement]);

  return (
    <div className="element">
      <div className="element__count">{getCount()}</div>

      <button className="element__plus" onClick={handlePlusOne}>
        +
      </button>
      <button className="element__minus" onClick={handleMinusOne}>
        -
      </button>

      <button className="element__delete" onClick={handleDeleteElement}>
        delete
      </button>
    </div>
  );
});
