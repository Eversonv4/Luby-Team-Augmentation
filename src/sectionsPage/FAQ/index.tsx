import React, { useState } from "react";

import {
  Container,
  ContainerLayout,
  Title,
  TitleHighlight,
  QuestionContainer,
} from "./styles";
import { Accordeon } from "@components/Accordion";

import { motion, Variants } from "framer-motion";

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

export function FaqSection() {
  const [open, setOpen] = useState("");

  function handleOpenAcordion(value: string) {
    if (value === open) {
      setOpen("");
      return;
    }
    setOpen(value);
  }

  return (
    <Container id="faq-section">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeAnimation}
      >
        <ContainerLayout>
          <TitleHighlight>F.A.Q</TitleHighlight>
          <Title>Team Augmentation Frequently Asked Questions</Title>

          <QuestionContainer>
            <div>
              <Accordeon
                Accordeonheight="375px"
                question="What is IT Team Augmentation?"
                onClick={() => handleOpenAcordion("one")}
                open={open === "one"}
              >
                <p>
                  Team Augmentation if the full outsourcing of a technical
                  position to a third party company. The company will be
                  responsible for providing a professional with the same
                  requirements of the job description your company has created
                  for that position.
                </p>

                <p>
                  This practice is very common to add technical talent to your
                  team on an on-demand basis so your company can scale as fast
                  as your growth goals.
                </p>

                <p>
                  At Luby we have a robust yet flexible talent acquisition and
                  sourcing process that guarantees access to top tier IT talent.
                  We cover different chapters, technology stacks and mid to
                  senior level professionals.
                </p>
              </Accordeon>

              <Accordeon
                Accordeonheight="198px"
                question="What's the difference between Extended Teams and Team Augmentation?"
                onClick={() => handleOpenAcordion("two")}
                open={open === "two"}
              >
                <p>
                  On the Extended Teams offering, the squads are fully managed
                  by Luby and the professionals are selected by our team without
                  the client's validation. On the other hand, for the Team
                  Augmentation format the allocated personnel are hired by Luby,
                  but onboarded and fully managed by the client. The client
                  still relies on Luby's resources to guarantee the professional
                  adherence to the client's company.
                </p>
              </Accordeon>

              <Accordeon
                Accordeonheight="174px"
                question="Is there any restriction to hire the Team Augmentation services?"
                onClick={() => handleOpenAcordion("three")}
                open={open === "three"}
              >
                <p>
                  Any company or business that needs specialized development
                  teams can make use of the Team Augmentation services as long
                  as they have a tech structure in place. IT Team Augmentation
                  services are not offered to companies that do not have a tech
                  professional that can manage the allocated personnel.
                </p>
              </Accordeon>

              <Accordeon
                Accordeonheight="834px"
                question="How's the implementation of the Team Augmentation Service?"
                onClick={() => handleOpenAcordion("four")}
                open={open === "four"}
              >
                <p>
                  Luby's IT Team Augmentation Process will be implemented
                  through the following steps:
                </p>
                <ul>
                  <li>
                    <strong>Need Assessment</strong> - Our commercial team will
                    identify the needed professionals through a quick call or by
                    the evaluation of the submitted job descriptions;
                  </li>
                  <li>
                    <strong>Interview Process</strong> - Luby's TA team will
                    then source the candidate either on our immediately
                    available bench or through a custom made selective process.
                    In both situations the candidates will go through cultural
                    assessment and technical assessment interviews;
                  </li>
                  <li>
                    <strong>Definition of Professionals</strong> - After
                    identifying the potential candidates, your company will
                    validate them either through screening or a final panel
                    interview with your internal stakeholders;
                  </li>
                  <li>
                    <strong>Engagement Start</strong> - Once the professionals
                    are selected, we assign an official start date for the
                    engagement;
                  </li>
                  <li>
                    <strong>Full Allocation Transparency</strong> - Every month
                    your company receives a timesheet report with the total
                    number of hours that were worked by the professionals during
                    the period alongside the respective invoice;
                  </li>
                  <li>
                    <strong>Luby's Managerial Support</strong> - Although the
                    professionals are fully managed by the client, Luby's team
                    will still be accompanying the talent to make sure they are
                    motivated and delivering according to the expectations of
                    the position.
                  </li>
                  <li>
                    <strong>Continuous Follow-Ups and Feedback</strong> - Luby's
                    CS team will constantly follow up with the client to check
                    performance and make sure we can address any possible
                    problems before they happen
                  </li>
                </ul>
              </Accordeon>
            </div>

            <div>
              <Accordeon
                Accordeonheight="512px"
                question="What are Luby's nearshore advantages?"
                onClick={() => handleOpenAcordion("five")}
                open={open === "five"}
              >
                <p>
                  As all of Luby's professionals are working remotely from
                  Brazil, we provide services to all clients in the United
                  States and Canada through a nearshoring model:
                </p>
                <ul>
                  <li>
                    Given Brazil's geographic location, all working
                    professionals are able to provide the services during the
                    same business hours as our client's, in all four continental
                    time zones in North America.
                  </li>
                  <li>
                    In case on-site collaboration is required, our team is able
                    to visit through several direct overnight flights to the
                    biggest cities of the US and Canada.
                  </li>
                  <li>
                    The fast advancing local landscape was benchmarked on the
                    Silicon Valley standards and methodologies, so our personnel
                    are used to the same business values and organizational
                    structures as our clients, which translates in almost no
                    cultural barriers.
                  </li>
                  <li>
                    Since we invest a lot in teaching, testing and enhancing the
                    English level of our employees, all provided candidates are
                    fully proficient in the language.
                  </li>
                </ul>
              </Accordeon>

              <Accordeon
                Accordeonheight="126px"
                question="Why should I hire Luby's Team Augmentation services?"
                onClick={() => handleOpenAcordion("six")}
                open={open === "six"}
              >
                <p>
                  Luby's talent pool of high performing fully remote IT
                  professionals will increase your team's performance while our
                  Team augmentation process will reduce your recruitment time
                  and tech personnel liabilities.
                </p>
              </Accordeon>

              <Accordeon
                Accordeonheight="198px"
                question="What does the service offer?"
                onClick={() => handleOpenAcordion("seven")}
                open={open === "seven"}
              >
                <p>
                  The service is adapted to the actual needs of each client. Our
                  team always assesses the required profiles, submits the
                  respective statement of work with the hourly rates and hiring
                  conditions, finally providing up to 4 highly adherent
                  candidates for each position. We will always work with the
                  same level of commitment for every client, so all allocated
                  personnel are fully dedicated to that client to avoid any
                  quality or data risks.
                </p>
              </Accordeon>
            </div>
          </QuestionContainer>
        </ContainerLayout>
      </motion.div>
    </Container>
  );
}
