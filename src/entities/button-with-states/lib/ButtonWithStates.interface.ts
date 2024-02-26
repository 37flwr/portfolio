import { type ReactNode } from "react";

export type IButtonWithActiveStaleStates = Omit<
  IButtonWithHoverActiveStaleStates,
  "hover"
>;

export interface IButtonWithHoverActiveStaleStates {
  active: ReactNode;
  hover: ReactNode;
  stale: ReactNode;
  className?: string;
  onClick: () => void;
}
