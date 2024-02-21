import { useWindowsStore } from "@app/store/windows";

export const changeWindowPosition = (
  windowId: string,
  coordinates: { x: number; y: number }
) => {
  const changeWindowPosition = useWindowsStore.getState().changeWindowPosition;

  changeWindowPosition(windowId, coordinates);
};
