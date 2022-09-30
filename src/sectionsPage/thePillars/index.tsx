import React, { useState } from "react";
import Link from "next/link";
import { Container, Title, SubTitle, ButtonContrast } from "./styles";
import { FiChevronDown } from "react-icons/fi";

import { IframeVideo } from "@components/IframeVideo";
import { IframeThumb } from "@components/IframeThumb";

export function ThePillars() {
  const [loadVideo, setLoadVideo] = useState(false);

  function showVideo() {
    setLoadVideo(true);
  }

  return (
    <Container id="pillars-section">
      <Title>The 3 Pillars of Luby's IT Team Augmentation Service</Title>
      <SubTitle>
        How could we increase the value provided in our IT Team Augmentation
        service, especially to our client's in North America? Watch what Victor
        Chiea, our Head of International Business Development, has to tell us
        about.
      </SubTitle>
      {loadVideo ? <IframeVideo /> : <IframeThumb showVideo={showVideo} />}
      <Link href="#contact-section">
        <ButtonContrast>Contact Us</ButtonContrast>
      </Link>
    </Container>
  );
}

{
  /* <div>{loadVideo && <IframeVideo />}</div> */
}
