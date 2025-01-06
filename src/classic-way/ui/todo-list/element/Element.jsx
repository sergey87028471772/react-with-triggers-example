import { useCallback } from "react";

export function Element({ id, count, onDeleteElement, onChangeCount }) {
  const handleDeleteElement = useCallback(() => {
    onDeleteElement(id);
  }, [id, onDeleteElement]);

  const handlePlusOne = useCallback(() => {
    onChangeCount(id, 1);
  }, [id, onChangeCount]);

  const handleMinusOne = useCallback(() => {
    onChangeCount(id, -1);
  }, [id, onChangeCount]);

  return (
    <div className="element">
      <div className="element__count">{count}</div>

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
}
