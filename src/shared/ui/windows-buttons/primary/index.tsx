import { type PropsWithChildren, type ReactNode } from "react";

import "./styles.scss";

function PrimaryButton({ children }: PropsWithChildren): ReactNode {
  return (
    <div className="primary-button_wrapper">
      <button className="primary-button">{children}</button>
    </div>
  );
}

export { PrimaryButton };
