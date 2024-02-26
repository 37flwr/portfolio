import { type ReactNode } from "react";
import securityWarning from "@shared/assets/icons/security-warning.svg";

function SecurityWarning({ className }: { className?: string }): ReactNode {
  return <img src={securityWarning} className={className} alt="" />;
}

export { SecurityWarning };
