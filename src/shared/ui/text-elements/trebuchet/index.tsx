import { type ReactNode } from "react";
import { TextElement } from "@shared/types/TextElement.interface";

import "./styles.scss";

function TrebuchetTextElement({ className, children }: TextElement): ReactNode {
  return <span className={`trebuchet-font ${className}`}>{children}</span>;
}

export { TrebuchetTextElement };
