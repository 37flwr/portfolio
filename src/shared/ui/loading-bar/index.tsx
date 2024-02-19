import { type ReactNode } from "react";
import "./styles.scss";

const loadingBarElements = 3;

function LoadingBar(): ReactNode {
  return (
    <div className="loading-bar">
      {Array(...Array(loadingBarElements)).map(() => (
        <div className="loading-bar__element" />
      ))}
    </div>
  );
}

export { LoadingBar as LoadingBar };
