import ClutchReviewStars from "@components/ClutchReview";
import Image from "next/image";
import React from "react";
import {
  Container,
  InfoContainer,
  CopyrightContainer,
  CopyrightTitle,
  InfoTitle,
  ClutchLabelIcon,
  AddressContainer,
  AddressLayout,
  AddressText,
  AddressNumber,
  DivisorLine,
} from "./styles";

export default function Footer() {
  return (
    <Container>
      <InfoContainer>
        <div>
          <Image
            src="/assets/company-icons/logo-luby-site.webp"
            alt="logo luby"
            width={150}
            height={45}
            loading="lazy"
          />
          <InfoTitle>
            Tech Expertise provided <br />
            by Top Tier Talent
          </InfoTitle>
          {/* <ClutchLabelIcon
            src="/assets/icons/clutch-icon-label.webp"
            width={180}
            height={40}
            alt="clutch icon"
            loading="lazy"
          /> */}

          <ClutchReviewStars />
        </div>
        <AddressContainer>
          <AddressLayout>
            <AddressText>
              <strong>Miami - USA</strong>
              <br />
              1110 Brickwell Ave, ste 310 Miami/ FL 33131
            </AddressText>
            <AddressNumber>Tel.: +1 (305) 600 1993</AddressNumber>
          </AddressLayout>

          <DivisorLine />

          <AddressLayout>
            <AddressText>
              <strong>São Paulo - Brazil</strong>
              <br />
              Av. Pres. Juscelino Kubitschek, 50, 17º andar Itaim Bibi, São
              Paulo/SP
            </AddressText>
          </AddressLayout>
        </AddressContainer>
      </InfoContainer>

      <CopyrightContainer>
        <CopyrightTitle>
          Copyright &copy; 2022 Luby Technology LLC. All rights reserved.
        </CopyrightTitle>
      </CopyrightContainer>
    </Container>
  );
}
