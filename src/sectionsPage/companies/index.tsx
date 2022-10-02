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
              perPage: 5,
              width: "100%",
              pagination: false,
              lazyLoad: true,
              focus: "center",
              breakpoints: {
                1000: {
                  perPage: 4,
                  gap: 10,
                },
                800: {
                  perPage: 3,
                  gap: 10,
                },
                700: {
                  perPage: 2,
                  focus: 1,
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img
                src="/assets/company-icons/sunwest-bank.webp"
                alt="sunwest bank logo"
                loading="lazy"
                width="180"
                height="48"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/bitso.webp"
                alt="Bitso logo"
                loading="lazy"
                width="180"
                height="55"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/dci.webp"
                alt="DCI logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/optii.webp"
                alt="Optii logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/neocova.webp"
                alt="Neocova logo"
                loading="lazy"
                width="140"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/usend.webp"
                alt="Usend logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/reach.webp"
                alt="Reach.ai logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/pay4fun.webp"
                alt="Pay 4 Fun logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/flipp.webp"
                alt="Flipp logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/papaya.webp"
                alt="Papaya logo"
                loading="lazy"
                width="180"
                height="108"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src="/assets/company-icons/safrapay.webp"
                alt="Safrapay logo"
                loading="lazy"
                width="180"
                height="69"
              />
            </SplideSlide>
          </Splide>
        </CarrosselContainer>
      </LayoutContainer>
    </Container>
  );
}
