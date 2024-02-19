import { type ReactNode } from "react";
import { useBootUpStore } from "@app/store/bootUp";
import { BootUpPage, HomePage } from "@pages/index";

function BootUpToHomePage(): ReactNode {
  const showedBootUp = useBootUpStore((store) => store.showedBootUpScreen);

  if (!showedBootUp) return <BootUpPage />;

  return <HomePage />;
}

export { BootUpToHomePage };
