import React from "react";
import { Container } from "./styles";

export function IframeVideo() {
  return (
    <Container>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/UjylogRQItI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
}
