import { useRoutes } from "react-router";
import { BootUpToHomePage } from "@processes/index";

import { routes } from "@shared/constants/routes";

const publicRoutes = [
  {
    path: routes.BASE,
    element: <BootUpToHomePage />,
  },
];

const AppRoutes = (): JSX.Element | null => {
  return useRoutes(publicRoutes);
};

export default AppRoutes;
