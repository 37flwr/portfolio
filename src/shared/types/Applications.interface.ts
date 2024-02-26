import { ReactNode } from "react";

type ApplicationTitles = "none" | "cv" | "rickAstley";

export type Applications = Record<ApplicationTitles, ReactNode>;

type ApplicationIconKeys = "none" | "pdf" | "secret";

export type ApplicationIcons = Record<ApplicationIconKeys, ReactNode>;
