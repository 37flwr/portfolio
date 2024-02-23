import { ReactNode } from "react";

type ApplicationTitles = "none" | "cv" | "rickAstley";

export type Applications = {
  [key in ApplicationTitles]: ReactNode;
};

type ApplicationIconKeys = "none" | "pdf" | "secret";

export type ApplicationIcons = {
  [key in ApplicationIconKeys]: ReactNode;
};
