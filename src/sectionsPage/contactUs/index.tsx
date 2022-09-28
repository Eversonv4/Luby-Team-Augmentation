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
  function MessageConsole(e: any) {
    e.preventDefault();
    console.log("Hello");
  }

  return (
    <Container>
      <ContainerLayout>
        <div>
          <Span>let's talk about</Span>
          <Title>Team Augmentation</Title>
          <ContactTitle>
            Please fill in the form
            <br />
            or call <strong>+1 305 600 1993</strong>
          </ContactTitle>
        </div>
        <FormContainer>
          <form onSubmit={MessageConsole}>
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company's Name" />
            <input type="text" placeholder="Your Role" />
            <input type="tel" placeholder="(___) ___-____" />
            <textarea placeholder="Please feel free to enter all information that can help us to assist you"></textarea>

            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </ContainerLayout>
    </Container>
  );
}
