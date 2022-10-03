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
import { Helmet } from "react-helmet";

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
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="4"
            data-height="auto"
            data-nofollow="true"
            data-expandifr="true"
            data-scale="100"
            data-reviews="1981829,1973220,1962997,1917262,1909639"
            data-clutchcompany-id="1748502"
          ></div>
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

              <ClutchIcon
                src="/assets/icons/clutch-icon.webp"
                width={185}
                height={64}
                alt="clutch logo"
                loading="lazy"
              />
            </div>
          </StatusContainerLayout>
        </motion.div>
      </StatusContainer>
      <Helmet>
        <script
          type="text/javascript"
          src="https://widget.clutch.co/static/js/widget.js"
          async
        ></script>
      </Helmet>
    </Container>
  );
}
