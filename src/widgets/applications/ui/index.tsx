import { type ReactNode } from "react";
import { OpenWindowButton } from "@features/open-window";
import { NewWindow } from "@shared/types/Window.interface";

import "./styles.scss";

const applications: Array<NewWindow> = [
  {
    icon: "pdf",
    title: "My_CV.pdf",
    application: "cv",
  },
  {
    icon: "secret",
    title: "My Ledger Mnemonic",
    application: "rickAstley",
  },
];

function Applications(): ReactNode {
  return (
    <div className="applications">
      {applications.map((application) => (
        <OpenWindowButton {...application} />
      ))}
    </div>
  );
}

export { Applications };
