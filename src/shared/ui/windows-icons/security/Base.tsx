import { type ReactNode } from "react";
import securityIcon from "@shared/assets/icons/security.svg";

function Security({ className }: { className?: string }): ReactNode {
  return <img src={securityIcon} className={className} alt="" />;
}

export { Security };
