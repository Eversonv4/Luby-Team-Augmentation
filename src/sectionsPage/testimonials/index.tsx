import React from "react";
import {
  Container,
  ContainerCarrossel,
  Title,
  SubTitle,
  StatusContainer,
  StatusContainerLayout,
  StatusTitle,
  StatusSubTitle,
  AchievementTitle,
  ClutchIcon,
} from "./styles";

import { motion, Variants } from "framer-motion";
import { CarrosselTestimonials } from "@components/CarrosselTestimonials";
import ClutchReviewStars from "@components/ClutchReview";

const FadeAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

export function TestimonnialsSection() {
  return (
    <Container id="testimonials-section">
      <Title>Testimonials</Title>
      <SubTitle>
        We are proud to share the referrals of our dear customers
      </SubTitle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeAnimation}
      >
        <ContainerCarrossel>
          <CarrosselTestimonials />
        </ContainerCarrossel>
      </motion.div>

      <StatusContainer>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: "some" }}
          variants={FadeAnimation}
        >
          <StatusContainerLayout>
            <div>
              <StatusTitle>
                <strong>WHAT SETS LUBY APPART? </strong> <br />
                WE HAVE BEEN ON THIS JOURNEY FOR MORE THAN 20 YEARS
              </StatusTitle>

              <StatusSubTitle>
                And our custormers trust us to keep delivering value to them
                through technology and talent.
              </StatusSubTitle>
            </div>
            <div>
              <AchievementTitle>
                <strong>1000</strong>
                <span>+</span>
                projects delivered successfully
              </AchievementTitle>
              <AchievementTitle>
                <strong>300</strong>
                <span>+</span>
                talented professionals
              </AchievementTitle>

              <ClutchReviewStars />
            </div>
          </StatusContainerLayout>
        </motion.div>
      </StatusContainer>
    </Container>
  );
}
