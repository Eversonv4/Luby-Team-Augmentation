import React from "react";
import {
  Container,
  LayoutContainer,
  Title,
  CarrosselContainer,
  SlideImage,
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
            aria-label="Logos companies"
          >
            <SplideSlide>
              <SlideImage url="/assets/company-icons/sunwest-bank.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/bitso.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/dci.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/optii.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/neocova.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/usend.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/reach.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/pay4fun.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/flipp.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage url="/assets/company-icons/papaya.webp" />
            </SplideSlide>

            <SplideSlide>
              <SlideImage
                style={{ backgroundSize: 190 }}
                url="/assets/company-icons/safrapay.webp"
              />
            </SplideSlide>
          </Splide>
        </CarrosselContainer>
      </LayoutContainer>
    </Container>
  );
}
