import { useWindowsStore } from "@app/store/windows";

export const saveWindowPosition = (
  windowId: string,
  coordinates: { x: number; y: number }
) => {
  const saveWindowPosition = useWindowsStore.getState().saveWindowPosition;

  saveWindowPosition(windowId, coordinates);
};
