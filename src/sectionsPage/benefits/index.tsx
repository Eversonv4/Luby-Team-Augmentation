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

import { motion, Variants } from "framer-motion";

const FadeTranslateSection: Variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 80,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

export function BenefitsSection() {
  return (
    <Container>
      <motion.article
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeTranslateSection}
      >
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
              <BenefitsText>
                Increased productivity and performance;
              </BenefitsText>
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
      </motion.article>
    </Container>
  );
}
