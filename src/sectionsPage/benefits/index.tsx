import React from "react";
import {
  Container,
  ContainerLayout,
  Title,
  TitleContrast,
  CheckIcon,
  BenefitsList,
  BenefitsText,
} from "./styles";

export function BenefitsSection() {
  return (
    <Container>
      <ContainerLayout>
        <Title>
          Inherent Benefits of Luby's Team Augmentation Solution
          <TitleContrast> for your company</TitleContrast>
        </Title>

        <BenefitsList>
          <li>
            <CheckIcon />
            <BenefitsText>
              Access to the most talented IT professionals of the region;
            </BenefitsText>
          </li>
          <li>
            <CheckIcon />
            <BenefitsText>Increased productivity and performance;</BenefitsText>
          </li>
          <li>
            <CheckIcon />
            <BenefitsText>
              Dedicated and Flexible service provider ready to support your
              scaling needs;
            </BenefitsText>
          </li>
          <li>
            <CheckIcon />
            <BenefitsText>
              Reduced risk inherent to directly hiring tech personnel (hiring
              developers is our specialty);
            </BenefitsText>
          </li>
          <li>
            <CheckIcon />
            <BenefitsText>
              Higher cost effectiveness through Luby's nearshore advantage;
            </BenefitsText>
          </li>
        </BenefitsList>
      </ContainerLayout>
    </Container>
  );
}
