import { type ReactNode } from "react";
import applicationOne from "@shared/assets/images/microsoft-logo.png";
import { OpenWindowButton } from "@features/open-window";
import { NewWindow } from "@shared/types/Window.interface";

const applications: Array<NewWindow> = [
  {
    Icon: <img src={applicationOne} />,
    title: "Application 1",
    Content: <div>123</div>,
  },
];

function Applications(): ReactNode {
  return (
    <>
      {applications.map((application) => (
        <OpenWindowButton {...application} />
      ))}
    </>
  );
}

export { Applications };
