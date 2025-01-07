import React, { createContext, useRef, useContext } from "react";

const ListRefContext = createContext({
  listRef: null,
});

export function ListRefProvider({ data, children }) {
  const listRef = useRef({
    data,
  }).current;

  return (
    <ListRefContext.Provider
      value={{
        listRef,
      }}
    >
      {children}
    </ListRefContext.Provider>
  );
}

export function useListRefContext() {
  return useContext(ListRefContext);
}
