import { CVApplication } from ".";
import { MimetypePdfIcon } from "@shared/ui/mimetypes/pdf";
import mimetypeUnknown from "@shared/assets/icons/mimetype-unknown.svg";
import {
  ApplicationIcons,
  Applications,
} from "@shared/types/Applications.interface";
import { RickAstley } from "./ui/RickAstley";
import { MimetypeSecretIcon } from "@shared/ui/mimetypes/secret";

export const applicationScheme: Applications = {
  none: (
    <div style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}>
      _blank
    </div>
  ),
  cv: <CVApplication />,
  rickAstley: <RickAstley />,
};

export const applicationIconScheme: ApplicationIcons = {
  none: <img src={mimetypeUnknown} alt="" />,
  pdf: <MimetypePdfIcon />,
  secret: <MimetypeSecretIcon />,
};
