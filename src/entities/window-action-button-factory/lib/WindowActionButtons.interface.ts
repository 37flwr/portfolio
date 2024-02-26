import { type ReactNode } from "react";

export type WindowActionButtonVariants =
  | "close"
  | "shrink"
  | "expand"
  | "minimize";

export type WindowActionButtonScheme = Record<
  WindowActionButtonVariants,
  (arg: () => void) => ReactNode
>;

export interface WindowActionButtonFactory {
  type: WindowActionButtonVariants;
  onClick: () => void;
}
