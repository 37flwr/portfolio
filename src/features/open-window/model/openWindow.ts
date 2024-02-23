import { useWindowsStore } from "@app/store/windows";
import { NewWindow } from "@shared/types/Window.interface";

export const openWindow = (data: NewWindow) => {
  const openWindow = useWindowsStore.getState().openWindow;

  openWindow(data);
};
