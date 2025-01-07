import { useEffect, useState } from "react";

export const updateStore = {
  components: new Map(),

  subscribe(componentId, updater) {
    this.components.set(componentId, updater);
  },

  unsubscribe(componentId) {
    this.components.delete(componentId);
  },

  triggerUpdate(componentId) {
    const updater = this.components.get(componentId);

    if (updater) {
      updater();
    }
  },
};

export const useManualUpdate = (componentId) => {
  const [, updateState] = useState();

  useEffect(() => {
    const updater = () => updateState(Date.now());

    updateStore.subscribe(componentId, updater);

    return () => {
      updateStore.unsubscribe(componentId);
    };
  }, [componentId]);
};
