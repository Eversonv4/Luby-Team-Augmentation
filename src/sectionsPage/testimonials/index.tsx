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
    <Container>
      <Title>Testimonials</Title>
      <SubTitle>
        We are proud to share the referrals of our dear customers
      </SubTitle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: "some" }}
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
            // data-scale="100"
            data-reviews="1981829,1973220,1962997,1917262,1909639"
            data-clutchcompany-id="1748502"
          ></div>
        </ContainerCarrossel>
      </motion.div>

      <StatusContainer>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "some" }}
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

              <div className="custom-html">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="1"
                  data-height="40"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-darkbg="darkbg"
                  data-clutchcompany-id="1748502"
                >
                  <iframe
                    id="iframe-0.22077650616990474"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/1/darkbg?ref_domain=luby.co&amp;uid=1748502&amp;rel_nofollow=true&amp;ref_path=//team-augmentation/"
                    height="40px"
                    scrolling="no"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      display: "block",
                      height: "40px",
                    }}
                    title="[iFrameSizer]iframe-0.22077650616990474:0:0:mouseleave:396:-4301 Dark"
                  ></iframe>
                </div>
              </div>
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
