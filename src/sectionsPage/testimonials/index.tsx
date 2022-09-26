import React from "react";
import {
  Container,
  ContainerCarrossel,
  Title,
  SubTitle,
  StatusContainer,
} from "./styles";

export function TestimonnialsSection() {
  return (
    <Container>
      <Title>Testimonials</Title>
      <SubTitle>
        We are proud to share the referrals of our dear customers
      </SubTitle>
      <ContainerCarrossel>
        {/* <div className="custom-html">
          <script src="https://widget.clutch.co/static/js/widget.js"></script>
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="4"
            data-height="auto"
            data-nofollow="true"
            data-expandifr="true"
            data-scale="100"
            data-header-color="#002066"
            data-footer-color="#002066"
            data-primary-color="#002066"
            data-secondary-color="#002066"
            data-reviews="1981829,1973220,1962997,1917262,1909639"
            data-clutchcompany-id="1748502"
            style={{
              transform: "scale(1)",
              marginBottom: "0px",
              transformOrigin: "0px 0px",
            }}
          >
            <iframe
              id="iframe-0.2177849847350264"
              width="100%"
              src="https://widget.clutch.co/widgets/get/4?ref_domain=luby.co&amp;uid=1748502&amp;header_color=%23002066&amp;footer_color=%23002066&amp;primary_color=%23002066&amp;secondary_color=%23002066&amp;rel_nofollow=true&amp;reviews=1981829%2C1973220%2C1962997%2C1917262%2C1909639&amp;ref_path=//team-augmentation/"
              height="600px"
              scrolling="no"
              style={{
                border: "none",
                overflow: "hidden",
                display: "block",
                height: "641px",
              }}
              title="[iFrameSizer]iframe-0.2177849847350264:0:0:mouseleave:556:-11104"
            ></iframe>
          </div>
        </div> */}
        <script
          type="text/javascript"
          src="https://widget.clutch.co/static/js/widget.js"
          async
        ></script>{" "}
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

      <StatusContainer>
        {/* <div className="custom-html">
          <script src="https://widget.clutch.co/static/js/widget.js"></script>
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
        </div> */}
      </StatusContainer>
    </Container>
  );
}
