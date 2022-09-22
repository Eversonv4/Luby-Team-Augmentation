import React from "react";
import { Container, PlayIcon } from "./styles";

interface IThumb {
  showVideo: () => void;
}

export function IframeThumb({ showVideo }: IThumb) {
  return (
    <Container>
      <PlayIcon onClick={showVideo} />
    </Container>
  );
}
