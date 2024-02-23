import { type ReactNode } from "react";
import mimetypePdf from "@shared/assets/icons/mimetype-pdf.svg";

function MimetypePdfIcon({ className }: { className?: string }): ReactNode {
  return <img src={mimetypePdf} className={className} alt="" />;
}

export { MimetypePdfIcon as MimetypePdfIcon };
