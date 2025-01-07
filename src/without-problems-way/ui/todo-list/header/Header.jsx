import { useCallback, memo } from "react";

import { useListRefContext } from "../../../model";
import { useManualUpdate } from "../../../lib";

export const Header = memo(({ onAddElement }) => {
  useManualUpdate("Header");

  const { listRef } = useListRefContext();

  const getTotalCount = useCallback(() => {
    return listRef.data.reduce((acc, curr) => (acc += curr.count), 0);
  }, []);

  return (
    <div className="header">
      <div className="header__total-count">Total count: {getTotalCount()}</div>

      <button className="header__add" onClick={onAddElement}>
        add
      </button>
    </div>
  );
});
