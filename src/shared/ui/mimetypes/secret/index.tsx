import { type ReactNode } from "react";
import mimetypeSecret from "@shared/assets/icons/mimetype-secret.svg";

function MimetypeSecretIcon({ className }: { className?: string }): ReactNode {
  return <img src={mimetypeSecret} className={className} alt="" />;
}

export { MimetypeSecretIcon as MimetypeSecretIcon };
