import React from "react";
import {
  Container,
  LayoutContainer,
  Title,
  CarrosselContainer,
} from "./styles";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export function CompaniesSection() {
  return (
    <Container>
      <LayoutContainer>
        <Title>Serving companies across the Americas</Title>
        <CarrosselContainer>
          <Splide
            className="carrossel-companies"
            options={{
              arrows: false,
              autoplay: true,
              interval: 3000,
              speed: 2000,
              gap: 20,
              type: "loop",
              rewind: true,
              perPage: 3,
              width: "100%",
              pagination: false,
              lazyLoad: true,
              focus: "center",
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img
                src="/assets/company-icons/sunwest-bank.webp"
                alt="sunwest bank logo"
              />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/bitso.webp" alt="Bitso logo" />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/dci.webp" alt="DCI logo" />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/optii.webp" alt="Optii logo" />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/neocova.webp"
                alt="Neocova logo"
              />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/usend.webp" alt="Usend logo" />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/reach.webp" alt="Reach.ai logo" />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/pay4fun.webp"
                alt="Pay 4 Fun logo"
              />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/flipp.webp" alt="Flipp logo" />
            </SplideSlide>

            <SplideSlide>
              <img src="/assets/company-icons/papaya.webp" alt="Papaya logo" />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/safrapay.webp"
                alt="Safrapay logo"
              />
            </SplideSlide>
          </Splide>
        </CarrosselContainer>
      </LayoutContainer>
    </Container>
  );
}
