import React from "react";
import {
  Container,
  ContainerLayout,
  Span,
  Title,
  ContactTitle,
  FormContainer,
} from "./styles";

export function ContactUsSection() {
  return (
    <Container>
      <ContainerLayout>
        <FormContainer>
          <Span>let's talk about</Span>
          <Title>Team Augmentation</Title>
          <ContactTitle>
            Please fill in the form
            <br />
            or call <strong>+1 305 600 1993</strong>
          </ContactTitle>
        </FormContainer>
        <FormContainer>
          <h2>Hello</h2>
        </FormContainer>
      </ContainerLayout>
    </Container>
  );
}
