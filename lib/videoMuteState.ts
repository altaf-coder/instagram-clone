// Shared mute state for all video players
let globalMuteState = true; // Default to muted
const listeners = new Set<(muted: boolean) => void>();

export const getGlobalMuteState = (): boolean => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("videoMuteState");
    if (stored !== null) {
      globalMuteState = stored === "true";
    }
  }
  return globalMuteState;
};

export const setGlobalMuteState = (muted: boolean) => {
  globalMuteState = muted;
  if (typeof window !== "undefined") {
    localStorage.setItem("videoMuteState", muted.toString());
  }
  // Notify all listeners
  listeners.forEach((listener) => listener(muted));
};

export const subscribeToMuteState = (callback: (muted: boolean) => void) => {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
};
