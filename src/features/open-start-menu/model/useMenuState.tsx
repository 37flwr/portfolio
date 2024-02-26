import { useApplicationStateStore } from "@app/store/applicationState";

export const useMenuState = (): [boolean, () => void] => {
  const menuOpened = useApplicationStateStore((store) => store.menuOpened);
  const setMenuOpenedStateTo = useApplicationStateStore(
    (store) => store.setMenuOpenedStateTo
  );

  const switchMenuOpenedState = () => {
    setMenuOpenedStateTo(!menuOpened);
  };

  return [menuOpened, switchMenuOpenedState];
};
