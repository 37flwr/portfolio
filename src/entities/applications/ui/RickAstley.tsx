import { ReactNode } from "react";
import ReactPlayer from "react-player";

function RickAstley(): ReactNode {
  return (
    <ReactPlayer
      playing
      controls
      width={"100%"}
      height={"100%"}
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
  );
}

export { RickAstley };
