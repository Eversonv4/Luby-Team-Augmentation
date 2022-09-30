import React from "react";
import {
  Container,
  Title,
  Description,
  CardsContainer,
  Card,
  CardContent,
  TitleCard,
  DescriptionCard,
} from "./styles";

import { BiTrendingUp } from "react-icons/bi";
import { MdFolderShared } from "react-icons/md";

import { motion, Variants } from "framer-motion";

import SecurityIcon from "@assets/security.svg";
import AgilityIcon from "@assets/agility_icon.svg";

const FadeAnimation: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 5,
    },
  },
};

export function ScaleTechTeamSection() {
  return (
    <Container id="scaleteam-section">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeAnimation}
      >
        <Title>
          High performing professionals to quickly scale your tech team
        </Title>
        <Description>
          Demand for IT professionals is getting higher by the day, which has
          made both salaries and time to source skyrocket. All the work to
          properly evaluate these professionals, both technically and
          culturally, as well as retaining them has become a huge toll on Tech
          and Talent Acquisition teams alike. At Luby, we have mastered this
          process like few others in this industry, as we have been helping
          companies with their IT projects and personnel for the past 20 years
        </Description>

        <CardsContainer>
          <Card>
            <CardContent>
              <AgilityIcon />

              <TitleCard>Sourcing Agility And Reduced Down Time</TitleCard>
              <DescriptionCard>
                Decrease dependency on internal recruiting and down time due to
                long waits to find the right professional with Luby's - faster
                than market - shortlist of candidates.
              </DescriptionCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <BiTrendingUp />
              <TitleCard>Faster Adaptation And Ramp-Up</TitleCard>
              <DescriptionCard>
                Since we have a focus on continuous development and skill
                enhancement, our professionals adapt and ramp-up their
                deliveries very quickly.
              </DescriptionCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <MdFolderShared />
              <TitleCard>On-Demand Availability And Talent Pools</TitleCard>
              <DescriptionCard>
                Luby's immediately available talent can be selected to address
                your current needs while our sourcing process will help you find
                very specific profiles.
              </DescriptionCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <SecurityIcon />

              <TitleCard>Replenishment And Customer Success</TitleCard>
              <DescriptionCard>
                If by any reason there's not a great fit, we replenish the
                provided role with someone with a better fit and our team of cs
                representatives will constantly follow up with you to make sure
                the delivery is meeting your expectations.
              </DescriptionCard>
            </CardContent>
          </Card>
        </CardsContainer>
      </motion.div>
    </Container>
  );
}
